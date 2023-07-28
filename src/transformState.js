'use strict';

const REMOVE_PROPERTIES = 'removeProperties';
const ACTION_ADD_PROPERTIES = 'addProperties';
const CLEAR = 'clear';

/**
 * @param {Object} state
 * @typedef {Object} Action
 * @property {string} type
 * @property {Object} extraData
 * @property {strinmg[]} keysToRemove
 * @param {Action[]} actions
 */

function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case ACTION_ADD_PROPERTIES:
        Object.assign(state, key.extraData);
        break;
      case REMOVE_PROPERTIES:
        key.keysToRemove.forEach(item => delete state[item]);
        break;
      case CLEAR:
        Object.keys(state).forEach(item => delete state[item]);
        break;
      default:
        throw new Error('Values are not valid');
    }
  }

  return state;
}

module.exports = transformState;
