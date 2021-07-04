'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const i of transforms) {
    switch (i.operation) {
      case 'addProperties':
        for (const add in i.properties) {
          state[add] = i.properties[add];
        }
        break;
      case 'removeProperties':
        for (const remove of i.properties) {
          delete state[remove];
        }
        break;
      case 'clear':
        for (const deleting in state) {
          delete state[deleting];
        }
        break;
    }
  }
}

module.exports = transformState;
