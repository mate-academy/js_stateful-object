'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const instruction of transforms) {
    switch (instruction.operation) {
      case 'addProperties':
        for (const item in instruction.properties) {
          state[item] = instruction.properties[item];
        }

        break;
      case 'clear':
        for (const item in state) {
          delete state[item];
        }

        break;

      case 'removeProperties':
        for (const item of instruction.properties) {
          delete state[item];
        }
    }
  }
}

module.exports = transformState;
