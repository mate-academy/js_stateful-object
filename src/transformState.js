'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        addProperties(state, action.extraData);
        break;

      case action.type === 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;

      default:
        clearObj(state);
    }
  }
}

function addProperties(obj, data) {
  Object.assign(obj, data);
}

function removeProperties(obj, properies) {
  for (const prop of properies) {
    if (obj[prop]) {
      delete obj[prop];
    }
  }
}

function clearObj(obj) {
  const objKeys = Object.keys(obj);

  objKeys.forEach(key => {
    delete obj[key];
  });
}

module.exports = transformState;
