'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      const addProperties = Object.assign(actions[key].extraData);

      Object.assign(state, addProperties);
    }

    if (actions[key].type === 'removeProperties') {
      const removeProperties = actions[key].keysToRemove;

      for (const arr of removeProperties) {
        delete state[arr];
      }
    };

    if (actions[key].type === 'clear') {
      for (const i in state) {
        delete state[i];
      }
    }
  };

  return state;
}

module.exports = transformState;
