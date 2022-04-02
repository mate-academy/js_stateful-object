'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const act = Object.assign({}, ...actions);

  for (const key in act) {
    if (act[key] === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }

    if (act[key] === 'addProperties') {
      Object.assign(state, act.extraData);
    }

    if (act[key] === 'removeProperties') {
      for (const removeItem of act.keysToRemove) {
        for (const item in state) {
          if (removeItem === item) {
            delete state[item];
          }
        }
      }
    }
  }

  // for (const key in actions.type)]]
  //   if (actions[key] === 'clear') {
  //     for (const props in state) {
  //       delete state[props];
  //     }
  //   }

  //   if (actions[key] === 'addProperties') {
  //     Object.assign(state, actions.extraData);
  //   }

  //   if (key === 'removeProperties') {
  //     for (const removeItem of actions.keysToRemove) {
  //       for (const item in state) {
  //         if (removeItem === item) {
  //           delete state[item];
  //         }
  //       }
  //     }
  //   }
  // }

  return state;
}

module.exports = transformState;
