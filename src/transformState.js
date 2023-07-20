'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(howTransform => {
    const { type, extraData, keysToRemove } = howTransform;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'removeProperties':
        keysToRemove.forEach(propKey => {
          if (state.hasOwnProperty(propKey)) {
            delete state[propKey];
          }
        });
        break;
    }
  });
}

module.exports = transformState;
