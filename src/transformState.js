'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const i of transforms) {
    const { operation, properties } = i;
    switch (operation) {
      case 'addProperties':
        Object.assign(state, properties);
        break;
      case 'removeProperties':
        for (const j of properties) {
          delete state[j];
        }
        break;
      case 'clear':
        for (const clr in state) {
          delete state[clr];
        }
    }
  }
}

module.exports = transformState;
