'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  transforms.forEach(obj => {
    switch (obj.operation) {
      case 'addProperties': {
        Object.assign(state, obj.properties);
        break;
      }

      case 'removeProperties': {
        for (const key of obj.properties) {
          delete state[key];
        };
        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        };
        break;
      }
    }
  });

  return state;
}

module.exports = transformState;
