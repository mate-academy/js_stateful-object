'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // console.log(state, actions);

  for (const part in actions) {
    const action = actions[part];

    if (action.type === 'addProperties') {
      Object.assign(state, action['extraData']);
    };

    if (action.type === 'removeProperties') {
      for (const removeElement in action.keysToRemove) {
        for (const key in state) {
          if (key === action.keysToRemove[removeElement]) {
            delete state[key];
          }
        }
      }
    }

    if (action.type === 'clear') {
      // eslint-disable-next-line no-param-reassign
      state = {};
    }
  }
  // console.log(state);
}

module.exports = transformState;
