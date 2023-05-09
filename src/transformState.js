'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (true) {
      case object.type === 'addProperties':
        const { extraData } = object;

        Object.assign(state, extraData);
        break;

      case object.type === 'removeProperties':
        const { keysToRemove } = object;

        removeProperties(state, keysToRemove);
        break;

      case object.type === 'clear':
        deleteAllProperties(state);
        break;
    }
  }

  return state;

  function removeProperties(object, propertiesToRemove) {
    for (const property of propertiesToRemove) {
      delete object[property];
    }
  }

  function deleteAllProperties(object) {
    for (const key in object) {
      delete object[key];
    }
  }
}
module.exports = transformState;
