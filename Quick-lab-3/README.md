# Quick-lab-3/README.md
> TI510M - Advanced Web programming<br>
> Tristan LOYE

## Tools to use

In VSCode: [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)<br>
Or the app: [Postman](https://www.postman.com)

## How to use it
### Install all the Node.js components

Install [Node.js](https://nodejs.org/)<br>
```
npm init
```
```
npm install express
```
```
npm intall nodemon
```
And the ```package.json``` should be like that:
```json
{
  "name": "quick-lab-3",
  "version": "1.0.0",
  "description": "TI510M - Quick Lab 3",
  "main": "index.js",
  "scripts": {
    "start": "nodemon --experimental-json-modules"
  },
  "author": "Tristan LOYE",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^2.0.20"
  },
  "type": "module"
}
```

### Run the program
Open the terminal of VSCode.
```
npm run start
```