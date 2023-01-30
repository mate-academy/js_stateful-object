'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    const dataToRemove = object.keysToRemove;
    const extraKeysObject = object.extraData;

    if (object.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    };

    if (object.type === 'removeProperties') {
      Object.keys(state).filter(key => {
        if (dataToRemove.includes(key)) {
          delete state[key];
        }
      });
    };

    if (object.type === 'addProperties') {
      Object.assign(state, extraKeysObject);
    };
  };
};

module.exports = transformState;
