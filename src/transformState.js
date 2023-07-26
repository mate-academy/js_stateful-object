'use strict';

const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR = 'clear';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case ADD_PROPERTIES:
        Object.assign(state, act.extraData);
        break;
      case REMOVE_PROPERTIES:
        act.keysToRemove.forEach((element) => {
          delete state[element];
        });
        break;
      case CLEAR:
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        throw new Error('Wrong type');
    }
  }
}

module.exports = transformState;
