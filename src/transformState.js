'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        // add all to state what`s in extraData
        Object.assign(state, act.extraData);
        break;

      case 'removeProperties':
        // delete only several properties what`s in type: "removeProperties"
        for (const key of act.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        // delete all
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
