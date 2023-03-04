'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  const addProperties = 'addProperties';
  const clear = 'clear';
  const removeProperties = 'removeProperties';

  for (const action of actions) {
    switch (action.type) {
      case addProperties:
        assignNewDataToState(state, action);
        break;
      case removeProperties:
        for (const key of getRemoveKeys(action)) {
          deleteFromState(state, key);
        }
        break;
      case clear:
        const keysState = getSateKeys(state);

        for (const key of keysState) {
          deleteFromState(state, key);
        }
        break;
    }
  }

  return state;
}

function assignNewDataToState(state, action) {
  Object.assign(state, action.extraData);
}

function deleteFromState(state, key) {
  delete state[key];
}

function getRemoveKeys(action) {
  return action.keysToRemove;
}

function getSateKeys(myObject) {
  return Object.keys(myObject);
}

module.exports = transformState;
