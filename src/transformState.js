'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const TYPE_ONE = 'addProperties';
  const TYPE_TWO = 'removeProperties';
  const TYPE_THREE = 'clear';

  for (const obj of actions) {
    const { type } = obj;

    switch (type) {
      case TYPE_ONE:
        Object.assign(state, obj.extraData);
        break;

      case TYPE_TWO:
        for (const key of obj.keysToRemove) {
          delete state[key];
        }
        break;

      case TYPE_THREE:
        for (const prop in state) {
          delete state[prop];
        }
        break;

      default:
        return state;
    }
  }

  return state;
}

module.exports = transformState;
