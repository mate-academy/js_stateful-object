'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const item of actions) {
    if (item.type === 'addProperties') {
      // или мне сделать обект который будет
      // ссылкой на стейт и при его изменеии и стейт будет меняться?
      // это копирование state и item.extraData
      // state = {
      //   ...state, ...item.extraData,
      // };
      Object.assign(state, item.extraData);
      // let obj = { ...item.extraData };
    }

    if (item.type === 'removeProperties') {
      for (const i of item.keysToRemove) {
        // поскольку я работаю в рамках
        //  state то все изменения из любого условия
        // должны видны в других условиях
        delete state[i];
      }
    }

    if (item.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

// console.log(transformState({
//   foo: 'bar', name: 'Jim', another: 'one',
// },
// [
//   { type: 'clear' },
// ]
// ));

// console.log(transformState({},
//   [
//     {
//       type: 'addProperties',
//       extraData: {
//         name: 'Jim',
//         hello: 'world',
//       },
//     },
//   ]
// ));

module.exports = transformState;

// function transformState(state, actions) {
//   // console.log(actions);
//   for (const item of actions) {
//     // console.log(item);
//     for (const key in item) {
//       // console.log(item[key]);
//       // console.log(key);
//       // console.log(item[key] === 'addProperties');

//       if (item[key] === 'addProperties') {
//         // console.log("object");
//         // console.log(item[key]);
//         console.log(Object.assign(state, extraData));
//       }
//     }
//   }
// }

// console.log(transformState({},
//   [
//     {
//       type: 'addProperties',
//       extraData: {
//         name: 'Jim',
//         hello: 'world',
//       },
//     },
//   ]
// ));

// {
//   type: 'addProperties',
//   extraData: {
//     name: 'Jim',
//     hello: 'world',
//   }
// },
// {
//   type: 'removeProperties',
//   keysToRemove: ['bar', 'hello'],
// },
// {
//   type: 'addProperties',
//   extraData: { another: 'one' },
// }
