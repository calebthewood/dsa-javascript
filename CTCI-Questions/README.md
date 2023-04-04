# Quick Guide to Setting up a Local TS-Jest Environment

Install Babel
```
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Config Babel
```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

