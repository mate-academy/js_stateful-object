1. [CODE STYLE]: don't use `for in` loop for iterating over array
2. [CODE STYLE]: Use `switch` statement if you have limited amount of conditions.
3. [NAMING]: use proper variable names in `for of` loop

BAD EXAMPLE:
```
for (let item of actions) {

```

GOOD EXAMPLE: 
```
for (const action of actions) {
```
4. [CODE STYLE]: switch/case should always have default case for error handling.
5. [CODE STYLE]: Nested loops === EVIL
6. [CODE KNOWLEDGE]: Remember, if property key is a variable - use brackets `object[key]`. If it's called key - use dot access `object.key`.
