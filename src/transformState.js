'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'clear':
        const stateKeys = Object.keys(state);

        for (let j = 0; j < stateKeys.length; j++) {
          const clearProp = stateKeys[j];

          delete state[clearProp];
        }
        break;

      case 'removeProperties':
        const remProp = action.keysToRemove;

        for (let j = 0; j < remProp.length; j++) {
          const t = remProp[j];

          delete state[t];
        }
        break;

      default:
        throw Error('error');
    }
  }

  return state;
}

module.exports = transformState;
