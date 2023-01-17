'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const clear = () => {
    for (const param in state) {
      delete state[param];
    }
  };

  const addProps = (props) => {
    Object.assign(state, props);
  };

  const removeProps = (props) => {
    for (const key of props) {
      delete state[key];
    }
  };

  const toDo = [ ...actions ];

  for (const action of toDo) {
    switch (action.type) {
      case 'addProperties':
        addProps(action.extraData);
        break;
      case 'removeProperties':
        removeProps(action.keysToRemove);
        break;
      default:
        clear();
    }
  }
}

module.exports = transformState;
