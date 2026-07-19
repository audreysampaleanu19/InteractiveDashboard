import { render, screen } from '@testing-library/react';
import App from './App';
import movies2025 from "./data/movies2025";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
