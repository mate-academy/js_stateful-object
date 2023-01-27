'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach((el, index) => {
    const { type, extraData = {}, keysToRemove = [] } = el;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      case 'removeProperties':
        keysToRemove.forEach((key) => {
          if (Object.prototype.hasOwnProperty.call(state, key)) {
            delete state[key];
          }
        });
        break;
      default:
        throw new Error(`No cases for type: ${type}`);
    }
  });
}

module.exports = transformState;
