'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const transformedState = state;

  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties' :
        addProperties(transformedState, actions[action]);
        break;

      case 'removeProperties' :
        removeProperties(transformedState, actions[action]);
        break;

      case 'clear' :
        clearState(transformedState);
        break;

      default :
        return 'error';
    }
  }

  return transformedState;
}

function addProperties(state, action) {
  Object.assign(state, action.extraData);
}

function removeProperties(state, action) {
  for (const keyToRemove in action.keysToRemove) {
    delete state[action.keysToRemove[keyToRemove]];
  }
}

function clearState(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
