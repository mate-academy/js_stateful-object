'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(state, action.extraData);
        break;
      case 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;
      case 'clear':
        removeProperties(state, null, true);
        break;
      default:
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
    for (const key of properties) {
      delete objFrom[key];
    }
  } else {
    for (const key of Object.keys(objFrom)) {
      delete objFrom[key];
    }
  }
};

module.exports = transformState;
