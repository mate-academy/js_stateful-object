'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const actionsType = {
    add: 'addProperties',
    remove: 'removeProperties',
    clear: 'clear',
  };

  for (const action of actions) {
    switch (action.type) {
      case actionsType.add :
        Object.assign(state, action.extraData);
        break;

      case actionsType.remove:
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      case actionsType.clear:
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
