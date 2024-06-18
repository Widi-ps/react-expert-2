/**
 * skenario testing
 * - CommentThreadInput component
 *   - should handle Comment typing correctly
 *   - should call addComment with the comment when submitted
 *   - should clear the textarea after submission
 */

import React from 'react'
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { expect, describe, afterEach, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import CommentThreadInput from './CommentThreadInput'

expect.extend(matchers)
describe('CommentThreadInput component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle Comment typing correctly', async () => {
    render(<CommentThreadInput addComment={() => {}} />)
    const commentInput = screen.getByPlaceholderText('Leave a comment')
    await userEvent.type(commentInput, 'Thread Comment')
    await expect(commentInput).toHaveValue('Thread Comment')
  })

  it('should call addComment with the comment when submitted', () => {
    const addCommentMock = vi.fn()
    render(<CommentThreadInput addComment={addCommentMock} />)
    const textarea = screen.getByPlaceholderText('Leave a comment')
    const button = screen.getByText('Balas')

    // Simulate typing a comment
    fireEvent.change(textarea, { target: { value: 'This is a test comment' } })
    expect(textarea.value).toBe('This is a test comment')

    // Simulate form submission
    fireEvent.click(button)

    expect(addCommentMock).toHaveBeenCalledWith('This is a test comment')
    expect(textarea.value).toBe('') // Textarea should be cleared after submission
  })

  it('should clear the textarea after submission', () => {
    const addCommentMock = vi.fn()
    render(<CommentThreadInput addComment={addCommentMock} />)
    const textarea = screen.getByPlaceholderText('Leave a comment')
    const button = screen.getByText('Balas')

    // Simulate typing a comment
    fireEvent.change(textarea, { target: { value: 'Another test comment' } })
    expect(textarea.value).toBe('Another test comment')

    // Simulate form submission
    fireEvent.click(button)

    expect(textarea.value).toBe('') // Textarea should be cleared after submission
  })
})
