pipeline{
agent any

stages {

     stage('checkout code') {
          steps{
                git branch: 'main',
                credentialsId: 'saurabh',
                url: 'https://github.com/saurabh-shelke24/static-ws.git'
                echo "Git repo code downloaded successfully"         
}
}
     stage('Git show all file') {
     steps{
           sh 'ls -la'
           echo "Git all file shown successfully"
}    
}
    stage('latest checkout') {
        steps{
            sh 'checkout scm'
            echo "Git hub latest checksout successful"
        }
    }

    stage('Git checked required file'){
        steps{
            sh 'ls -la',
            sh 'test -f index.html',
            sh 'test -f Dockerfile'
        }
    }

stage('Docker build'){
    steps {
        sh 'docker build -t static-ws:latest .'
        echo "build succesfull"
    }
}

stage('remove existing container'){
    steps{
        sh'docker rm -f statis-ws || true',
 sh 'docker run -d --name static-ws --restart unless-stopped -p 80:80 static-ws:latest'
 echo "Deploy successful"
    }
}
}
   post {
      success {
    echo 'Wooo Hooo Website deployed suucessfully!'
}
    failure {
     echo 'Ohhh Nooo Deployment Fail!'    
}
}
}