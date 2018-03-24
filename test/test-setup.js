process.env.NODE_ENV = 'test';
// Register babel so that it will transpile ES6 to ES5 before our tests run.
require('babel-core/register')();
// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = () => null;
require.extensions['.scss'] = () => null;
require.extensions['.less'] = () => null;
require.extensions['.sass'] = () => null;
require.extensions['.ico'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;
require.extensions['.gif'] = () => null;
// require.extensions['.css'] = () => null;
// require.extensions['.css'] = () => null;
// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
const { JSDOM } = require('jsdom');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const exposedProperties = ['window', 'navigator', 'document'];
const { window } = new JSDOM('');
const { document } = window;
global.document = document;
global.navigator = { userAgent: 'node.js' };
global.window = global.document.defaultView;
Object.keys(global.document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = global.document.defaultView[property];
  }
});

Enzyme.configure({ adapter: new Adapter() });

global.documentRef = global.document;
