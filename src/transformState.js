'use strict';

/**
 * @param {Object} state
 * @typeof {Object} Action
 * @property {string} type
 * @property {Object} extraData
 * @property {string[]} keysToRemove
 * @param {Object[]} actions
 */

const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR = 'clear';

function transformState(state, actions) {
  actions.forEach((action) => {
    if (action.type === ADD_PROPERTIES) {
      Object.assign(state, action.extraData);
    } else if (action.type === REMOVE_PROPERTIES) {
      action.keysToRemove.forEach((key) => {
        delete state[key];
      });
    } else if (action.type === CLEAR) {
      Object.keys(state).forEach((key) => {
        delete state[key];
      });
    }
  });
}

module.exports = transformState;
