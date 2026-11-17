const assert = require('assert');
const app = require('./index');

assert.ok(app, 'Express app should be exported');
console.log('All tests passed!');
