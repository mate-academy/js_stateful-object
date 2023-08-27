'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const stateCopy = state;

  for (let i = 0; i < actions.length; i++) {
    const el = actions[i];
    const extraDataContent = el.extraData;
    const keysToRemoveContent = el.keysToRemove;

    if (el.type === 'clear') {
      for (const q in stateCopy) {
        delete stateCopy[q];
      }
    }

    if (el.type === 'addProperties') {
      Object.assign(stateCopy, extraDataContent);
    }

    if (el.type === 'removeProperties') {
      for (let a = 0; a < keysToRemoveContent.length; a++) {
        const elKr = keysToRemoveContent[a];

        delete stateCopy[elKr];
      }
    }
  }

  return stateCopy;
}

module.exports = transformState;
