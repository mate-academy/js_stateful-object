'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addingProperties = (data) => {
    Object.assign(state, data);
  };

  const removingProperties = (arrProps) => {
    for (const prop in arrProps) {
      const valueArrProps = arrProps[prop];

      delete state[valueArrProps];
    };
  };

  const clearingObj = (obj) => {
    for (const prop in obj) {
      delete obj[prop];
    };
  };

  for (const key in actions) {
    const actionType = actions[key].type;

    if (actionType === 'addProperties') {
      addingProperties(actions[key].extraData);
    };

    if (actionType === 'removeProperties') {
      removingProperties(actions[key].keysToRemove);
    };

    if (actionType === 'clear') {
      clearingObj(state);
    };
  }
};

module.exports = transformState;
