'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const transformState = (state, actions) => {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const item of Object.keys(state)) {
          delete state[item];
        }
        break;

      case 'removeProperties':
        for (let i = 0; i < action.keysToRemove.length; i++) {
          delete state[action.keysToRemove[i]];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
    }
  }

  return state;
};

module.exports = transformState;
