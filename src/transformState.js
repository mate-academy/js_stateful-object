'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {

  for (const act of actions) {
    if (act.type === 'clear') {
      for (const props in state) {
        delete state[props];
      }
    }

    if (act.type === 'addProperties') {
      Object.assign(state, act.extraData);
    }

    if (act.type === 'removeProperties') {
      for (const removeItem of act.keysToRemove) {
        for (const item in state) {
          if (removeItem === item) {
            delete state[item];
          }
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
