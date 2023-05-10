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
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}
module.exports = transformState;

// "version": "0.2.0",
//   "configurations": [
//     {
//       "name": "Debug Jest Tests",
//       "type": "node",
//       "request": "launch",
//       "runtimeArgs": [
//         "--inspect-brk",
//         "${workspaceRoot}/node_modules/jest/bin/jest.js",
//         "--runInBand"
//       ],
//       "console": "integratedTerminal",
//       "internalConsoleOptions": "neverOpen",
//       "port": 9229
//     }
//   ]
