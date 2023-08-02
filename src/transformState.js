'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i in actions) {
    const action = actions[i];

    if (!action.type) {
      continue;
    }

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key in action.keysToRemove) {
        delete state[action.keysToRemove[key]];
      }
    }

    if (action.type === 'clear') {
      for (const k in state) {
        delete state[k];
      }
    }
  }

  return state;
}
// transformState(state, action);

module.exports = transformState;
