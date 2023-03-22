'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const ofType = actions[action];

    if (ofType.type === 'addProperties') {
      Object.assign(state, ofType.extraData);
    }

    if (ofType.type === 'removeProperties') {
      for (let i = 0; i < ofType.keysToRemove.length; i++) {
        delete state[ofType.keysToRemove[i]];
      }
    }

    if (ofType.type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
