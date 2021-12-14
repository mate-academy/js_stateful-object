'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        const keysAdd = Object.keys(actions[i].extraData);
        const valuesAdd = Object.values(actions[i].extraData);

        for (let y = 0; y < keysAdd.length; y++) {
          state[keysAdd[y]] = valuesAdd[y];
        };
        break;

      case 'removeProperties':
        const valuesRemove = Object.values(actions[i].keysToRemove);

        for (let j = 0; j < valuesRemove.length; j++) {
          delete state[valuesRemove[j]];
        };
        break;

      case 'clear':
        for (const keyClear in state) {
          delete state[keyClear];
        };
        break;
    }
  }
}

module.exports = transformState;
