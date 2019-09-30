'use strict';

/**
 * Implement a function that transforms a state:
 *
 * The first parameter your function accepts, `state`, is an object that you
 * are to modify inside your function. You must not reassign `state` to a new
 * object, instead you are supposed to add, change, or delete its properties.
 *
 * The second parameter your function accepts, `transforms`, is an array of
 * objects having the following properties:
 * `operation`: either `addProperties`, `removeProperties`, or `clear`;
 * `properties`:
 *   if `operation` is `addProperties`, this property contains an object
 *   with `key: value` pairs to add to the state;
 *   if `operation` is `removeProperties`, this property contains an array
 *   with the list of property names to remove from the state;
 *   if `operation is `clear`, this property is not set; you should remove
 *   all the properties from the state instead.
 *
 * You may assume that all transformations are valid (e.g., there will be no
 * request to remove a non-existent property).
 *
 * Sample usage:
 *
 * If `state` is {foo: 'bar', bar: 'foo'}, then
 *
 * transformState(state, [
 *   {operation: 'addProperties', properties: {name: 'Jim', hello: 'world'}},
 *   {operation: 'removeProperties', properties: ['bar', 'hello']},
 *   {operation: 'addProperties', properties: {another: 'one'}}
 * ])
 *
 * should modify the `state` object so after the call it becomes
 * {foo: 'bar', name: 'Jim', another: 'one'}.
 *
 * Then after calling
 *
 * transformState(state, [
 *   {operation: 'addProperties', properties: {yet: 'another property'}}
 *   {operation: 'clear'},
 *   {operation: 'addProperties', properties: {foo: 'bar', name: 'Jim'}}
 * ])
 *
 * the `state` variable must contain
 * {foo: 'bar', name: 'Jim'}.
 *
 * @param {Object} state
 * @param {Object[]} transforms
 */
function transformState(state, transforms) {
  // write code here
  for (let i = 0; i < transforms.length; i++) {
    const operation = transforms[i]['operation'];
    const properties = transforms[i]['properties'];
    if (operation === 'addProperties') {
      addPropertiesToObject(state, properties);
    }
    if (operation === 'removeProperties') {
      removePropertiesFromObject(state, properties);
    }
    if (operation === 'clear') {
      clearObject(state);
    }
  }
}

function addPropertiesToObject(object, properties) {
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      object[key] = properties[key];
    }
  }
}

function removePropertiesFromObject(object, properties) {
  for (let i = 0; i < properties.length; i++) {
    delete object[properties[i]];
  }
}

function clearObject(object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      delete object[key];
    }
  }
}

module.exports = transformState;
