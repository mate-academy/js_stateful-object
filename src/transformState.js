'use strict';

const ACTION_AND_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR = 'clear';

/**
 * @param {Object} state
 * @typedef {Object} Action
 * @property {string} type
 * @property {Object} extraData
 * @property {string[]} keysToRemove
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case ACTION_AND_PROPERTIES:
        Object.assign(state, extraData);
        break;
      case REMOVE_PROPERTIES:
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      case CLEAR:
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
      default:
        throw Error(`invalid input`);
    }
  });
}

module.exports = transformState;
