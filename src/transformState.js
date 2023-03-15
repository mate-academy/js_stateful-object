'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      addProp(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(key => delete state[key]);
    } else if (action.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }

  return state;
}

function addProp(state, properties) {
  for (const key in properties) {
    state[key] = properties[key];
  }
}

module.exports = transformState;
