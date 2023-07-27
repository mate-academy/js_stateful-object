'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        }
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;

      default:
        break;
    };
  };

  return state;
}

const a = {
  foo: 'bar',
  bar: 'foo',
};

const b = [
  {
    type: 'addProperties',
    extraData: {
      name: 'Jim', hello: 'world',
    },
  },
];

transformState(a, b);

module.exports = transformState;
