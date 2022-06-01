'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' : Object.assign(state, action.extraData);
        break;
      case 'removeProperties' : removeProperties(state, action.keysToRemove);
        break;
      case 'clear' : clear(state);
        break;
    }
  }
}

function removeProperties(state, fields) {
  for (const field of fields) {
    delete state[field];
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

// const state = {
//   foo: 'bar', bar: 'foo',
// };

// const props = [
//   {
//     type: 'addProperties',
//     extraData: {
//       name: 'Jim',
//       hello: 'world',
//     },
//   },
//   {
//     type: 'removeProperties',
//     keysToRemove: ['bar', 'hello'],
//   },
//   {
//     type: 'addProperties',
//     extraData: { another: 'one' },
//   },
// ];

// transformState(state, props);
// console.log(state);

module.exports = transformState;
