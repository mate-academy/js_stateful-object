'use strict';

const transformState = require('./transformState');

test('Should add a single property to an empty state', () => {
  const state = {};

  transformState(state, [
    {
      type: 'addProperties', extraData: { name: 'Jim' },
    },
  ]);

  expect(state)
    .toEqual({ name: 'Jim' });
});

test('Should add multiple properties to an empty state', () => {
  const state = {};

  transformState(state, [
    {
      type: 'addProperties',
      extraData: {
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
      type: 'addProperties',
      extraData: {
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
      type: 'addProperties',
      extraData: {
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
      type: 'removeProperties', keysToRemove: ['foo'],
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
      type: 'removeProperties', keysToRemove: ['bar'],
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
      type: 'removeProperties', keysToRemove: ['hello', 'foo', 'name'],
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
      type: 'removeProperties', keysToRemove: [],
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
      type: 'removeProperties', keysToRemove: ['test', 'bar'],
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
    { type: 'clear' },
  ]);

  expect(state)
    .toEqual({});
});

test('Should not fails when clearing an empty state', () => {
  const state = {};

  transformState(state, [
    { type: 'clear' },
  ]);

  expect(state)
    .toEqual({});
});

test('Should apply several types', () => {
  const state = {
    foo: 'bar', bar: 'foo',
  };

  transformState(state, [
    {
      type: 'addProperties',
      extraData: {
        name: 'Jim', hello: 'world',
      },
    },
    {
      type: 'removeProperties', keysToRemove: ['bar', 'hello'],
    },
    {
      type: 'addProperties', extraData: { another: 'one' },
    },
  ]);

  expect(state)
    .toEqual({
      foo: 'bar', name: 'Jim', another: 'one',
    });
});

test('Should work with a long list of types', () => {
  const state = {
    foo: 'bar', name: 'Jim', another: 'one',
  };

  transformState(state, [
    {
      type: 'removeProperties', keysToRemove: ['another'],
    },
    { type: 'clear' },
    { type: 'clear' },
    { type: 'clear' },
    {
      type: 'addProperties', extraData: { yet: 'another property' },
    },
    { type: 'clear' },
    {
      type: 'addProperties',
      extraData: {
        foo: 'bar', name: 'Jim',
      },
    },
    {
      type: 'removeProperties', keysToRemove: ['name', 'hello'],
    },
  ]);

  expect(state)
    .toEqual({ foo: 'bar' });
});
