pipeline {
    agent { label 'sonar' }

    environment {
        AWS_REGION = 'us-east-1'
        ECR_REPO_NAME = 'my-app-repo'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        AWS_CREDENTIALS_ID = 'aws-cred-id' // Replace with your Jenkins AWS credential ID
        CONTAINER_NAME = 'my-app-container'
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Configure AWS CLI') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: "${env.AWS_CREDENTIALS_ID}"
                ]]) {
                    sh '''
                        aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
                        aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
                        aws configure set default.region ${AWS_REGION}
                    '''
                }
            }
        }

        stage('Login to ECR') {
            steps {
                sh '''
                    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin $(aws sts get-caller-identity --query "Account" --output text).dkr.ecr.${AWS_REGION}.amazonaws.com
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def accountId = sh(script: "aws sts get-caller-identity --query 'Account' --output text", returnStdout: true).trim()
                    def ecrUri = "${accountId}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}"
                    sh """
                        docker build -t ${ECR_REPO_NAME}:${IMAGE_TAG} .
                        docker tag ${ECR_REPO_NAME}:${IMAGE_TAG} ${ecrUri}:${IMAGE_TAG}
                    """
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    def accountId = sh(script: "aws sts get-caller-identity --query 'Account' --output text", returnStdout: true).trim()
                    def ecrUri = "${accountId}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}"
                    sh "docker push ${ecrUri}:${IMAGE_TAG}"
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                script {
                    sh """
                        if [ \$(docker ps -a -q -f name=${CONTAINER_NAME}) ]; then
                            echo "Stopping and removing existing container..."
                            docker stop ${CONTAINER_NAME} || true
                            docker rm ${CONTAINER_NAME} || true
                        else
                            echo "No existing container named '${CONTAINER_NAME}' found."
                        fi
                    """
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    def accountId = sh(script: "aws sts get-caller-identity --query 'Account' --output text", returnStdout: true).trim()
                    def ecrUri = "${accountId}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}"
                    sh "docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${ecrUri}:${IMAGE_TAG}"
                }
            }
        }
    }

    post {
        cleanup {
            sh 'ls'
        }
    }
}
