'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const i in actions) {
    const { type, extraData = {} } = actions[i];
    let { keysToRemove = [] } = actions[i];

    if (type === 'addProperties') {
      Object.assign(state, extraData);

      continue;
    }

    if (type === 'clear') {
      keysToRemove = Object.keys(state);
    }

    for (const j in keysToRemove) {
      const key = keysToRemove[j];

      if (Object.prototype.hasOwnProperty.call(state, key)) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
