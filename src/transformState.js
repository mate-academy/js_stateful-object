'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((obj) => {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      for (const i of obj.keysToRemove) {
        delete state[i];
      }
    }

    if (obj.type === 'clear') {
      for (const i in state) {
        delete state[i];
      }
    }
  });

  // return state;  <-- works without it and
  //  works when in uncommented, it's redundant?
}

module.exports = transformState;
