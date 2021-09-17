'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

//  transformState(state, [
//   {
//     type: 'addProperties',
//     extraData: {
//       name: 'Jim',
//       hello: 'world',
//     }
//   },
//   {
//     type: 'removeProperties',
//     keysToRemove: ['bar', 'hello'],
//   },
//   {
//     type: 'addProperties',
//     extraData: { another: 'one' },
//   }
// ])

function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
    } else if (action.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
