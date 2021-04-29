'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < transforms.length; i++) {

    switch (transforms[i].operation) {
      case 'addProperties':
        for (const key in transforms[i].properties) {
          state[key] = transforms[i].properties[key];
        }
        break;

      case 'removeProperties':
        for (const key in transforms[i].properties) {
          delete state[transforms[i].properties[key]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}
module.exports = transformState;
