'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  actions.forEach((el) => {
    if (el.type === 'addProperties') {
      Object.assign(state, el.extraData);
    }

    if (el.type === 'removeProperties') {
      el.keysToRemove.forEach((elem) => {
        if (Object.keys(state).includes(elem)) {
          delete state[elem];
        }
      });
    }

    if (el.type === 'clear') {
      Object.keys(state).forEach((e) => delete state[e]);
    }
  });
}

module.exports = transformState;
