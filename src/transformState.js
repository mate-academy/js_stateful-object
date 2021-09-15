'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (const i in actions) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;
      case 'removeProperties':
        for (const j in actions[i]) {
          for (const k in actions[i][j]) {
            delete state[actions[i][j][k]];
          }
        }
        break;
      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
      default:
        break;
    }
  }

  return state;
};

module.exports = transformState;

// transformState({foo: 'bar', bar: 'foo'}, [
//   {
//     type: 'addProperties', // --если *, то экстра добавляется до state
//     extraData: {
//       name: 'Jim',
//       hello: 'world',
//     }
//   },
//   {
//     type: 'removeProperties', // --если *, то кейс удаляет с state
//     keysToRemove: ['bar', 'hello'],
//   },
//   {
//     type: 'addProperties',
//     extraData: { another: 'one' },
//   },
//   {
//     type: 'clear',
//   }
// ]);
