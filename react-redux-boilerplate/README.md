## React Redux boilerplate

Take look at this...

start scripts
```
"prestart": "babel-node tools/startMessage.js",
"start": "npm-run-all --parallel test:watch open:src lint:watch",
"open:src": "babel-node tools/srcServer.js",
"lint": "esw webpack.config.* src tools",
"lint:watch": "npm run lint -- --watch",
"test": "mocha --reporter spec tools/testSetup.js \"src/**/*.test.js\"",
"test:watch": "npm run test -- --watch",
"clean-dist": "npm run remove-dist && mkdir dist",
"remove-dist": "node_modules/.bin/rimraf ./dist",
"build:html": "babel-node tools/buildHtml.js",
"prebuild": "npm-run-all clean-dist test lint build:html",
"build": "babel-node tools/build.js",
"postbuild": "babel-node tools/distServer.js"
```

NOT installed plugins
```
"babel-plugin-react-display-name": "2.0.0",
"babel-preset-react-hmre": "1.1.1",
"compression": "1.6.1",

"cross-env": "1.0.7",

"eventsource-polyfill": "0.9.6",

"extract-text-webpack-plugin": "1.0.1",

"jsdom": "8.5.0",
"npm-run-all": "1.8.0",
"open": "0.0.5",

"redux-mock-store": "1.0.2",
"rimraf": "2.5.2",
```
