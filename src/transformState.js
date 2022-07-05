'use strict';

/**

 */
function transformState(state, actions) {
  actions.forEach(obj => {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case 'removeProperties':
        obj.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return 'Unknown type';
    }
  });

  return state;
}
module.exports = transformState;
