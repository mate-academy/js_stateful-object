'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let tempState = state;
  // when I directly refer to state -
  // then linter throws error: "assignement to function parametr."
  // That's why im using tempState here :)

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        tempState = Object.assign(tempState, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(el => {
          delete tempState[el];
        });
        break;

      case 'clear':
        for (const el in tempState) {
          delete tempState[el];
        };
        break;

      default:
        throw new Error('Unknow name of actions type.');
    };
  };

  return tempState;
};

module.exports = transformState;
