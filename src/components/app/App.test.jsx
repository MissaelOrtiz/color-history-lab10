import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Tests the functionality of our color history hook', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();

    const square = screen.getByRole('display', { name: 'color-square' });
    expect(square).toHaveStyle({ 'background-color': 'rgb(255, 0, 0)' });

    const colorPicker = screen.getByRole('colorbox', { name: 'color-picker' });
    fireEvent.change(colorPicker, 'rgb(0, 0, 255)');
    waitFor(() => {
      expect(square).toHaveStyle({ 'background-color': 'rgb(0, 0, 255)' });
    });

    fireEvent.change(colorPicker, 'rbg(0, 255, 0)');
    waitFor(() => {
      expect(square).toHaveStyle({ 'background-color': 'rgb(0, 255, 0)' });
    });
  });
});
