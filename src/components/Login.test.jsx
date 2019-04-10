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

  // it('can change input values', () => {
  //   const wrap = rt.render(<Login />);
  //   rt.fireEvent.change(
  //     wrap.getByPlaceholderText('username'),
  //     { target: { value: 'foo' } },
  //   );

  //   rt.fireEvent.change(
  //     wrap.getByPlaceholderText('password'),
  //     { target: { value: 'bar' } },
  //   );

  //   expect(wrap.getByDisplayValue('foo'));
  //   expect(wrap.getByDisplayValue('bar'));
  // });

  it('can change input values', () => {
    const wrap = rt.render(<Login />);
    expect(wrap.asFragment()).toMatchSnapshot();

    const usernameInput = wrap.getByPlaceholderText('username');
    const passwordInput = wrap.getByPlaceholderText('password');

    const inputValue = 'name';
    const passValue = 'secretPassword';

    rt.fireEvent.change(usernameInput, { target: { value: inputValue } });
    expect(wrap.getByPlaceholderText('username').value).toBe(inputValue);

    rt.fireEvent.change(passwordInput, { target: { value: passValue } });
    expect(wrap.getByPlaceholderText('password').value).toBe(passValue);
  });

  it('displays login button if username and password', () => {
    const wrap = rt.render(<Login />);
    const usernameInput = wrap.getByLabelText('username');
    const passwordInput = wrap.getByLabelText('password');

    rt.fireEvent.change(
      usernameInput,
      { target: { value: 'A' } },
    );

    expect(wrap.queryByTestId(/loginButton/i)).toBeFalsy();

    rt.fireEvent.change(
      passwordInput,
      { target: { value: 'B' } },
    );

    expect(wrap.queryByTestId(/loginButton/i)).toBeTruthy();
  });

  it('can login successfully', async () => {
    // see the greeting render
  });

  it('can fail miserably', async () => {
    // see the error render
  });
});
