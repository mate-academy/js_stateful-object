/* eslint-disable spaced-comment */
'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const reducer = (_state, action) => {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          _state[key] = action.extraData[key];
        }
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete _state[key];
        }
        break;
      case 'clear':
        const objectProps = Object.getOwnPropertyNames(_state);

        objectProps.forEach((key) => delete _state[key]);
        break;
      default:
        break;
    }
  };

  for (const act of actions) {
    reducer(state, act);
  }
  //non-mutating function :(
  /*const reducer = (_state, action) => {
    switch (action.type) {
      case 'addProperties':
        return {
          ..._state,
          ...action.extraData,
        };
      case 'removeProperties':
        const updatedState = action.keysToRemove.reduce((object, key) => {
          const { [key]: _, ...p } = object;

          return p;
        }, _state);

        return updatedState;
      case 'clear':
        return {};
      default:
        break;
    }
  };
  const modifiedState = actions.reduce((__state, act) => {
    return reducer(__state, act);
  }, state);

  return modifiedState; */
}

module.exports = transformState;
