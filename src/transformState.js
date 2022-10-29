'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const res = state;

  for (const eachObj of actions) {
    if (eachObj.type === 'addProperties') {
      Object.assign(res, eachObj.extraData);
    } else if (eachObj.type === 'removeProperties') {
      for (const key of eachObj.keysToRemove) {
        delete res[key];
      }
    } else if (eachObj.type === 'clear') {
      for (const each of Object.getOwnPropertyNames(res)) {
        delete res[each];
      }
    } else {}
  }

  return res;
}

module.exports = transformState;
