'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      const newarray = Array.from(actions[i].keysToRemove);

      for (let z = 0; z <= newarray.length; z++) {
        if (Object.keys(state).includes(newarray[z])) {
          [newarray[z]].forEach(e => delete state[e]);
        }
      }
    }

    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
