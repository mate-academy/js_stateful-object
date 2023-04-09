'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let tempState = state;

  for (const singleAction of actions) {
    switch (singleAction.type) {
      case 'addProperties':
        tempState = Object.assign(tempState, singleAction.extraData);
        break;

      case 'removeProperties':
        singleAction.keysToRemove.forEach(el => {
          delete tempState[el];
        });
        break;

      case 'clear':
        for (const el in tempState) {
          delete tempState[el];
        };
    };
  };

  return tempState;
};

module.exports = transformState;
