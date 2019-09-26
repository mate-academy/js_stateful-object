'use strict';

const transformState = require('./transformState');

test('The function is not supposed to return anything', () => {
  const state = { foo: 'bar' };
  expect(transformState(state, [
    { operation: 'addProperties', properties: { hello: 'world' } },
  ])).toBe(undefined);
});

test('Non-empty initial state, adding and removing properties', () => {
  const state = { foo: 'bar', bar: 'foo' };
  transformState(state, [
    { operation: 'addProperties', properties: { name: 'Jim', hello: 'world' } },
    { operation: 'removeProperties', properties: ['bar', 'hello'] },
    { operation: 'addProperties', properties: { another: 'one' } },
  ]);
  expect(state)
    .toEqual({ foo: 'bar', name: 'Jim', another: 'one' });
});

test('Non-empty initial state, adding and clearing properties', () => {
  const state = { foo: 'bar', name: 'Jim', another: 'one' };
  transformState(state, [
    { operation: 'addProperties', properties: { yet: 'another property' } },
    { operation: 'clear' },
    { operation: 'addProperties', properties: { foo: 'bar', name: 'Jim' } },
  ]);
  expect(state)
    .toEqual({ foo: 'bar', name: 'Jim' });
});

test('Removing the only property from the state', () => {
  const state = { foo: 'bar' };
  transformState(state, [
    { operation: 'removeProperties', properties: ['foo'] },
  ]);
  expect(state)
    .toEqual({});
});

test('Adding a property to an empty state', () => {
  const state = {};
  transformState(state, [
    { operation: 'addProperties', properties: { 'foo': 'bar' } },
  ]);
  expect(state)
    .toEqual({ 'foo': 'bar' });
});
