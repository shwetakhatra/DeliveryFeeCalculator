# Delivery fee calculator

This is the demo calculator. The application calculates delivery charges by considering various scenarios.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm start


Run unit tests:

```bash
# npm
npm test

  ```
## Folder Structure
    delivery-fee-calculator
    │   README.md
    │   index.tsx   
    │   ...
    │   
    |───public
    │   └── favicon.ico
    │   
    └───src
        |── components
        │   └── Button
                └── PrimaryButton.tsx
                └── PrimaryButton.test.tsx
            |
        │   └── FeeCalculator.tsx
        |── interfaces
        │   └── button.interfaces.ts
        |── utils
        │   └── index.tsx
        │   index.tsx
        │   App.tsx
        │   App.test.tsx
        │   App.css
        │   package.json
        │   ...
        ...

  ```

  - ```public``` folder contains a file that will be read by the browser.
  - ```utils``` folder has different functions which can be imported to ```FeeCalculator.tsx``` to caculate delivery fee under different conditions. 
  - ```main.tsx``` is the one where the main render call is happening by ReactDOM.render() method. The method ReactDOM.render() injects the React application into the ```<div id="root">``` so that the app can be rendered in the browser.
  - ```App.tsx``` is a React component called “App”. This component will be the root component to all the other components. As this project is small, this is also a controlled components which control to submit a from.
  - ```App.css``` stores styling targeting the App component specifically.
  - ```package.json``` lists all the dependencies and scripts needed to run the React app successfully.




