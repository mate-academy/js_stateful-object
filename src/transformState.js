'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
// На каждой итерации метод reduce() возвращает новое значение initialState,
// которое становится входным значением для следующей итерации,
// пока все элементы в массиве actions не будут обработаны.
// В конце работы метода reduce() мы возвращаем итоговое значение initialState,
// которое содержит все примененные изменения

function transformState(state, actions) {
  // Используем метод `reduce()`, чтобы итерироваться по массиву `actions`
  // и модифицировать объект `state`
  return actions.reduce((initialState, action) => {
    switch (action.type) {
      // Добавляем свойства из объекта `action.extraData` в `state`
      // и возвращаем модифицированный объект
      case 'addProperties':
        return Object.assign(initialState, action.extraData);
      case 'removeProperties':
        // Удаляем каждое свойство, указанное в массиве `action.keysToRemove`,
        // из `state`
        // и возвращаем модифицированный объект
        action.keysToRemove.forEach(key => delete initialState[key]);

        return initialState;
      case 'clear':
        // Удаляем все свойства из `state` и возвращаем модифицированный объект
        Object.keys(initialState).forEach(key => delete initialState[key]);

        return initialState;
      default:
        // Если тип действия не соответствует ни одному из определенных в
        // операторе `switch`, возвращаем исходный объект
        return initialState;
    }
  }, state);
}

module.exports = transformState;
