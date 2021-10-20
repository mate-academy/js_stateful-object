'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const parse = (act, st) => {
    const { type } = act;

    switch (type) {
      case 'addProperties':
        const { extraData } = act;

        Object.entries(extraData).forEach(([key, value]) => {
          st[key] = value;
        });
        break;

      case 'removeProperties':
        const { keysToRemove } = act;

        keysToRemove.map(key => delete st[key]);
        break;

      case 'clear':
        Object.keys(st).map(key => delete st[key]);
        break;

      default:
        throw new Error('Something wrong!!!');
    }
  };

  actions.map(act => parse(act, state));
}

module.exports = transformState;
