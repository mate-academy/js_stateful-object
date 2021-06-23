'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i in actions) {
    let act = '';

    for (const j in actions[i]) {
      const action = (actions[i])[j];

      if (act === 'add') {
        for (const e in action) {
          state[e] = action[e];
        }
      }

      if (act === 'rem') {
        for (const key in state) {
          for (const e in action) {
            if (action[e] === key) {
              delete state[key];
            }
          }
        }
      }

      if (typeof (action) === typeof ('a')) {
        if (action === 'addProperties') {
          act = 'add';
        }

        if (action === 'removeProperties') {
          act = 'rem';
        }

        if (action === 'clear') {
          for (const e in state) {
            delete state[e];
          }
        }
      }
    }
  }

  return state;
};

module.exports = transformState;
