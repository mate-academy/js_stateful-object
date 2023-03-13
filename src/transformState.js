'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let transformedState = state;

  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties' :
        addProperties(transformedState, actions[action]);

        break;
      case 'removeProperties' :
        removeProperties(transformedState, actions[action]);

        break;

      default :
        clearState(transformedState);

        break;
    }
  }

  return transformedState;
}

function addProperties(state, action) {
  Object.assign(state, action.extraData);
}

function removeProperties(state, action) {
  for (const key in state) {
    for (const keyToRemove in action.keysToRemove) {
      if (action.keysToRemove[keyToRemove] === key) {
        delete state[key];
      }
    }
  }
}

function clearState(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
