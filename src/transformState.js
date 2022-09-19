'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      for (const keyProp in actions[key].extraData) {
        state[keyProp] = actions[key].extraData[keyProp];
      }
    }

    if (actions[key].type === 'removeProperties') {
      for (const keyProp of actions[key].keysToRemove) {
        delete state[`${keyProp}`];
      }
    }

    if (actions[key].type === 'clear') {
      for (const keyProp in state) {
        delete state[keyProp]
      }
    }
  }

}

module.exports = transformState;
