'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < transforms.length; i++) {
    const operation = transforms[i].operation;
    const property = transforms[i].properties;

    switch (operation) {
      case 'addProperties':
        for (const key in property) {
          state[key] = property[key];
        }
        break;

      case 'removeProperties':
        for (const key in property) {
          if (state.hasOwnProperty(property[key])) {
            delete state[property[key]];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
