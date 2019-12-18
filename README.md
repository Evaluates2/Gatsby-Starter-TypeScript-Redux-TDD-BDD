# Gatsby-Starter-TypeScript-Redux-BDD
An awesome Gatsby starter project with TypeScript, Redux, Jest, and Cypress.io + Cucumber.js already setup!

## Extra Goodies
  - Redux-devtools support preinstalled (For usage with Redux Dev Tools Chrome Extension)
  - Redux-localstorage-simple preinstalled (For automatic syncing of specified reducers to local storage)
  - Example of using a custom Middleware (a nice example of some async operation outside of all the components, kicked off by some redux dispatch, and with a response that then flows into the redux store)
  - [ ] linting setup
  - [ ] circleci / travisci setup



# Usage

0. Please use node v10
```
nvm use
```

1. Install Dependencies
```
npm i
```

2. Run Locally
```
npx gatsby deploy
```

3. Create Local Build
```
npx gatsby build
```

4. Serve Local Build
```
npx gatsby serve
```

5. Run Unit Tests
```
npm test
```

6. Run BDD / E2e Tests
Locally With UI:
```
node_modules/.bin/cypress open
```

Headless Mode:
```
node_modules/.bin/cypress run
```

7. Run Linting
```
npm run lint
```

8. Deploy
```
npx gatsby deploy
```

# Scaffolding
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


