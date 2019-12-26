
<img src="./_Gatsby-Starter-TypeScript-Redux-TDD-BDD-Logo.png">

An awesome Gatsby starter template project that care of the tooling setup, allowing you and your team to dive right into building ultra-fast React applications with test-driven development!

[![Build Status](https://api.travis-ci.org/JimTheMan/Gatsby-Starter-TypeScript-Redux-TDD-BDD.svg?branch=master)](https://api.travis-ci.org/JimTheMan/Gatsby-Starter-TypeScript-Redux-TDD-BDD.svg?branch=master)

## Features
  - [x] TypeScript pre-installed and all src files have been converted to TypeScript.
  - [x] Redux preinstalled and with simple examples of actions, reducers, and types, and custom middlewares. 
  - [x] Redux-devtools support preinstalled (For usage with Redux Dev Tools Chrome Extension)
  - [x] Redux-localstorage-simple preinstalled (For automatic syncing of specified reducers to local storage)
  - [x] Unit testing with Jest pre-configured and ready to go. 
  - [x] End-to-end UI automation testing with Cypress pre-configured. 
  - [x] Cucumber plugin preinstalled into Cypress to run gherkin features files and steps definitions for outside-in behavor-driven-development. 
  - [x] Linting pre-configured with Prettier and TSLint.
  - [ ] Continuous integration & continuous deploy setup with Travis CI.


# Usage
You can scaffold out a fresh new gatsby project use this template with the gatsby `new` command:
```
gatsby new my-cool-new-react-project https://github.com/JimTheMan/Gatsby-Starter-TypeScript-Redux-TDD-BDD
```

_note: installing gatsby will probably make development easier, but you could also use `npx gatsby` if you didn't want to._

This will create a the folder specified. Navigate into this directory 


## Developing With A Test-First Mindset
This is, after all, the "TDD-BDD" template, and it was designed to be used by engineering teams following these test-driven and behavior-driven methodologies. 



## Unit Tests & End-To-End Tests: The Ying & Yang of Automated Testing




## A Word On "Chasing Hunnits" Aka What Not To Test



### Contributing To This Project
We love feedback!

## Local Development Setup Guide
We recommend node v11.15.0 as that's what we used to develop this project.
```
nvm use
```

Install dependencies:
```
npm i
```

Run locally (with hot module reloading)
```
npx gatsby deploy
```

Create local build
```
npx gatsby build
```

Serve local build
```
npx gatsby serve
```

Run Unit Tests (TDD watch-mode style)
```
npm test
```

Run Unit Tests (Single run for CI and with code coverage output)
```
npm run test-once
```

Run BDD / E2e Tests (Locally With UI)
```
npm run e2e
```

Run BDD / E2e Tests (Headless Mode for CI):
```
node_modules/.bin/cypress run
```

Run linting
```
npm run lint
```

Deploy
```
npx gatsby deploy
```


## How It Was Made
If you are interested in learning how this project was created, we have tried to document the steps to recreate this project below.

This project was initally created with the [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) project.
```
gatsby new myproject https://github.com/gatsbyjs/gatsby-starter-default
```

## Adding TypeScript From Scratch
Then type
```
npm install gatsby-plugin-typescript
```

Included this in gatsby-config.js:
```
module.exports = {
  // ...,
  plugins: [`gatsby-plugin-typescript`],
}
```

Then we basically just changed all the js files to tsx files and had to install these type defs for React Helmet:
```
npm i @types/react-helmet
```

## Adding BDD Tests From Scratch

First, install cypress and the cypress-cucumber plugin:
```
npm install cypress --save-dev
npm i cypress-cucumber-preprocessor --save-dev
```

Cypress will scaffold out a bunch of files when you run "open" for the first time:
```
node_modules/.bin/cypress open
```


Then replace cypress/plugins/index.js with this:
```
var cucumber = require("cypress-cucumber-preprocessor").default

module.exports = (on, config) => {
  on("file:preprocessor", cucumber())
};
```

- Create a folder named "features" within cypress/integration and place feature files there containing gherkin.

- Create a folder "step_definitions" within cypress/support and place step definition files there. Use /cypress/support/step_definitions/google-hello-world.js as a template.

_Note: For me it was very important to put the things above in these specific directories since these were the only locations where my files were actually found and run properly by cypress & cucumber._

To run the cucumber specs first open cypress with `npm run cypress:open` and click on the feature files.

To run in headless mode: `npm run cypress:run`

Note, you can also ignore everything but the feature files by adding the option in cypress.json

## Adding Redux
First, install the npm librarires for `gatsby-plugin-react-redux`, `react-redux`, and `redux`:
```
npm install --save gatsby-plugin-react-redux react-redux redux
```

Created a `./src/store/createStore.ts` file containing this:
```
import { createStore } from 'redux';

function reducer() {
  //...
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState);
};
```

And added this plugin to the list in `./gatsby-config.js`:
```
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/state/createStore',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      },
    },
  ],
};
```

### Redux dev tools setup
First, install:
```
npm install --save redux-devtools-extension
```

and use `composeWithDevTools` when creating your store:
```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

### Redux Local Storage Simple Setup
First, install:
```
npm i --save-dev redux-localstorage-simple
```


### Custom Middleware Setup



### Localstorage Redux Integration



### Jest Configuration


### A Note On Visual Testing


### It Takes A Genius To Recognise Good Tests

