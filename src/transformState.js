'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const add = 'addProperties';
  const clear = 'clear';
  const remove = 'removeProperties';
  const arrayDelete = 'keysToRemove';
  const data = 'extraData';
  const type = 'type';

  for (const object of actions) {
    switch (object[type]) {
      case add :
        Object.assign(state, object[data]);
        break;
      case remove :
        for (const parameters of object[arrayDelete]) {
          delete state[parameters];
        }
        break;
      case clear :
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
