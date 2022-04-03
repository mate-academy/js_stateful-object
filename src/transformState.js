'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const result = [];
  let transformStateObject = state;

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    const lastState = result[i - 1] || state;

    switch (action.type) {
      case 'addProperties': {
        transformStateObject = Object.assign(state, action.extraData);

        break;
      }

      case 'removeProperties': {
        transformStateObject = Object.assign(state, lastState);

        for (let j = 0; j < action.keysToRemove.length; j++) {
          const key = action.keysToRemove[j];

          delete state[key];
        }

        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        }

        break;
      }
    }
  }

  return transformStateObject;
}

module.exports = transformState;
