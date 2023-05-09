'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const props of actions) {
    if (props.type === 'addProperties') {
      Object.assign(state, props.extraData);
    }

    if (props.type === 'removeProperties') {
      props.keysToRemove.forEach(el => {
        delete state[el];
      });
    }

    if (props.type === 'clear') {
      Object.keys(state).forEach(el => {
        delete state[el];
      });
    }
  }

  return state;
}

module.exports = transformState;
