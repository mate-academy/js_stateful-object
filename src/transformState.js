'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act in actions) {
    const type = actions[act].type;

    switch (type) {
      case 'addProperties':
        const { extraData } = actions[act];

        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        const { keysToRemove } = actions[act];

        keysToRemove.forEach(key => delete state[key]);
        break;
      default :
        Object.keys(state).forEach(key => delete state[key]);
    }
  }

  return state;
}

module.exports = transformState;
