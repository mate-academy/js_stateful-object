'use strict';

function transformState(state, transforms) {
  // write code here
  const transform = transforms;

  for (let i = 0; i < transform.length; i++) {
    switch (transform[i].operation) {
      case 'addProperties':
        for (const [key1, value] of Object.entries(transform[i].properties)) {
          state[key1] = value;
        }
        break;
      case 'removeProperties':
        for (let j = 0; j < transform[i].properties.length; j++) {
          delete state[transform[i].properties[j]];
        }
        break;
      case 'clear':
        for (const key2 in state) {
          delete state[key2];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
