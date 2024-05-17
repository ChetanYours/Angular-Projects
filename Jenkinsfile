def node = 'dev_agent_157.245.105.84'
def dockerImageName = 'dymlabs/dev-angular-project'

pipeline {
        agent any
        stages {
            stage("build") {
                steps {
                    echo 'Base PF Building start'
                    withCredentials([gitUsernamePassword(credentialsId: 'd47f92c8-d944-42be-bf04-261048ff4c71', gitToolName: 'git-tool')]) {
			                  sh 'git tag t_${BUILD_NUMBER}'
                        sh 'git push origin t_${BUILD_NUMBER}'
		            }
                    dir('.'){
                        sh 'taskset -c 1 npm i'
                        sh 'taskset -c 1 npx ng build --prod --build-optimizer'     
                    }
                    echo 'Base PF Building end'
                    //sh 'printenv'
                    //echo env.GIT_BRANCH
                }
            } // end build

			stage("docker build") {
		    	steps {
			    	echo 'docker build start'
                    sh 'docker images | grep dymlabs/iot-web | tr -s " " | cut -d " " -f 3 | xargs -I {} docker rmi -f {}'
				            sh 'docker build -t dymlabs/iot-web -t dymlabs/iot-web:t_${BUILD_NUMBER} .'
				            echo 'docker build end ..'
			    }
		    }
            
            stage("docker push") {
            	steps {
		            echo 'docker push start'
                    withCredentials([usernamePassword(credentialsId: 'dockerHub', usernameVariable: 'Username', passwordVariable: 'Password')]) {
			            sh 'docker login -u $Username -p $Password'
		            }
		            sh 'docker push --all-tags dymlabs/iot-web'
		            echo 'docker push end'
	        }
}
            
        } // end stages
    }
