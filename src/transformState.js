'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const data in actions[i].extraData) {
          state[data] = actions[i].extraData[data];
        }
        break;

      case 'removeProperties':
        for (const key in actions[i].keysToRemove) {
          delete state[actions[i].keysToRemove[key]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Wrong type');
    }
  }
}

module.exports = transformState;

const stat = {
  foo: 'bar', name: 'Jim', another: 'one',
};

transformState(stat, [
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
