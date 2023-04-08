'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  actions.forEach(({ type, extraData, keysToRemove }) => {
    switch (true) {
      case (type === 'addProperties'):
        Object.assign(state, extraData);
        break;
      case (type === 'removeProperties'):
        keysToRemove.forEach(item => {
          if (state[item]) {
            delete state[item];
          }
        });
        break;
      case (type === 'clear'):
        for (const key in state) {
          delete state[key];
        };
        break;
    };
  });
}

module.exports = transformState;
