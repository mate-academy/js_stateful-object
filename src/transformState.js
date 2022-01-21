'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    const typeOfObj = object.type;

    switch (typeOfObj) {
      case 'addProperties':
        Object.assign(state, object.extraData);
        break;
      case 'removeProperties':
        for (const deleteElement of object.keysToRemove) {
          delete state[deleteElement];
        }
        break;
      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;
      default:
        return ('Err');
    }
  }
}

module.exports = transformState;
