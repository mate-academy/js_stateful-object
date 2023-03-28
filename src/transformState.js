'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        state[key] = action.extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }

    if (action.type === 'clear') {
      if (Object.keys(state).length !== 0) {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

transformState({}, [
  {
    type: 'removeProperties', keysToRemove: ['another'],
  },
  { type: 'clear' },
  { type: 'clear' },
  { type: 'clear' },
  {
    type: 'addProperties', extraData: { yet: 'another property' },
  },
  { type: 'clear' },
  {
    type: 'addProperties',
    extraData: {
      foo: 'bar', name: 'Jim',
    },
  },
  {
    type: 'removeProperties', keysToRemove: ['name', 'hello'],
  },
]);

module.exports = transformState;
