/**
 * skenario testing
 *
 * - CommentThreadInput component
 *   - should render ThreadInput component correctly
 *   - should handle input changes correctly
 *   - should call addThread function when form is submitted
 */

import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './ThreadInput';

expect.extend(matchers);
describe('ThreadInput component', () => {
  it('should render ThreadInput component correctly', () => {
    afterEach(() => {
      cleanup();
    });

    // Merender komponen ThreadInput
    render(<ThreadInput addThread={() => {}} />);

    // Memastikan elemen-elemen form dirender dengan benar
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Thread')).toBeInTheDocument();
    expect(screen.getByText('Add New Threads')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should handle input changes correctly', () => {
    // Merender komponen ThreadInput
    render(<ThreadInput addThread={() => {}} />);

    // Mengambil elemen input dan textarea dari form
    const titleInput = screen.getByLabelText('Title');
    const categoryInput = screen.getByLabelText('Category');
    const bodyTextarea = screen.getByLabelText('Thread');

    // Mengubah nilai input dan textarea
    fireEvent.change(titleInput, { target: { value: 'New Thread Title' } });
    fireEvent.change(categoryInput, { target: { value: 'General' } });
    fireEvent.change(bodyTextarea, { target: { value: 'This is the body of the thread.' } });

    // Memastikan nilai input dan textarea sesuai dengan yang diharapkan
    expect(titleInput.value).toBe('New Thread Title');
    expect(categoryInput.value).toBe('General');
    expect(bodyTextarea.value).toBe('This is the body of the thread.');
  });

  it('should call addThread function when form is submitted', () => {
    // Membuat mock fungsi addThread
    const addThreadMock = vi.fn();
    // Merender komponen ThreadInput dengan mock fungsi addThread
    render(<ThreadInput addThread={addThreadMock} />);

    // Mengambil elemen input, textarea, dan tombol submit dari form
    const titleInput = screen.getByLabelText('Title');
    const categoryInput = screen.getByLabelText('Category');
    const bodyTextarea = screen.getByLabelText('Thread');
    const submitButton = screen.getByText('Submit');

    // Mengubah nilai input dan textarea
    fireEvent.change(titleInput, { target: { value: 'Hahaha' } });
    fireEvent.change(categoryInput, { target: { value: 'Hahaha' } });
    fireEvent.change(bodyTextarea, { target: { value: 'Haha Hehe.' } });

    // Mengklik tombol submit
    fireEvent.click(submitButton);

    // Memastikan fungsi addThread dipanggil dengan argumen yang benar
    expect(addThreadMock).toHaveBeenCalledWith({
      title: 'Hahaha',
      category: 'Hahaha',
      body: 'Haha Hehe.'
    });
  });
});
