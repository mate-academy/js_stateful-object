'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const obj = action;
    const { type } = obj;

    switch (type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case 'removeProperties':
        const itemsRemove = obj.keysToRemove;

        for (const keyToRemove of itemsRemove) {
          if (state[keyToRemove]) {
            delete state[keyToRemove];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
