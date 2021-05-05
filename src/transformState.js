'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newState = state;

  for (const arElem of actions) {
    if (arElem.type === 'addProperties') {
      for (const addVal in arElem['extraData']) {
        newState[addVal] = arElem['extraData'][addVal];
      }
    }

    if (arElem.type === 'removeProperties') {
      const removeArray = arElem.keysToRemove;

      for (const removeElem of removeArray) {
        delete newState[removeElem];
      }
    }

    if (arElem.type === 'clear') {
      for (const elemDel in newState) {
        delete newState[elemDel];
      }
    }
  }

  return newState;
}

module.exports = transformState;
