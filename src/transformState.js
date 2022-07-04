'use strict';

/**

 */
function transformState(state, actions) {

  actions.forEach(obj => {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      obj.keysToRemove.forEach(key => {
        delete state[key];
      });
    }

    if (obj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });

  return state;
}
module.exports = transformState;
