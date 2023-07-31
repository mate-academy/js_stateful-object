'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let ACTION_REQUIRED = '';
  

  for (const action of Object.values(actions)) {
    ACTION_REQUIRED = action['type'];

    switch (ACTION_REQUIRED) {
      case 'addProperties':
        Object.assign(state, action['extraData']);
        break;

      case 'removeProperties':
        for (const parameters of action['keysToRemove']) {
          delete state[parameters];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;
    }
  }

  return (state);
}

module.exports = transformState;
