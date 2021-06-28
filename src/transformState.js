'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      addProperties(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      removeProperties(state, action.keysToRemove);
    } else if (action.type === 'clear') {
      clear(state);
    }
  }

  return state;
}

function addProperties(to, from) {
  Object.assign(to, from);
}

function removeProperties(from, which) {
  for (const key in from) {
    if (which.includes(key)) {
      delete from[key];
    }
  }
}

function clear(from) {
  for (const key in from) {
    delete from[key];
  }
}

module.exports = transformState;
