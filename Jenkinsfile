def node = 'dev_agent_157.245.105.84'
def dockerImageName = 'dymlabs/dev-angular-project'

pipeline {
    agent {
        label node
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from SCM (e.g., Git)
                git 'https://github.com/ChetanYours/Angular-Projects.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Use Node.js image to install dependencies
                container('nodejs') {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                // Use Node.js image to build Angular project
                container('nodejs') {
                    sh 'npm run build'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                // Use Docker to run the Docker container
                sh 'docker run -d -p 8080:80 angular-app'
            }
        }

        stage('Publish Artifacts') {
            steps {
                // Archive the built artifacts (dist folder)
                archiveArtifacts 'dist/**'
            }
        }
    }

    post {
        success {
            // Trigger deployment or other post-build actions
            echo 'Build successful! Ready for deployment.'
        }

        failure {
            // Handle failure cases
            echo 'Build failed! Please check the build logs for errors.'
        }
    }
}
