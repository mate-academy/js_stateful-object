'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const actionsValues = Object.values(actions[i]);
    let actionsValuesKeys = [];
    let actionsValuesValues = [];

    switch (actionsValues[0]) {
      case 'addProperties' :
        actionsValuesKeys = Object.keys(actionsValues[1]);
        actionsValuesValues = Object.values(actionsValues[1]);

        for (let q = 0; q < actionsValuesKeys.length; q++) {
          state[actionsValuesKeys[q]] = actionsValuesValues[q];
        }
        break;

      case 'removeProperties' :
        actionsValuesValues = Object.values(actionsValues[1]);

        for (const key in state) {
          for (let q = 0; q < actionsValuesValues.length; q++) {
            if (key === actionsValuesValues[q]) {
              delete state[key];
            }
          }
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
};

module.exports = transformState;
