'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let action = 0; action < actions.length; action++) {
    const act = actions[action];

    if (act.type === 'addProperties') {
      Object.assign(state, act.extraData);
    }

    if (act.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (act.type === 'removeProperties') {
      for (let key = 0; key < act.keysToRemove.length; key++) {
        const keyToRemove = act.keysToRemove[key];

        delete state[keyToRemove];
      }
    }
  }

  return state;
}

module.exports = transformState;
