'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {

    if (key.type === 'addProperties') {
      add(state, key.extraData);
    }

    if (key.type === 'clear') {
      clear(state);
    }

    if (key.type === 'removeProperties') {
      remove(state, key.keysToRemove);
    }
  }
}

const add = (state, obj) => {
  for (const key in obj) {
    state[key] = obj[key];
  }

  return state;
};

const clear = (state) => {
  for (const key in state) {
    delete state[key];
  }
};

const remove = (state, keys) => {
  for (const key of keys) {
    delete state[key];
  }
};

module.exports = transformState;
