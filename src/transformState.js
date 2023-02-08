'use strict';
/*  */
/**
 * @param {Object} state
 * @param {Object[]} actions
 */

// function transformState(state, actions) {
//   let cloneOfState = { ...state };
//   const transformedState = [];

//   for (const action of actions) {
//     switch (action.type) {
//       case 'clear':
//         for (const key in state) {
//           delete state[key];
//         }
//         break;
//       case 'addProperties':
//         Object.assign(cloneOfState, action.extraData);
//         break;
//       case 'removeProperties':
//         for (const key of action.keysToRemove) {
//           delete cloneOfState[key];
//         }
//         break;
//     }
//     transformedState.push({ ...cloneOfState });
//   }

//   return transformedState;
// }

// function transformState(state, actions) {
//   const transformedState = state;

//   for (const action of actions) {
//     if (action.type === 'clear') {
//       Object.keys(transformedState)
//         .forEach(key => delete transformedState[key]);
//     } else if (action.type === 'addProperties') {
//       for (action.extraData of actions) {
//         for (const data in action.extraData) {
//           transformedState[data] = action.extraData[data];
//         }
//       }
//     } else if (action.type === 'removeProperties') {
//       for (action.keysToRemove of actions) {
//         for (const key of action.keysToRemove) {
//           delete transformedState[key];
//         }
//       }
//     }
//   }

//   return transformedState;
// }

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear' :
        for (const key in state) {
          delete state[key];
        }

        break;

      case 'addProperties' :
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties' :
        for (const key of action.keysToRemove) {
          delete state[key];
        }

        break;
    }
  }

  return state;
}

module.exports = transformState;
