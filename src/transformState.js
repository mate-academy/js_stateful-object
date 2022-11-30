'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const total = Object.assign({}, actions);

  for (const type in total) {
    const bot = total[type];

    for (const pool in bot) {
      if (bot[pool] === 'addProperties') {
        Object.assign(state, { ...bot.extraData });
      }

      if (bot[pool] === 'removeProperties') {
        const bro = bot.keysToRemove;

        for (const n of bro) {
          delete state[n];
        }
      }

      if (bot[pool] === 'clear') {
        for (const ch in state) {
          delete state[ch];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
