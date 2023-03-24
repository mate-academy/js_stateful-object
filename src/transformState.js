'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const result = state;

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      const prop = Object.keys(actions[i].extraData);

      for (let p = 0; p < prop.length; p++) {
        result[prop[p]] = actions[i].extraData[prop[p]]
      }
    } else if (actions[i].type === 'removeProperties') {
      const deletedProperties = actions[i].keysToRemove;

      for (let d = 0; d < deletedProperties.length; d++) {
        delete result[deletedProperties[d]];
      }
    } else {
      const clear = Object.keys(result);

      for (let c = 0; c < clear.length; c++) {
        delete result[clear[c]];
      }
    }
  }

  return result
}

module.exports = transformState;
