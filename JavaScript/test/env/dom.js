const jsdom = require("jsdom");

const { JSDOM } = jsdom;

if (typeof document === 'undefined') {
  global.dom = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = dom.window;
  global.navigator = global.window.navigator;
}