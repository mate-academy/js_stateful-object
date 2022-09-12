'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const obj = state;

  for (let i = 0; i < actions.length; i++) {
    const link = actions[i];

    if (link.type === 'addProperties') {
      Object.assign(obj, link.extraData);
    } else if (link.type === 'removeProperties') {
      for (const key of link.keysToRemove) {
        delete obj[key];
      }
    } else if (link.type === 'clear') {
      Object.keys(obj).forEach(key => (delete obj[key]));
    }
  }

  return state;
}

module.exports = transformState;
