import React from 'react';
import * as rt from 'react-testing-library';
import Login from './Login';

afterEach(rt.cleanup);

describe('Login', () => {
  it('displays no login button unless username & password', () => {
    // write test first, see it fail, implement feature, see test pass
  });

  it('can change input values', () => {
    // we can fire change events on inputs
    // and we can grab inputs by their placeholder texts
  });

  it('can login successfully', async () => {
    // see the greeting render
  });

  it('can fail miserably', async () => {
    // see the error render
  });
});
