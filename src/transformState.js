'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((element) => {
    const action = element.type;

    switch (action) {
      case 'addProperties':
        const { extraData } = element;

        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;
      case 'removeProperties':
        const { keysToRemove } = element;

        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  });
}

module.exports = transformState;
