/**
 * skenario testing
 *
 * - CommentThreadInput component
 *   - should render RegisterInput component correctly
 *   - should handle input changes correctly
 *   - should call register function when Register button is clicked
 */

import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);
describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render RegisterInput component correctly', () => {
    render(<RegisterInput register={() => {}} />);

    // Memastikan elemen-elemen form render dengan benar
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('should handle input changes correctly', () => {
    render(<RegisterInput register={() => {}} />);

    // Mendapatkan elemen input
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');

    // Memastikan nilai awal adalah kosong
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');

    // Simulasi perubahan input
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Memastikan nilai input berubah sesuai yang diharapkan
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  it('should call register function when Register button is clicked', () => {
    const registerMock = vi.fn();
    render(<RegisterInput register={registerMock} />);

    // Mendapatkan elemen input dan button
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const registerButton = screen.getByText('Register');

    // Simulasi perubahan input
    fireEvent.change(nameInput, { target: { value: 'Hahaha' } });
    fireEvent.change(emailInput, { target: { value: 'haha@haha.com' } });
    fireEvent.change(passwordInput, { target: { value: 'haha123' } });

    // Simulasi klik button Register
    fireEvent.click(registerButton);

    // Memastikan fungsi register dipanggil dengan argumen yang benar
    expect(registerMock).toHaveBeenCalledWith({
      name: 'Hahaha',
      email: 'haha@haha.com',
      password: 'haha123',
    });
  });
});
