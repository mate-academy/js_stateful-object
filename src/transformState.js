'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    const propert = object.extraData;
    const remove = object.keysToRemove;
    const type = object.type;

    if (type === 'addProperties') {
      Object.assign(state, propert);
    }

    if (type === 'removeProperties') {
      for (const keyOfRemove of remove) {
        delete state[keyOfRemove];
      }
    }

    if (type === 'clear') {
      for (const keyOfState in state) {
        delete state[keyOfState];
      }
    }
  }

  return state;
}

module.exports = transformState;
