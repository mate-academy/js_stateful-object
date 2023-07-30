'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

/* - `state` is an object.
- actions is an array of objects
type contains  `'addProperties'` `'removeProperties'` `'clear'`;
- if `type` is `addProperties`, second property is `extraData`.
- if `type` is `removeProperties`, second property is `keysToRemove`
- if `type` is `clear` you should remove all the properties
 Use `switch
if key is a variable - `object[key]`.
If it's called key -  `object.key``
*/

function transformState(state, actions) {
  actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => delete state[key]);
        break;

      case 'clear':
        Object.keys(state).forEach((key) => delete state[key]);
        break;

      default:
        break;
    }
  });
}

module.exports = transformState;
