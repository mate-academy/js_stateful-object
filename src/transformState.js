'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const actionV = [];

  for (let i = 0; i < actions.length; i++) {
    actionV[i] = actions[i].type;
  }

  for (let i = 0; i < actionV.length; i++) {
    if (actionV[i] === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }

    if (actionV[i] === 'clear') {
      const stateKeys = Object.keys(state);

      for (let j = 0; j < stateKeys.length; j++) {
        const clearProp = stateKeys[j];

        delete state[clearProp];
      }
    }

    if (actionV[i] === 'removeProperties') {
      const remProp = actions[i].keysToRemove;

      for (let j = 0; j < remProp.length; j++) {
        const t = remProp[j];

        delete state[t];
      }
    }
  }

  return state;
}

module.exports = transformState;
