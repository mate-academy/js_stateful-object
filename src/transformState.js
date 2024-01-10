'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  if (Array.isArray(actions)) {
    for (const action of actions) {
      actionsObserver(state, action);
    }

    return;
  }
  actionsObserver(state, actions);
}

module.exports = transformState;

const actionsObserver = (state, action) => {
  switch (action.type) {
    case 'addProperties':
      Object.assign(state, action.extraData);
      break;
    case 'removeProperties':
      for (const key of action.keysToRemove) {
        delete state[key];
      }
      break;
    case 'clear':
      for (const key in state) {
        delete state[key];
      }
      break;
    default:
      break;
  }
};
