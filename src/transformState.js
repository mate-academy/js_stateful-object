'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;

// const state = { x: 1 };

// console.log(transformState(state, [
//   { type: 'addProperties', extraData: { yet: 'another property' } },
//   { type: 'clear' },
//   { type: 'addProperties', extraData: { foo: 'bar', name: 'Jim' } }
// ]));

// state === { foo: 'bar', name: 'Jim' }
