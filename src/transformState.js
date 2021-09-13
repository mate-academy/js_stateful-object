'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const arrActions = Object.values(actions);

  for (const key of arrActions) {
    change(state, key);
  }
}

function change(obj, key) {
  if (key['type'] === 'addProperties') {
    Object.assign(obj, key['extraData']);
  }

  if (key['type'] === 'removeProperties') {
    const a = key['keysToRemove'];

    for (const value of a) {
      delete obj[value];
    }
  }

  if (key['type'] === 'clear') {
    for (const value in obj) {
      delete obj[value];
    }
  }

  return obj;
}

module.exports = transformState;
