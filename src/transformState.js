'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach(({ type, extraData, keysToRemove }) => {
    switch (type) {
      case ('addProperties'):
        Object.assign(state, extraData);
        break;
      case ('removeProperties'):
        keysToRemove.forEach(item => {
          if (state[item]) {
            delete state[item];
          }
        });
        break;
      case ('clear'):
        for (const key in state) {
          delete state[key];
        };
        break;
    };
  });
}

module.exports = transformState;
