'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ACTIONS = {
    ADD_PROPERTIES: 'addProperties',
    REMOVE_PROPERTIES: 'removeProperties',
    CLEAR: 'clear',
  };

  for (const action of actions) {
    switch (action.type) {
      case ACTIONS.ADD_PROPERTIES:
        Object.assign(state, action.extraData);
        break;

      case ACTIONS.REMOVE_PROPERTIES:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case ACTIONS.CLEAR:
        for (const key in state) {
          delete state[key];
        }
        break;
        
      default:
        throw new Error('Error handing');
    }
  }
}

module.exports = transformState;
