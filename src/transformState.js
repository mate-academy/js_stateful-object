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
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;
      case 'removeProperties':
        removeKeys(actions[i].keysToRemove);
        break;
      case 'clear':
        removeKeys(Object.keys(state));
        break;
    }
  }

  return state;
}

module.exports = transformState;
