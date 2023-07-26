'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const actionClear = 'clear';
  const actionRemoveProp = 'removeProperties';
  const actionAddProp = 'addProperties';
  let typeOfAction = '';

  for (const action of actions) {
    typeOfAction = action.type;

    switch (typeOfAction) {
      case actionClear:
        for (const key in state) {
          delete state[key];
        }
        break;

      case actionRemoveProp:
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      case actionAddProp:
        Object.assign(state, action.extraData);
        break;

      default:
        window.alert(`${typeOfAction} is a wrong action. Nothing to do`);
    }
  }
}

module.exports = transformState;
