'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const act = actions[i];

    if (act.type === 'addProperties') {
      Object.assign(state, act.extraData);
    }

    if (act.type === 'removeProperties') {
      for (let j = 0; j < act.keysToRemove.length; j++) {
        const removeKey = act.keysToRemove[j];

        delete state[removeKey];
      }
    }

    if (act.type === 'clear') {
      for (const el in state) {
        delete state[el];
      }
    }
  }

  return state;
}

module.exports = transformState;
