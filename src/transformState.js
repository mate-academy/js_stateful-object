'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const ob of actions) {
    const temp = { ...ob };

    if (temp.type === 'addProperties') {
      const newData = temp.extraData;

      for (const key in newData) {
        state[key] = newData[key];
      }
    }

    if (temp.type === 'removeProperties') {
      const removeProps = temp.keysToRemove;

      for (const prop of removeProps) {
        delete state[prop];
      }
    }

    if (temp.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
