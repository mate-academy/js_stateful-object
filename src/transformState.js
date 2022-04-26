'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const stateLink = state;

  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const data in action.extradata) {
        stateLink[data] = data;
      }
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete stateLink[key];
      }
    } else if (action.type === 'clear') {
      for (const prop in stateLink) {
        delete stateLink[prop];
      }
    }
  }

  return stateLink;
}

module.exports = transformState;
