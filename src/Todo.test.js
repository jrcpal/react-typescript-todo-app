import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders todo items', async () => {
  const { findByText} = render(<Todo />)
  const firstTodo = await findByText('delectus aut autem')
  expect(firstTodo).toBeInTheDocument();
});

test('toggles todo item', async () => {
  const { findByText } = render(<Todo />);
  const firstTodo = await findByText('delectus aut autem');
  fireEvent.click(firstTodo);
  expect(firstTodo).toHaveClass('active');
  fireEvent.click(firstTodo);
  expect(firstTodo).not.toHaveClass('active');
});