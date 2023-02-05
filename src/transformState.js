'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    for (const key in actions[i]) {
      if (key === 'type' && actions[i][key] === 'addProperties') {
        Object.assign(state, actions[i]['extraData']);
      }

      if (key === 'type' && actions[i][key] === 'removeProperties') {
        const arrayToDelete = actions[i]['keysToRemove'];

        for (let j = 0; j < arrayToDelete.length; j++) {
          delete state[arrayToDelete[j]];
        }
      }

      if (key === 'type' && actions[i][key] === 'clear') {
        for (const name in state) {
          delete state[name];
        }
      }
    }
  }
}

module.exports = transformState;
