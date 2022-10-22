'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const actObj = actions[action];

    switch (actObj.type) {
      case 'clear':
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      case 'addProperties':
        Object.assign(state, actObj.extraData);
        break;

      case 'removeProperties':
        actObj.keysToRemove.forEach(element => {
          delete state[element];
        });
        break;

      default:
        throw new Error('something bad in actions');
    }
  }
}

module.exports = transformState;
