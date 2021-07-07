'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  if (!Array.isArray(transforms)) {
    return state;
  }

  for (const trans of transforms) {
    if (trans.operation === 'addProperties') {
      addProperties(state, trans.properties);
    }
    else if (trans.operation === 'removeProperties') {
      removeProperties(state, trans.properties);
    }
    else if (trans.operation === 'clear') {
      clear(state);
    }
    else {
      continue;
    }
  }

  function clear(state) {
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        delete state[key];
      }
    }

    return state;
  }

  function removeProperties(state, props) {
    if (Array.isArray(props)) {
      for (const key of props) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }

    return state;
  }

  function addProperties(state, props) {
    if (props && typeof (props) === 'object') {
      for (const key in props) {
        if (props.hasOwnProperty(key)) {
          state[key] = props[key];
        }
      }
    }

    return state;
  }

  return state;
}

module.exports = transformState;
