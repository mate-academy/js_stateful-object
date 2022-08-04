'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act in actions) {
    const actObj = actions[act];

    if (actObj.type === 'addProperties') {
      Object.assign(state, actObj.extraData);
    } else if (actObj.type === 'removeProperties') {
      for (const key in actObj.keysToRemove) {
        const prop = actObj.keysToRemove[key];

        delete state[prop];
      }
    } else {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
