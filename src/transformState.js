'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  const _state = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(_state, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete _state[key];
        }
        break;
      case 'clear':
        for (const key in _state) {
          delete _state[key];
        }
        break;
    }
  }

  return _state;
}

module.exports = transformState;
