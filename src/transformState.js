'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    } else if (actions[i].type === 'removeProperties') {
      for (const el of actions[i].keysToRemove) {
        delete state[el];
      }
    } else if (actions[i].type === 'clear') {
      // remove all properties
      for (const key in state) {
        delete state[key];
      }
    }
  }
  // console.log(state);
  // console.log(actions);
}

module.exports = transformState;

// transformState({foo: 'bar', bar: 'foo'}, [
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
//     type: 'clear',
//   },
//   {
//     type: 'addProperties',
//     extraData: { another: 'one' },
//   }
// ]);
