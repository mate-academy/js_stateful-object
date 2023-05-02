'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const values = Object.values(action);

    if (values[0] === 'clear') {
      for (const data in state) {
        delete state[data];
      }
    }

    for (const properties of values.slice(1)) {
      switch (true) {
        case values[0] === 'addProperties':
          Object.assign(state, properties);
          break;

        case values[0] === 'removeProperties':
          for (const data of properties) {
            delete state[data];
          }
          break;

        default:
          break;
      }
    }
  }
}

module.exports = transformState;
