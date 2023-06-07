'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        const dataToExtract = action.extraData;

        Object.assign(state, { ...dataToExtract });
        break;

      case 'removeProperties':
        const dataToRemove = action.keysToRemove;

        [ ...dataToRemove ].forEach(list => delete state[list]);
        break;

      case 'clear':
        for (const member in state) {
          delete state[member];
        }

        break;
    }
  }
}

module.exports = transformState;
