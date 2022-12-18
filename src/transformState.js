'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act in actions) {
    const type = actions[act].type;

    if (type === 'addProperties') {
      const { extraData } = actions[act];

      Object.assign(state, extraData);
    } else if (type === 'removeProperties') {
      const { keysToRemove } = actions[act];

      keysToRemove.forEach(key => delete state[key]);
    } else {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }

  return state;
}

module.exports = transformState;
