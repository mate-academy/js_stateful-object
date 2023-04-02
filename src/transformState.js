'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  // for (let i = 0; i < actions.length; i++) {
  //   console.log(actions[1].type);
  //   if (actions[i].type === 'addProperties') {
  //     for (const key in actions[i].extraData) {
  //       state[key] = actions[i].extraData[key];
  //     }
  //   } else {
  //     throw new Error('error msg');
  //   }

  //   if (actions[i].type === 'removeProperties') {
  //     for (const key of actions[i].keysToRemove) {
  //       delete state[key];
  //     }
  //   } else {
  //     throw new Error('error msg');
  //   }

  //   if (actions[i].type === 'clear') {
  //     for (const key of actions[i].keysToRemove) {
  //       delete state[key];
  //     }
  //   } else {
  //     throw new Error('error msg');
  //   }
  // }

  // return state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;
      }

      case `removeProperties`: {
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      }

      case `clear`: {
        for (const key in state) {
          delete state[key];
        }
        break;
      }

      default:
        throw new Error('Invalid property');
    }
  }
}

module.exports = transformState;
