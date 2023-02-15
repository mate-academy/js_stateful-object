'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const whatWeMustDo = action.type;
    const isAdding = 'addProperties';
    const isDeleting = 'removeProperties';
    const isClearing = 'clear';

    switch (whatWeMustDo) {
      case (isAdding):
        Object.assign(state, action.extraData);
        break;

      case (isDeleting):
        deleteProp(state, action.keysToRemove);
        break;

      case (isClearing):
        clearingTheObject(state);
        break;

      default:
        throw new Error(`Unknown key: "${whatWeMustDo}"`);
    }
  }
}

function clearingTheObject(state) {
  for (const key in state) {
    delete state[key];
  }

  return state;
}

function deleteProp(state, props) {
  for (const prop of props) {
    delete state[prop];
  }

  return state;
}

module.exports = transformState;
