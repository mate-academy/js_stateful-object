'use strict';

function transformState(state, actions) {
  for (const el of actions) {
    const { type, extraData, keysToRemove } = el;

    switch (type) {
      case 'addProperties':

        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const item of keysToRemove) {
          delete state[item];
        }
        break;

      case 'clear':
        Object.keys(state).forEach(item => {
          delete state[item];
        });
        break;
    }
  }

  return state;
}
module.exports = transformState;
