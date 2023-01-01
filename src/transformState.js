'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    for (const type in act) {
      if (act[type] === 'addProperties') {
        addProp(state, act);
      } else if (act[type] === 'removeProperties') {
        removeProp(state, act);
      } else if (act[type] === 'clear') {
        clear(state);
      }
    }
  }

  return state;
};

const addProp = (state, act) => {
  Object.assign(state, act.extraData);
};

const removeProp = (state, act) => {
  const stateKeys = Object.keys(state);

  for (const key of act.keysToRemove) {
    for (const stateKey of stateKeys) {
      if (key === stateKey) {
        delete state[stateKey];
      };
    };
  };
};

const clear = (state) => {
  for (const key in state) {
    delete state[key];
  };
};

module.exports = transformState;
