'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':
        Object.assign(state, actions[key].extraData);
        break;

      case 'removeProperties':
        for (const keyRemove of actions[key].keysToRemove) {
          delete state[keyRemove];
        }
        break;

      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
    }
  }
}
// function transformState(state, actions) {
//   for (const key in actions) {
//     if (actions[key].type === 'addProperties') {
//       Object.assign(state, actions[key].extraData);
//     }

//     if (actions[key].type === 'removeProperties') {
//       const remove = Object.assign([], actions[key].keysToRemove);

//       for (const removeKey of remove) {
//         delete state[removeKey];
//       }
//     }

//     if (actions[key].type === 'clear') {
//       for (const stateKey in state) {
//         delete state[stateKey];
//       }
//     }
//   }
// }

// const actionsHistory = [];
//   const copy = { ...state };
// function transformState(state, actions) {
//   for (const key in actions) {
//     if (actions[key].type === 'addProperties') {
//       Object.assign(copy, actions[key].extraData);
//     }

//     if (actions[key].type === 'removeProperties') {
//       const remove = Object.assign([], actions[key].keysToRemove);

//       for (const removeKey of remove) {
//         delete copy[removeKey];
//       }
//     }

//     if (actions[key].type === 'clear') {
//       for (const stateKey in copy) {
//         delete copy[stateKey];
//       }
//     }
//   }
// }
module.exports = transformState;
