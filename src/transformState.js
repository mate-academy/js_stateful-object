'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const keys = Object.keys(action);
    const type = action[keys[0]];

    switch (type) {
      case 'removeProperties':
        const keysRemove = action[keys[1]];

        for (const keyRemove of keysRemove) {
          delete state[keyRemove];
        }

        break;

      case 'addProperties':
        const properties = action[keys[1]];

        Object.assign(state, properties);

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
