import React from 'react';
import { render, screen, /*fireEvent, waitFor*/ } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Tests the functionality of our color history hook', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();

    const square = screen.getByRole('display', { name: 'color-square' });
    expect(square.style.backgroundColor).toEqual('rgb(255, 0, 0)');
  });
});
