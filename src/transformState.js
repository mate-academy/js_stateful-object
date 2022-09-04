'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(item => {
    switch (item.type) {
      case 'addProperties':
        Object.assign(state, item.extraData);
        break;

      case 'removeProperties':
        item.keysToRemove.forEach(keyDel => {
          if (keyDel in state) {
            delete state[keyDel];
          }
        });
        break;

      case 'clear':
        for (const keyFoClear in state) {
          delete state[keyFoClear];
        }
    }
  });

  return state;
}

module.exports = transformState;
