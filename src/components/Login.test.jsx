import React from 'react';
import * as rt from 'react-testing-library';
import Login from './Login';

afterEach(rt.cleanup);

describe('Login', () => {
  it('displays no login button if no username or no password', () => {
    const wrap = rt.render(<Login />);
    const button = wrap.queryByTestId(/loginButton/i);
    expect(button).toBeFalsy();
  });

  it('displays login button if username and password', () => {
    const wrap = rt.render(<Login />);
    const button = wrap.queryByTestId(/loginButton/i);
    const usernameInput = wrap.getByLabelText('username');
    const passwordInput = wrap.getByLabelText('password');

    rt.fireEvent.change(
      usernameInput,
      { target: { value: 'A' } },
    );

    expect(button).toBeFalsy();

    rt.fireEvent.change(
      passwordInput,
      { target: { value: 'A' } },
    );

    expect(button).toBeTruthy();
  });

  it('can change input values', () => {
    // we can fire change events on inputs
    // and we can grab inputs by their placeholder texts or their values
  });

  it('can login successfully', async () => {
    // see the greeting render
  });

  it('can fail miserably', async () => {
    // see the error render
  });
});
