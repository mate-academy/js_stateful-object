'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'addProperties'):
        Object.assign(state, action.extraData);
        break;

      case (action.type === 'removeProperties'):
        for (let i = 0; i < action.keysToRemove.length; i++) {
          const deletePropertie = action.keysToRemove[i];

          delete state[deletePropertie];
        };
        break;

      case (action.type === 'clear'):
        for (const key in state) {
          delete state[key];
        };
        break;
    }
  }
}

module.exports = transformState;
