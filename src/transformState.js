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
  for (let i = 0; i < transforms.length; i++) {
    const { operation, properties } = transforms[i];

    switch (operation) {
      case ('addProperties'):
        for (const key in properties) {
          state[key] = properties[key];
        }
        break;

      case ('removeProperties'):
        for (let k = 0; k < properties.length; k++) {
          if (state.hasOwnProperty(properties[k])) {
            delete state[properties[k]];
          }
        }
        break;

      case ('clear'):
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        break;
    }
    // 'SOLUTION WITH 'if':

    // if (transforms[i].operation === 'addProperties') {
    //   for (const key in transforms[i].properties) {
    //     state[key] = transforms[i].properties[key];
    //   }
    // }

    // if (transforms[i].operation === 'removeProperties') {
    //   for (let k = 0; k < transforms[i].properties.length; k++) {
    //     if (state.hasOwnProperty(transforms[i].properties[k])) {
    //       delete state[transforms[i].properties[k]];
    //     }
    //   }
    // }

    // if (transforms[i].operation === `clear`) {
    //   for (const key in state) {
    //     delete state[key];
    //   }
    // }
  }

  return state;
}

module.exports = transformState;
