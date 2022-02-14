'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 * transformState(state, [
   {
     type: 'addProperties',
     extraData: {
       name: 'Jim',
       hello: 'world',
     }
   },
   {
     type: 'removeProperties',
     keysToRemove: ['bar', 'hello'],
   },
   {
     type: 'addProperties',
     extraData: { another: 'one' },
   }
 ])
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'removeProperties') {
      for (const prop of obj.keysToRemove) {
        delete state[prop];
      }
    }

    if (obj.type === 'addProperties') {
      for (const [prop, value] of Object.entries(obj.extraData)) {
        state[prop] = value;
      }
    }

    if (obj.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
