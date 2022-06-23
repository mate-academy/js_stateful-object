'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
    } else if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

const a = {
  foo: 'bar', name: 'Jim', another: 'one',
};
const b = [
  {
    type: 'removeProperties', keysToRemove: ['bar', 'one', 'foo'],
  },
];

transformState(a, b);

module.exports = transformState;

