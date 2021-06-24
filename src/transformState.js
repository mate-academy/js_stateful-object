'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const actionsValues = Object.values(actions[i]);
    let actionsValuesValues = [];

    switch (actionsValues[0]) {
      case 'addProperties' :
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties' :
        actionsValuesValues = Object.values(actionsValues[1]);

        for (const key of actionsValuesValues) {
          delete state[key];
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
