'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const value = Object.values(action);
    const type = value[0];

    if (type === 'addProperties') {
      const addData = value[1];

      for (const key in addData) {
        state[key] = addData[key];
      }
    }

    if (type === 'removeProperties') {
      const removeData = value[1];

      for (const key of removeData) {
        delete state[key];
      }
    }

    if (type === 'clear') {
      for (const element in state) {
        delete state[element];
      }
    }
  }

  return state;
}

module.exports = transformState;
