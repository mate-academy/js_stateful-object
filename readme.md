Реалізувати функцію, яка отримує 2 аргументи: `state` та `actions`. Функція
повинна змінювати значення `state` на основі заданого масиву `actions`.

- Стан - це об'єкт. Ви повинні додавати, змінювати або видаляти його
  властивості замість того, щоб створювати новий об'єкт

- `actions` - масив об'єктів. Кожен об'єкт у цьому масиві має наступні властивості:
  - `type` містить рядок: або `addProperties`, або `removeProperties`, або `clear`;
  - Друга властивість кожного об'єкта залежить від `type` і може бути однією з наступних:
    - якщо `type` - `addProperties`, друга властивість - `extraData`. Вона містить об'єкт
      з парами `ключ: значення`, які потрібно додати до стану;
    - якщо `type` - `removeProperties`, друга властивість - `keysToRemove`. Вона містить масив
      зі списком назв властивостей (ключів), які потрібно видалити зі стану; (Неіснуючі
      властивості слід ігнорувати)
    - якщо `type` має значення `clear`, ви повинні видалити всі властивості зі стану
      state. Друга властивість у цьому випадку не потрібна;

Приклад використання:

Якщо `state` має вигляд {foo: 'bar', bar: 'foo'}, то
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
повинен модифікувати `state`, зробивши наступне:
- додати до `state` дві властивості
- потім видалити ключі `bar` та `hello` зі стану `state`
- і нарешті додати ще одну властивість до `state`.

Після цих операцій об'єкт `state` матиме наступний вигляд
 ```
 {
   foo: 'bar',
   name: 'Jim',
   another: 'one',
 }
```

Інший приклад:

```
 const state = { x: 1 };

 transformState(state, [
   { type: 'addProperties', extraData: { yet: 'інша властивість' } }
   { type: 'clear' },
   { type: 'addProperties', extraData: { foo: 'bar', name: 'Jim' } }
 ]);

// стан === { foo: 'bar', name: 'Jim' }
```

Translated with www.DeepL.com/Translator (free version)