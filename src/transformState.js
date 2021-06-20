'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const next = state;

  for (const char of actions) {
    switch (char.type) {
      case 'addProperties':
        Object.assign(next, char.extraData);
        break;

      case 'removeProperties':
        for (const key of char.keysToRemove) {
          delete next[key];
        }
        break;

      case 'clear':
        for (const key in next) {
          delete next[key];
        }
    }
  }

  return next;
}

module.exports = transformState;
