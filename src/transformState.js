'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const allKeys = Object.keys(state);
    const typeAction = action.type;

    if (typeAction === 'addProperties') {
      const addObject = action.extraData;

      Object.assign(state, addObject);
    }

    if (typeAction === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (typeAction === 'removeProperties') {
      const removeKeys = action.keysToRemove;

      removeKeys.join();

      for (let index = 0; index < removeKeys.length; index++) {
        const key = removeKeys[index];

        if (allKeys.includes(key)) {
          Reflect.deleteProperty(state, key);
        }
      }
    }

    /* for (i = 0; i < removeKeys.length; i++) {
        const removeKey = removeKeys[i];

        if (allKeysState.includes(removeKey)) {
          delete state.removeKey;
        }

        return state;
      } */
  }

  return state;
}

module.exports = transformState;
