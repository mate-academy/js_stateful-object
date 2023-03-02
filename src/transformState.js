'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addProperties = 'addProperties';
  const clear = 'clear';
  const removeProperties = 'removeProperties';

  for (const arrayItem of actions) {
    if (isPresent(arrayItem.type, addProperties)) {
      assignNewDataToState(state, arrayItem);
    }

    if (isPresent(arrayItem.type, clear)) {
      const keysState = getSateKeys(state);

      for (const key of keysState) {
        deleteFromState(state, key);
      }
    }

    if (isPresent(arrayItem.type, removeProperties)) {
      for (const keyToRemove of getRemoveKeys(arrayItem)) {
        deleteFromState(state, keyToRemove);
      }
    }
  }

  return state;
}

function assignNewDataToState(state, arrayItem) {
  Object.assign(state, arrayItem.extraData);
}

function deleteFromState(state, key) {
  delete state[key];
}

function getRemoveKeys(arrayItem) {
  return arrayItem.keysToRemove;
}

function getSateKeys(myObject) {
  return Object.keys(myObject);
}

function isPresent(param1, param2) {
  return param1 === param2;
}

module.exports = transformState;
