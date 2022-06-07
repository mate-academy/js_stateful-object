'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let result = ({}, state);

  for (const act of actions) {
    if (act.type === 'addProperties') {
      result = Object.assign(result, act.extraData);
    }

    if (act.type === 'clear') {
      for (const st in result) {
        delete result[st];
      }
    }

    if (act.type === 'removeProperties') {
      const removeElts = act.keysToRemove;

      for (const st in result) {
        for (const elem of removeElts) {
          if (elem === st) {
            delete result[st];
          }
        }
      }
    }
  }

  return result;
}

module.exports = transformState;
