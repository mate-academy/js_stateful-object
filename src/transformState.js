'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let res = Object.assign(state);

  for (const action of actions) {
    if (action.type === 'addProperties') {
      res = Object.assign(res, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const removeKey of action.keysToRemove) {
        delete res[removeKey];
      }
    }

    if (action.type === 'clear') {
      for (const el in res) {
        delete res[el];
      }
    }
  }

  return res;
}

module.exports = transformState;
