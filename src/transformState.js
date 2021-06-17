'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const el of actions) {
    if (el.type === 'addProperties') {
      Object.assign(state, el.extraData);
    }

    if (el.type === 'removeProperties') {
      const arr = [...el.keysToRemove];

      for (const everyEl of arr) {
        delete state[everyEl];
      }
    }

    if (el.type === 'clear') {
      Object.keys(state).forEach((item) => delete state[item]);
    }
  }
}

module.exports = transformState;
