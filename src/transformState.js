'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const actObj = actions[action];

    switch (actObj.type) {
      case 'addProperties':
        Object.assign(state, actObj.extraData);
        break;

      case 'removeProperties':
        for (const key in actObj.keysToRemove) {
          const prop = actObj.keysToRemove[key];

          delete state[prop];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
