'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i]['operation'] === 'addProperties') {
      Object.assign(state, transforms[i]['properties']);
    }

    if (transforms[i]['operation'] === 'removeProperties') {
      for (let j = 0; j < transforms[i]['properties'].length; j++) {
        delete state[transforms[i]['properties'][j]];
      }
    }

    if (transforms[i]['operation'] === 'clear') {
      // const keysState = Object.keys(state)
      for (const key in state) {
        delete state[key];
      }
    }
  }

  // console.log(state)
  return state;
}

module.exports = transformState;
