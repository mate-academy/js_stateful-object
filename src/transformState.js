'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const key in actions[i]) {
        if (key !== 'type') {
          Object.assign(state, actions[i][key]);
        }
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (const key in actions[i]) {
        if (key !== 'type') {
          const remove = actions[i][key];

          for (let keyRm = 0; keyRm < remove.length; keyRm++) {
            if (Object.prototype.hasOwnProperty.call(state, remove[keyRm])) {
              delete state[remove[keyRm]];
            }
          }
        }
      }
    }

    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
