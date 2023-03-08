'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const actionsValues = Object.values(actions[i]);

    switch (true) {
      case actionsValues[0] === 'addProperties':
        Object.assign(state, actionsValues[1]);
        break;

      case actionsValues[0] === 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      case actionsValues[0] === 'removeProperties':
        const delEntrie = Object.entries(actionsValues[1]);

        for (let b = 0; b < delEntrie.length; b++) {
          delete state[delEntrie[b][1]];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
