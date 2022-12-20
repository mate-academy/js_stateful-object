'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;
      case 'clear':
        Object.keys(state).forEach(v => delete state[v]);
        break;
      case 'removeProperties':
        for (const prop of obj.keysToRemove) {
          if (state[prop]) {
            delete state[prop];
          }
        }
        break;
    }
  }
}

module.exports = transformState;
