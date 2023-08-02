'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function addProperties(state, addObject) {
  for (const addProperty in addObject) {
    state[addProperty] = addObject[addProperty];
  }
}

function removeProperties(state, arrProperties) {
  for (const removeProperty of arrProperties) {
    delete state[removeProperty];
  }
}

function removeAllProperty(state) {
  for (const key in state) {
    delete state[key];
  }
}

function transformState(state, actions) {
  for (const item of actions) {
    switch (item.type) {
      case 'addProperties': {
        addProperties(state, item.extraData);
        break;
      }

      case 'removeProperties': {
        removeProperties(state, item.keysToRemove);
        break;
      }

      case 'clear': {
        removeAllProperty(state);
        break;
      }
      default: throw new Error('object does not know this type');
    }
  }

  return state;
}

module.exports = transformState;
