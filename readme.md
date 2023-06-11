# Transforming state

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**
## ❗️❗️❗️ DON'T FORGET TO PROOFREAD YOUR CODE WITH [CHECKLIST](https://github.com/mate-academy/js_stateful-object/blob/master/checklist.md) BEFORE SENDING YOUR PULL REQUEST❗️❗️❗️

# Task description

Implement a function accepting 2 arguments: `state` and `actions`. The function
should change the `state` basing on the g iven `actions` array.

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
