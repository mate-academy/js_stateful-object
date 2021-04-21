'use strict';

/**
 * Implement a function accepting 2 arguments `state` and `transforms`. It
 * should change the `state` basing on the given `transforms`
 *
 * `state` is an objectect. You are supposed to add, change, or delete its
 *  properties instead of creating a new objectect
 *
 * `transforms` is an array of objectects having the following properties:
 * `operation`: either `addProperties`, `removeProperties` or `clear`;
 * `properties`:
 *   - if `operation` is `addProperties`, this property contains an objectect
 *   with `key: value` pairs to add to the state;
 *   - if `operation` is `removeProperties`, this property contains an array
 *   with the list of property names to remove from the state; (Not existing
 *   properties should be ignored)
 *   - if `operation is `clear` you should remove all the properties from the
 *   state
 *
 * Sample usage:
 *
 * If `state` is {foo: 'bar', bar: 'foo'}, then
 *
 * transformState(state, [
 *   {
 *     operation: 'addProperties',
 *     properties: {
 *       name: 'Jim',
 *.      hello: 'world',
 *.    }
 *.  },
 *   {
 *     operation: 'removeProperties',
 *     properties: ['bar', 'hello'],
 *   },
 *   {
 *     operation: 'addProperties',
 *     properties: { another: 'one' },
 *   }
 * ])
 *
 * should modify the `state` objectect so after the call it becomes
 * {
 *   foo: 'bar',
 *   name: 'Jim',
 *   another: 'one',
 * }
 *
 * Then after calling
 *
 * transformState(state, [
 *   { operation: 'addProperties', properties: { yet: 'another property' } }
 *   { operation: 'clear' },
 *   { operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' } }
 * ])
 *
 * the `state` variable must contain
 * { foo: 'bar', name: 'Jim' }
 *
 * @param {objectect} state
 * @param {objectect[]} transforms
 */
function transformState(state, transforms) {
  // write code here
  for (const object of transforms) {
    // ADD

    if (object.operation === 'addProperties') {
      for (const key in object.properties) {
        state[key] = object.properties[key];
      };
    };
    // REMOVE

    if (object.operation === 'removeProperties') {
      for (const element of object.properties) {
        if (state.hasOwnProperty(element)) {
          delete state[element];
        };
      };
    };
    // CLEAR

    if (object.operation === 'clear') {
      for (const key in state) {
        delete state[key];
      };
    };
  };
}

module.exports = transformState;
