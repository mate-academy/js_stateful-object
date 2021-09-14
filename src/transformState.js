'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const removeKeys = (keys) => keys.forEach(key => {
    delete state[key];
  });

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      removeKeys(actions[i].keysToRemove);
    }

    if (actions[i].type === 'clear') {
      removeKeys(Object.keys(state));
    }
  }

  return state;
}

module.exports = transformState;
