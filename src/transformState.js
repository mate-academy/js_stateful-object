'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const changeState = state;

  for (const el of actions) {
    if (el.type === 'addProperties') {
      Object.assign(changeState, el.extraData);
    } else if (el.type === 'removeProperties') {
      for (const key of el.keysToRemove) {
        delete changeState[key];
      }
    } else if (el.type === 'clear') {
      for (const key in changeState) {
        delete changeState[key];
      }
    }
  }

  return changeState;
}

module.exports = transformState;
