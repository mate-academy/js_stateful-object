'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
// function transformState(state, actions) {
//   const modifyingState = state;

//   for (const { type } of actions) {
//     if (type === 'clear') {
//       Object.keys(modifyingState)
//         .forEach(key => delete modifyingState[key]);
//     } else if (type === 'addProperties') {
//       for (const { extraData } of actions) {
//         for (const data in extraData) {
//           modifyingState[data] = extraData[data];
//         }
//       }
//     } else if (type === 'removeProperties') {
//       for (const { keysToRemove } of actions) {
//         for (const item in keysToRemove) {
//           delete modifyingState[keysToRemove[item]];
//         }
//       }
//     }
//   }

//   return modifyingState;
// }

const transformState = (state, actions) => {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'clear') :
        for (const item of Object.keys(state)) {
          delete state[item];
        }
        break;

      case (action.type === 'removeProperties') :
        for (let i = 0; i < action.keysToRemove.length; i++) {
          delete state[action.keysToRemove[i]];
        }
        break;

      case (action.type === 'addProperties') :
        Object.assign(state, action.extraData);
        break;
    }
  }

  return state;
};

module.exports = transformState;
