'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(function(action) {
    switch (action.type) {
      case 'addProperties':
        addPropertiesMutation(state, action.extraData);
        break;
      case 'removeProperties':
        removePropertiesMutation(state, action.keysToRemove);
        break;
      case 'clear':
        clearAllMutation(state);
        break;

      default:
        // console.warning('unknown action type');
        break;
    }
  });
}

function addPropertiesMutation(state, data) {
  Object.assign(state, data);
}

function removePropertiesMutation(state, keys) {
  keys.forEach(function(key) {
    delete state[key];
  });
}

function clearAllMutation(state) {
  // if we need to save the pointer to the same state object, then:
  removePropertiesMutation(state, Object.keys(state));

  // otherwise:
  // state = {};
}

/// ////////////////////////////////////////////////////////////
// const state = { foo: 1 };

// console.log(1, state);

// transformState(state, [
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
// ]);

module.exports = transformState;
