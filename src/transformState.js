'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const whatWeMustDo = action.type;
    const isAdding = whatWeMustDo === 'addProperties';
    const isDeleting = whatWeMustDo === 'removeProperties';
    const isClearing = whatWeMustDo === 'clear';

    switch (true) {
      case (isAdding):
        Object.assign(state, action.extraData);
        break;

      case (isDeleting):
        deletProp(state, action.keysToRemove);
        break;

      case (isClearing):
        clearingTheObject(state);
        break;

      default:
        return 'Unknow error';
    }
  }

  return state;
}

function clearingTheObject(state) {
  for (const key in state) {
    delete state[key];
  }

  return state;
}

function deletProp(state, props) {
  for (const prop of props) {
    delete state[prop];
  }

  return state;
}

module.exports = transformState;
