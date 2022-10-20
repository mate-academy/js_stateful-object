'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
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
