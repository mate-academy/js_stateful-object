'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const obj = actions[i];
    const { type } = obj;

    if (type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (type === 'removeProperties') {
      const itemsRemove = obj.keysToRemove;

      for (const keyState in state) {
        for (let k = 0; k < itemsRemove.length; k++) {
          const itemRemove = itemsRemove[k];

          if (state[keyState] === state[itemRemove]) {
            delete state[keyState];
          }
        }
      }
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
