'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        const obj = Object.entries(action.extraData);

        for (let i = 0; i < obj.length; i++) {
          const element = obj[i];

          state[element[0]] = element[1];
        }
        break;
      case 'removeProperties':
        for (let i = 0; i < action.keysToRemove.length; i++) {
          const element = action.keysToRemove[i];

          if (element in state) {
            delete state[element];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  });
}

module.exports = transformState;
