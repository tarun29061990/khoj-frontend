# Khoj Frontend

It's a frontend application which uses Khoj backend service. Its powered by react and this application is bootstrapped with create react app.  
Want to look at the Khoj backend service, click on the link below:
(https://github.com/tarun29061990/khoj)

***

## How to set up:
1. Clone the repository.
2. Make sure your node version is v12.17.0 and npm version is 6.14.4
3. Run commands below:
        
        npm install
        npm start
4. App will start running on http://localhost:3000

## Test
Test are located as a sibling to the component file. For running tests , run commands below:

    npm test

## Project Structure
The project structure is inspired by react standard project structure. Entry point of the app is index.js which invokes App.js and then App.js invokes Main component called KhojApp.js located in src folder. 

src folder contains presentation and container components. Container components are the host of the application and maintains state of the whole app whereas presentation component takes care of the rendering part based on the data passed to them.

**index.js** - Entry point of application

**App.js** - Mounting point of the whole application

**src/container/KhojApp.js** - Container component which maintains state for the whole app.

**src/presentation/AutoCompleteForm.js** - Its a Form with text field and handles pill component rendering logic.

**src/presentation/AutoCompleteList.js** - Its a autocomplete list that comes when user types something in the input field.

## Who do I talk to? 
Tarun Chaudhary (http://curioustechie.in)