'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case 'removeProperties':
        const removeArray = obj.keysToRemove;

        for (const key of removeArray) {
          if (key in state) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;

      default:
        return state;
    }
  }

  return state;
}

module.exports = transformState;

// if (obj.type === 'addProperties') {
//   Object.assign(state, obj.extraData);
// } else if (obj.type === 'removeProperties') {
//   const removeArray = obj.keysToRemove;

//   for (const key of removeArray) {
//     if (key in state) {
//       delete state[key];
//     }
//   }
// } else if (obj.type === 'clear') {
//   for (const prop in state) {
//     delete state[prop];
//   }
// }
