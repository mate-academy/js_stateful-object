'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const currentObject = actions[i];

    for (const key in currentObject) {
      if (currentObject[key] === 'addProperties') {
        const { extraData } = currentObject;

        Object.assign(state, extraData);
      }

      if (currentObject[key] === 'removeProperties') {
        const deleteKeys = currentObject.keysToRemove;

        for (const ch of deleteKeys) {
          delete state[ch];
        }
      }

      if (currentObject[key] === 'clear') {
        for (const keyObject in state) {
          delete state[keyObject];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
