'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        removeProps(state, action.keysToRemove);
        break;
      case 'clear':
        removeProps(state, Object.keys(state));
    }
  }
}

/**
 * @param {Object} obj
 * @param {String[]} props
 */
function removeProps(obj, props) {
  props.forEach(key => {
    delete obj[key];
  });
}

module.exports = transformState;
