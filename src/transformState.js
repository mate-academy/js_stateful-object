'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const transformState = (state, actions) => {
  for (const item of actions) {
    switch (true) {
      case (item.type === 'clear') :
        for (const prop of Object.keys(state)) {
          delete state[prop];
        }
        break;

      case (item.type === 'removeProperties') :
        for (let i = 0; i < item.keysToRemove.length; i++) {
          delete state[item.keysToRemove[i]];
        }
        break;

      case (item.type === 'addProperties') :
        Object.assign(state, item.extraData);
        break;
    }
  }

  return state;
};

module.exports = transformState;
