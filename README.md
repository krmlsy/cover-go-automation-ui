# cypress-cucumber-example-automation-infrastructure

> My Demo UI Project -->
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

  
### 💻 Topics

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor

- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor

- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter

- [x] https://github.com/cucumber/json-formatter

- [x] https://github.com/Shelex/cypress-allure-plugin

  

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

  

-  ## 💻 Pre-requisites

1. Node JS
2. Vscode & Cucumber Plugin (alternativeIy I used: Cucumber (Gherkin) Full Support) 
link: https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete
3. Optional: Java 8 for Allure Reporter
4. Optional: Json-formatter for Native Reporter option(depends on your OS: https://github.com/cucumber/json-formatter)

  

## 🚀 Install the project

Install project dependencies with: npm i

## Run the demo:

  
1. Standard Execution: 

npm run cypress:execution-regression

2. Generate Allure Report:
> npm run allure:report

4. Open Allure Report:
> npm run allure:open
> 
### Run in different browsers
Elektron: 
> npm run cypress:execution:electro

Chrome: 
> npm run cypress:execution:chrome

Firefox: 
> npm run cypress:execution:firefox

### Run in docker
1.  Build dockerfile and create a docker image
> docker build -t cucumberproject:1.0 .

2. Run tests and get the result
> docker run -i -t cucumberproject:1.0 cypress run --spec cypress/e2e/features/*

in order to run in a specific browser add `--browser chrome`
in order to run a specific tag add `--env tags=@mobile`

example:

    docker run -i -t cucumberproject:1.0 cypress run --spec cypress/e2e/features/* --env tags=@exception --browser electron

## Github Actions
Project has a github actions yml file that on every code push it runs the tests.

    name: Cypress Tests
    on: [push]
    jobs:
    cypress-run:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
    uses: actions/checkout@v2
    # Install NPM dependencies, cache them correctly
    # and run all Cypress tests
    - name: Cypress run
    uses: cypress-io/github-action@v4.2.0  # use the explicit version number
    with:
    command: npm run cypress:execution
