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
        Object.assign(state, transforms[i].properties);
        break;
      case 'clear':
        for (const keyForClear in state) {
          delete state[keyForClear];
        }
        break;

      case 'removeProperties':
        for (let y = 0; y < transforms[i].properties.length; y++) {
          delete state[transforms[i].properties[y]];
        }
        break;
    }
  }
}
module.exports = transformState;
