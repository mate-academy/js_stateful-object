'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type;
    const actingProperties = action.extraData || action.keysToRemove;

    performAction(state, type, actingProperties);
  }
}

function performAction(state, action, actingProperties) {
  switch (action) {
    case 'addProperties':
      addProperties(state, actingProperties);
      break;
    case 'removeProperties':
      removeProperties(state, actingProperties);
      break;
    case 'clear':
      removeProperties(state);
      break;
    default:
  }

  function addProperties(object, properties) {
    for (const property in properties) {
      object[property] = properties[property];
    }
  }

  function removeProperties(object, properties) {
    const shouldClearObject = !properties;

    if (shouldClearObject) {
      for (const property in object) {
        delete object[property];
      }
    } else {
      for (const property of properties) {
        delete object[property];
      }
    }
  }
}

module.exports = transformState;
