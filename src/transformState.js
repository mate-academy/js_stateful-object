'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((elem) => {
    switch (true) {
      case (elem['type'] === 'addProperties'):
        Object.assign(state, elem['extraData']);
        break;

      case (elem['type'] === 'removeProperties'):
        const arrayToDelete = elem['keysToRemove'];

        for (let j = 0; j < arrayToDelete.length; j++) {
          delete state[arrayToDelete[j]];
        }
        break;

      case (elem['type'] === 'clear'):
        for (const name in state) {
          delete state[name];
        }
        break;
    }
  });
}

module.exports = transformState;
