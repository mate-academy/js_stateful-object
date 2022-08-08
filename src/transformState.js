'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // console.log(actions);
  for (const item of actions) {
    // console.log(item);
    // console.log(item.type);
    if (item.type === 'addProperties') {
      // console.log("hi");
      // state = { ...item.extraData };
    }

    // console.log(state);

    if (item.type === 'removeProperties') {
      // console.log(item.keysToRemove);
      for (const i of item.keysToRemove) {
        delete state[i];
      }
      // console.log(item);
      // state = { ...item.extraData };
    }

    if (item.type === 'clear') {
      // console.log(state);
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
