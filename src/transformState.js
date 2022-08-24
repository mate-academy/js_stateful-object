'use strict';

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        actions[i].keysToRemove.forEach((x) => {
          delete state[`${x}`];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[`${key}`];
        }
    }
  }
}

module.exports = transformState;
