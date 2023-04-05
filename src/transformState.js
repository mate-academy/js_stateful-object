'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (true) {
      case obj.type === 'addProperties':
        addProperties(state, obj);
        break;
      case obj.type === 'removeProperties':
        removeProperties(state, obj);
        break;
      default:
        clear(state);
    };
  };
};

function addProperties(state, obj) {
  Object.assign(state, obj.extraData);
}

function removeProperties(state, obj) {
  for (const key of obj.keysToRemove) {
    if (state[key]) {
      delete state[key];
    }
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
