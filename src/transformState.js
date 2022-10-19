'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
// function transformState(state, actions) {
//   for (const object of actions) {
//     if (object.type === 'addProperties') {
//       Object.assign(state, object.extraData);
//     }

//     if (object.type === 'removeProperties') {
//       for (const removeKey of object.keysToRemove) {
//         delete state[removeKey];
//       }
//     }

//     if (object.type === 'clear') {
//       for (const key in state) {
//         delete state[key];
//       }
//     }
//   }

//   return state;
// }

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': Object.assign(state, action.extraData);
        break;

      case 'removeProperties': for (const removeKey of action.keysToRemove) {
        delete state[removeKey];
      };
        break;

      case 'clear': for (const key in state) {
        delete state[key];
      };
        break;

      default: return 'error';
    }
  }

  return state;
}

module.exports = transformState;
