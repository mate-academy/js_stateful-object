'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const ofType = actions[action];

    switch (ofType.type) {
      case 'addProperties':
        Object.assign(state, ofType.extraData);
        break;

      case 'removeProperties':
        for (let i = 0; i < ofType.keysToRemove.length; i++) {
          delete state[ofType.keysToRemove[i]];
        }
        break;

      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
