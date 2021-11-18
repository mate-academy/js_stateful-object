'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const char of actions) {
    const { type } = char;

    switch (type) {
      case 'addProperties': const { extraData } = char;
        const keys = Object.keys(extraData);
        const value = Object.values(extraData);

        for (let i = 0; i < keys.length; i++) {
          state[keys[i]] = value[i];
        };
        break;

      case 'removeProperties':
        for (let i = 0; i < char.keysToRemove.length; i++) {
          const a = char.keysToRemove[i];

          delete state[a];
        };
        break;

      case 'clear': const prop = Object.keys(state);

        for (let i = 0; i < prop.length; i++) {
          const a = prop[i];

          delete state[a];
        }
    }
  }
}

module.exports = transformState;
