'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'addProperties') :
        Object.assign(state, action.extraData);
        break;

      case (action.type === 'clear') :
        Object.keys(state).forEach(key => delete state[key]);
        break;

      case (action.type === 'removeProperties') :
        for (const removeProperty of action.keysToRemove) {
          Object.keys(state).forEach(key => delete state[removeProperty]);
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
