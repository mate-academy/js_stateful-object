# Transforming state

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

# Task description

Implement a function accepting 2 arguments: `state` and `transforms`. The function
should change the `state` basing on the given `transforms` array.

- `state` is an object. You are supposed to add, change, or delete its
  properties instead of creating a new object

- `transforms` is an array of objects. Each object in this array has the two following properties:
  - First - `operation`: either `addProperties`, `removeProperties` or `clear`;
  - Second - `properties`:
    - if `operation` is `addProperties`, field `properties` contains an object
      with `key: value` pairs to add to the state;
    - if `operation` is `removeProperties`, field `properties` contains an array
      with the list of property names (keys) to remove from the `state`; (Not existing
      properties should be ignored)
    - if `operation is `clear` you should remove all the properties from the
      state

Example of usage:

If `state` is {foo: 'bar', bar: 'foo'}, then
```
 transformState(state, [
   {
     operation: 'addProperties',
     properties: {
       name: 'Jim',
       hello: 'world',
     }
   },
   {
     operation: 'removeProperties',
     properties: ['bar', 'hello'],
   },
   {
     operation: 'addProperties',
     properties: { another: 'one' },
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
Then after calling
```
 transformState(state, [
   { operation: 'addProperties', properties: { yet: 'another property' } }
   { operation: 'clear' },
   { operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' } }
 ])
```
the `state` variable must contain
 ```
 { foo: 'bar', name: 'Jim' }
```
