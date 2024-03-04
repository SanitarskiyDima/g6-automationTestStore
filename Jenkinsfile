pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                sh "npm ci"
                sh "npm i -g allure-commandline --save-dev"
            }
        }
        stage('Cypress run') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS'){
                    sh "npm run allure:clear"
                    sh "npm run cy:run:allure"
                }
            }
        }
        stage('Allure report') {
            steps {
                sh "npm run allure:generate"
                allure(
                    results: [[path: 'allure-results']]
                )
            }
        }
    }
}
