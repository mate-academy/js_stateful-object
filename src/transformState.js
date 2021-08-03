'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      actions[i]['keysToRemove'].forEach(element => {
        delete state[element];
      });
    }

    if (actions[i].type === 'clear') {
      Object.keys(state).forEach(element => {
        delete state[element];
      });
    }
  }
}

module.exports = transformState;
