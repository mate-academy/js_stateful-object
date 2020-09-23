'use strict';

/*
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
 * should modify the `state` object so after the call it becomes
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
 * @param {Object} state
 * @param {Object[]} transforms
 */
function transformState(state, transforms) {
  let result = state;

  for (const prop in transforms) {
    if (transforms[prop].operation === 'addProperties') {
      result = Object.assign(result, transforms[prop].properties);
    }

    if (transforms[prop].operation === 'removeProperties') {
      for (const el of transforms[prop].properties) {
        if (result.hasOwnProperty(el)) {
          delete result[el];
        }
      }
    }

    if (transforms[prop].operation === 'clear') {
      for (const el of Object.getOwnPropertyNames(state)) {
        delete result[el];
      }
    }
  }

  return result;
}

module.exports = transformState;
