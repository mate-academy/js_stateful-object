# Transforming state

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

# Task description

Implement a function accepting 2 arguments: `state` and `actions`. The function
should change the `state` basing on the given `actions` array.

- `state` is an object. You are supposed to add, change, or delete its
  properties instead of creating a new object

- `actions` is an array of objects. Each object in this array has the next properties:
  - `type` contains a string: either `'addProperties'`, `'removeProperties'` or `'clear'`;
  - The second property of each object depends on `type` and may be one of the following:
    - if `type` is `addProperties`, second property is `extraData`. It contains an object
      with `key: value` pairs to add to the state;
    - if `type` is `removeProperties`, second property is `keysToRemove`. It contains an array
      with the list of property names (keys) to remove from the `state`; (Not existing
      properties should be ignored)
    - if `type` is `clear` you should remove all the properties from the
      state. No second property in this case;

Example of usage:

If `state` is {foo: 'bar', bar: 'foo'}, then
```
 transformState(state, [
   {
     type: 'addProperties',
     extraData: {
       name: 'Jim',
       hello: 'world',
     }
   },
   {
     type: 'removeProperties',
     keysToRemove: ['bar', 'hello'],
   },
   {
     type: 'addProperties',
     extraData: { another: 'one' },
   }
 ])
```
should modify the `state`, doing the following:
- add two properties to the `state`
- then remove keys `bar` and `hello` from the `state`
- and finally add another one property to the `state`

After these operations the object `state` will have the following look
 ```
 {
   foo: 'bar',
   name: 'Jim',
   another: 'one',
 }
```

Another example:

```
 const state = { x: 1 };

 transformState(state, [
   { type: 'addProperties', extraData: { yet: 'another property' } }
   { type: 'clear' },
   { type: 'addProperties', extraData: { foo: 'bar', name: 'Jim' } }
 ]);

// state === { foo: 'bar', name: 'Jim' }
```

Реализуйте функцию, принимающую 2 аргумента: `состояние` и `действия`. Функция
следует изменить «состояние» на основе заданного массива «действий».

- `состояние` - это объект. Вы должны добавить, изменить или удалить его
  свойства вместо создания нового объекта

- `actions` - это массив объектов. Каждый объект в этом массиве имеет следующие свойства:
  - `type` содержит строку: addProperties, removeProperties или clear;
  - Второе свойство каждого объекта зависит от типа и может быть одним из следующих:
    - если `type` равно `addProperties`, второе свойство `extraData`. Он содержит объект
      с парами «ключ: значение» для добавления к состоянию;
    - если `тип` равен `removeProperties`, вторым свойством является `keysToRemove`. Он содержит массив
      со списком имен свойств (ключей) для удаления из `состояния`; (Не существует
      свойства следует игнорировать)
    - если `type` имеет значение `clear`, вы должны удалить все свойства из
      государство. В этом случае нет второго свойства;
