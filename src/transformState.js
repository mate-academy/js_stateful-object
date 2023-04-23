'use strict';

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    for (const key in actions[i]) {
      if (actions[i][key] === 'addProperties') {
        Object.assign(state, actions[i]['extraData']);
      };

      if (actions[i][key] === 'removeProperties') {
        for (const key1 in actions[i]['keysToRemove']) {
          delete state[actions[i]['keysToRemove'][key1]];
        }
      }

      if (actions[i][key] === 'clear') {
        for (const key1 in state) {
          delete state[key1];
        };
      };
    };
  };

  return state;
}

module.exports = transformState;
