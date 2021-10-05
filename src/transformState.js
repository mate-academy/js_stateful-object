'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    const operationTypeObject = { ...actions[key] };

    for (const operationKey in operationTypeObject) {
      switch (operationTypeObject[operationKey]) {
        case 'addProperties': {
          addProperties(state, operationTypeObject.extraData);
          break;
        }

        case 'removeProperties': {
          removeProperties(state, operationTypeObject.keysToRemove);
          break;
        }

        case 'clear': {
          clearProperties(state);
          break;
        }
      }
    }
  }
}

function addProperties(state, extraData) {
  Object.assign(state, extraData);

  return state;
}

function removeProperties(state, extraData) {
  for (const removedKey of extraData) {
    delete state[removedKey];
  }

  return state;
}

function clearProperties(state) {
  for (const clearedKey in state) {
    delete state[clearedKey];
  }

  return state;
}

module.exports = transformState;
