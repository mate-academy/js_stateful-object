'use strict';

/**
 * Implement a function accepting 2 arguments `state` and `transforms`. It
 * should change the `state` basing on the given `transforms`
 *
 * `state` is an object. You are supposed to add, change, or delete its
 *  properties instead of creating a new object
 *
 * `transforms` is an array of objects having the following properties:
 * `operation`: either `addProperties`, `removeProperties` or `clear`;
 * `properties`:
 *   - if `operation` is `addProperties`, this property contains an object
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
  transforms.forEach(item => {
    switch (item.operation) {
      case 'addProperties' : {
        Object.assign(state, item.properties);

        break;
      }

      case 'removeProperties' : {
        item.properties.forEach(value => {
          delete state[value];
        });

        break;
      }

      case 'clear' : {
        Object.keys(state).forEach(value => {
          delete state[value];
        });

        break;
      }
    }
  });

  return state;
}

module.exports = transformState;
