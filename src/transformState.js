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
      for (const property of action.keysToRemove) {
        if (property in state) {
          delete state[property];
        }
      }
    } else {
      for (const property in state) {
        delete state[property];
      }
    }
  }

  return state;
}

transformState({
  foo: 'bar', bar: 'foo',
}, [
  {
    type: 'addProperties',
    extraData: {
      name: 'Jim',
      hello: 'world',
    },
  },
  {
    type: 'removeProperties',
    keysToRemove: ['bar', 'hello'],
  },
  {
    type: 'addProperties',
    extraData: { another: 'one' },
  },
]);
module.exports = transformState;
