'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const type in actions) {
    const bot = actions[type];

    for (const pool in bot) {
      switch (bot[pool]) {
        case 'addProperties':
          Object.assign(state, { ...bot.extraData });
          break;

        case 'removeProperties':
          const bro = bot.keysToRemove;

          for (const n of bro) {
            delete state[n];
          }
          break;

        case 'clear':
          for (const ch in state) {
            delete state[ch];
          }
      }
    }
  }

  return state;
}

module.exports = transformState;
