import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list title', () => {
  render(<App />);
  // Sửa thành "DevOps Todo App" để khớp với dòng 44 trong App.jsx của bạn
  const linkElement = screen.getByText(/DevOps Todo App/i);
  expect(linkElement).toBeInTheDocument();
});