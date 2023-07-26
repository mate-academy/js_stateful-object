'use strict';

const REMOVE_PROPERTIES = 'removeProperties';
const ACTION_AND_PROPERTIES = 'addProperties';
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
  actions.forEach(action => {
    if (action.type === ACTION_AND_PROPERTIES) {
      Object.assign(state, action.extraData);
    } else if (action.type === REMOVE_PROPERTIES) {
      action.keysToRemove.forEach(key => {
        delete state[key];
      });
    } else if (action.type === CLEAR) {
      Object.keys(state).forEach(key => {
        delete state[key];
      });
    }
  });
}

module.exports = transformState;
