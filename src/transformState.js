'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      addProperties(state, actions[i].extraData);
    } else if (actions[i].type === 'removeProperties') {
      removeProperties(state, actions[i].keysToRemove);
    } else if (actions[i].type === 'clear') {
      removeProperties(state, null, true);
    }
  }
}

const addProperties = (objTo, objFrom) => {
  for (const key of Object.keys(objFrom)) {
    objTo[key] = objFrom[key];
  }
};

const removeProperties = (objFrom, properties, clear = false) => {
  if (!clear) {
    if (properties !== undefined) {
      for (const key of properties) {
        delete objFrom[key];
      }
    }
  } else {
    for (const key of Object.keys(objFrom)) {
      delete objFrom[key];
    }
  }
};

module.exports = transformState;
