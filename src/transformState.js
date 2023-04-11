'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const comand of actions) {
    switch (comand.type) {
      case 'addProperties':
        Object.assign(state, comand.extraData);
        break;

      case 'removeProperties':
        const propToRemove = comand.keysToRemove;

        for (const prop in propToRemove) {
          if (state.hasOwnProperty(propToRemove[prop])) {
            delete state[propToRemove[prop]];
          }
        }
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
