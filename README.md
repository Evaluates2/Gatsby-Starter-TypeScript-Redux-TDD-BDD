# Gatsby-Starter-TypeScript-Redux-BDD
An awesome Gatsby starter project with TypeScript, Redux, Jest, and Cypress.io + Cucumber.js already setup!


# Scaffoding
This project was initally created with the [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) project.
```
gatsby new myproject https://github.com/gatsbyjs/gatsby-starter-default
```


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

