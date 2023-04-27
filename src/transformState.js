'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, ...rest } = actions[i];

    if (type === 'clear') {
      clear(state);
    }

    if (type === 'removeProperties') {
      removeProperties(state, rest);
    }

    if (type === 'addProperties') {
      addProperties(state, rest);
    }
  }

  return state;
}

function clear(obj) {
  for (const key of Object.keys(obj)) {
    delete obj[key];
  }
};

function addProperties(obj, addedProperties) {
  Object.assign(obj, addedProperties.extraData);
};

function removeProperties(obj, { keysToRemove }) {
  for (let i = 0; i < keysToRemove.length; i++) {
    delete obj[keysToRemove[i]];
  }
};

module.exports = transformState;
