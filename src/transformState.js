'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let index = 0;

  while (index < actions.length) {
    const typeAction = actions[index].type;

    switch (typeAction) {
      case 'addProperties':
        Object.assign(state, actions[index].extraData);
        break;
      case 'removeProperties':
        for (const keyToRemove of actions[index].keysToRemove) {
          delete state[keyToRemove];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }

    index++;
  }
}

module.exports = transformState;
