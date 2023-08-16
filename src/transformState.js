'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let STATE = state;

  for (let i = 0; i < actions.length; i++) {
    const el = actions[i];
    const EXTRA_DATA_CONTENT = el.extraData;
    const KEYS_TO_REMOVE_CONTENT = el.keysToRemove;

    if (el.type === 'clear') {
      STATE = {};
    }

    if (el.type === 'addProperties') {
      Object.assign(STATE, EXTRA_DATA_CONTENT);
    }

    if (el.type === 'removeProperties') {
      for (let a = 0; i < KEYS_TO_REMOVE_CONTENT.length; i++) {
        const elKr = KEYS_TO_REMOVE_CONTENT[a];

        delete STATE[elKr];
      }
    }
  }

  return STATE;
}

module.exports = transformState;
