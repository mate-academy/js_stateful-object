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
  for (const trans of transforms) {
    switch (trans['operation']) {
      case 'addProperties':
        for (const key in trans['properties']) {
          state[key] = trans['properties'][key];
        }
        break;
      case 'removeProperties':
        for (const del of trans['properties']) {
          delete state[del];
        }
        break;
      case 'clear':
        for (const cleaning in state) {
          delete state[cleaning];
        }
        break;
    }
  }
}

module.exports = transformState;
