'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((elem) => {
    if (elem['type'] === 'addProperties') {
      Object.assign(state, elem['extraData']);
    }

    if (elem['type'] === 'removeProperties') {
      const arrayToDelete = elem['keysToRemove'];

      for (let j = 0; j < arrayToDelete.length; j++) {
        delete state[arrayToDelete[j]];
      }
    }

    if (elem['type'] === 'clear') {
      for (const name in state) {
        delete state[name];
      }
    }
  });
}

module.exports = transformState;

// const actions = [];

// actions.forEach (elem) => {
//   if (elem[type] === 'addProperties') {
//     Object.assign (state, elem['extraData'])
//   }

//   if(elem[type] === 'removeProperties') {
//     for (let i = 0; i < elem.length; i++) {
//       delete state[elem['']];
//     }
//   }
// }
