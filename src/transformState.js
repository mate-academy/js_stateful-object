'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'clear':
        for (const props in state) {
          delete state[props];
        }
        break;

      case 'addProperties' :
        Object.assign(state, act.extraData);
        break;

      case 'removeProperties' :
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
