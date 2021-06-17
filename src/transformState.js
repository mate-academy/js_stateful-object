'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const next = state;

  for (const char of actions) {
    if (char.type === 'addProperties') {
      Object.assign(next, char.extraData);
    }

    if (char.type === 'removeProperties') {
      for (const kiy of char.keysToRemove) {
        delete next[kiy];
      }
    }

    if (char.type === 'clear') {
      for (const key in next) {
        delete next[key];
      }
    }
  }

  return next;
}

module.exports = transformState;
