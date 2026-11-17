pipeline{
agent any

stages {

     stage('checkout code') {
          steps{
                git branch: 'main',
                credentialsID: 'saurabh',
                url: 'https://github.com/saurabh-shelke24/static-ws.git'
                echo: "Git repo code downloaded successfully"         
}
}
     stage('Git show all file') {

     steps{
           sh 'ls -la'
           echo "Git all file shown successfully"
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

}