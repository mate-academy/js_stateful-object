'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((obj) => {
    const ADD_PROPERTIES = obj.type === 'addProperties';
    const REMOVE_PROERTIES = obj.type === 'removeProperties';
    const CLEAR_ALL = obj.type === 'clear';

    if (ADD_PROPERTIES) {
      Object.assign(state, obj.extraData);
    }

    if (REMOVE_PROERTIES) {
      for (const i of obj.keysToRemove) {
        delete state[i];
      }
    }

    if (CLEAR_ALL) {
      for (const i in state) {
        delete state[i];
      }
    }
  });

  // return state;  <-- works without it and
  //  works when in uncommented, it's redundant?
}

module.exports = transformState;
