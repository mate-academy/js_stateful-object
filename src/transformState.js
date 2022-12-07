'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const changes = Object.values(actions);

  const toRemove = [];

  for (let i = 0; i < changes.length; i++) {
  // console.log(changes[i])
    if (changes[i]['type'] === 'addProperties') {
      Object.assign(state, changes[i]['extraData']);
    }

    if (changes[i]['type'] === 'removeProperties') {
      Object.assign(toRemove, changes[i]['keysToRemove']);
    }

    if (changes[i]['type'] === 'clear') {
      for (const entries in state) {
        delete state[entries];
      }
    }
  }

  for (let i = 0; i < toRemove.length; i++) {
    delete state[toRemove[i]];
  }

  return state;
}

module.exports = transformState;
