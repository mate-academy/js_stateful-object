'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  const trans = state;

  for (const a in actions) {
    switch (actions[a].type) {
      case 'addProperties':
        Object.assign(trans, actions[a].extraData);
        break;
      case 'removeProperties':
        for (const k of actions[a].keysToRemove) {
          delete trans[k];
        }
        break;
      case 'clear':
        for (const k in trans) {
          delete trans[k];
        }
        break;
    }
  }

  return trans;
}

module.exports = transformState;
