'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
// eslint-disable-next-line no-shadow,strict
function transformState(state, actions) {
  const result = state;

  for (let i = 0; i < actions.length; i++) {
    // changes in 'result' when type = addProperties
    if (actions[i].type === 'addProperties') {
      for (const key1 in actions[i].extraData) {
        result[key1] = actions[i].extraData[key1];
      }
    }

    // changes in 'result' when type = removeProperties
    if (actions[i].type === 'removeProperties') {
      for (let j = 0; j < actions[i].keysToRemove.length; j++) {
        if (result[actions[i].keysToRemove[j]]) {
          delete result[actions[i].keysToRemove[j]];
        }
      }
    }

    // deleting all properties from 'result'
    if (actions[i].type === 'clear') {
      for (const key in result) {
        delete result[key];
      }
    }
  }

  return result;
}

module.exports = transformState;
