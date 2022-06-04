import React from 'react';
import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import App from './App';
import SignUp from './layouts/SignUp';
import SignIn from './layouts/Login';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Pastikan ada form registrasi", () => {
  test("Pastikan ada form username:", () => {
    render(<SignUp/>)
    const inputUsername = screen.getByText("Username")
    expect(inputUsername).toBeInTheDocument()
  })

  test("Pastikan ada form email:", () => {
    render(<SignUp/>)
    const inputEmail = screen.getByText("Email")
    expect(inputEmail).toBeInTheDocument()
  })

  test("Pastikan ada form password:", () => {
    render(<SignUp/>)
    const inputPassword = screen.getByText("Password")
    expect(inputPassword).toBeInTheDocument()
  })

  test("Pastikan username input menerima tipe data text:", () => {
    render(<SignUp/>)
    const usernameInput = getByLabelText("Username")
    expect(usernameInput.value).toMatch("");
    fireEvent.change(usernameInput, {target: {value: 'testing'}})
    expect(usernameInput.value).toMatch("testing")
  })

  test("Pastikan email input menerima tipe data text:", () => {
    render(<SignUp/>)
    const emailInput = getByLabelText("Email")
    expect(emailInput.value).toMatch("");
    fireEvent.change(emailInput, {target: {value: 'testing'}})
    expect(emailInput.value).toMatch("testing")
  })
})

describe("Pastikan ada form login", () => {
  test("Pastikan ada form email:", () => {
    render(<SignIn/>)
    const inputEmail = screen.getByText("Email")
    expect(inputEmail).toBeInTheDocument()
  })

  test("Pastikan ada form password:", () => {
    render(<SignIn/>)
    const inputPassword = screen.getByText("Password")
    expect(inputPassword).toBeInTheDocument()
  })

  test("Pastikan email input menerima tipe data text:", () => {
    render(<SignIn/>)
    const emailInput = getByLabelText("Email")
    expect(emailInput.value).toMatch("");
    fireEvent.change(emailInput, {target: {value: 'testing'}})
    expect(emailInput.value).toMatch("testing")
  })
})

