'use strict';

const transformState = require('./transformState');

test('Should add a single property to an empty state', () => {
  const state = {};

  transformState(state, [
    {
      operation: 'addProperties', properties: { name: 'Jim' },
    },
  ]);

  expect(state)
    .toEqual({ name: 'Jim' });
});

test('Should add multiple properties to an empty state', () => {
  const state = {};

  transformState(state, [
    {
      operation: 'addProperties',
      properties: {
        name: 'Jim', hello: 'world',
      },
    },
  ]);

  expect(state)
    .toEqual({
      name: 'Jim', hello: 'world',
    });
});

test('Should add multiple properties to non empty state', () => {
  const state = {
    foo: 'bar', bar: 'foo',
  };

  transformState(state, [
    {
      operation: 'addProperties',
      properties: {
        name: 'Jim', hello: 'world',
      },
    },
  ]);

  expect(state)
    .toEqual({
      foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
    });
});

test('Should replace existing properties', () => {
  const state = {
    foo: 'bar', bar: 'foo',
  };

  transformState(state, [
    {
      operation: 'addProperties',
      properties: {
        foo: 'new', hello: 'world',
      },
    },
  ]);

  expect(state)
    .toEqual({
      foo: 'new', bar: 'foo', hello: 'world',
    });
});

test('Should remove the only property from the state', () => {
  const state = { foo: 'bar' };

  transformState(state, [
    {
      operation: 'removeProperties', properties: ['foo'],
    },
  ]);

  expect(state)
    .toEqual({});
});

test('Should remove an existing property keeping the other ones', () => {
  const state = {
    foo: 'bar', bar: 'foo',
  };

  transformState(state, [
    {
      operation: 'removeProperties', properties: ['bar'],
    },
  ]);

  expect(state)
    .toEqual({ foo: 'bar' });
});

test('Should remove several properties', () => {
  const state = {
    foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
  };

  transformState(state, [
    {
      operation: 'removeProperties', properties: ['hello', 'foo', 'name'],
    },
  ]);

  expect(state)
    .toEqual({ bar: 'foo' });
});

test('Should do nothing when removing no properties', () => {
  const state = {
    foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
  };

  transformState(state, [
    {
      operation: 'removeProperties', properties: [],
    },
  ]);

  expect(state)
    .toEqual({
      foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
    });
});

test('Should not fail when removing not existing property', () => {
  const state = {
    foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
  };

  transformState(state, [
    {
      operation: 'removeProperties', properties: ['test', 'bar'],
    },
  ]);

  expect(state)
    .toEqual({
      foo: 'bar', name: 'Jim', hello: 'world',
    });
});

test('Should clear the state', () => {
  const state = {
    foo: 'bar', name: 'Jim', another: 'one',
  };

  transformState(state, [
    { operation: 'clear' },
  ]);

  expect(state)
    .toEqual({});
});

test('Should not fails when clearing an empty state', () => {
  const state = {};

  transformState(state, [
    { operation: 'clear' },
  ]);

  expect(state)
    .toEqual({});
});

test('Should apply several operations', () => {
  const state = {
    foo: 'bar', bar: 'foo',
  };

  transformState(state, [
    {
      operation: 'addProperties',
      properties: {
        name: 'Jim', hello: 'world',
      },
    },
    {
      operation: 'removeProperties', properties: ['bar', 'hello'],
    },
    {
      operation: 'addProperties', properties: { another: 'one' },
    },
  ]);

  expect(state)
    .toEqual({
      foo: 'bar', name: 'Jim', another: 'one',
    });
});

test('Should work with a long list of operations', () => {
  const state = {
    foo: 'bar', name: 'Jim', another: 'one',
  };

  transformState(state, [
    {
      operation: 'removeProperties', properties: ['another'],
    },
    { operation: 'clear' },
    { operation: 'clear' },
    { operation: 'clear' },
    {
      operation: 'addProperties', properties: { yet: 'another property' },
    },
    { operation: 'clear' },
    {
      operation: 'addProperties',
      properties: {
        foo: 'bar', name: 'Jim',
      },
    },
    {
      operation: 'removeProperties', properties: ['name', 'hello'],
    },
  ]);

  expect(state)
    .toEqual({ foo: 'bar' });
});
