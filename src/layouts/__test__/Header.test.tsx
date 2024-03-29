import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import { Header } from '@/layouts';

describe('Header', () => {
  test('Clean input and then focus in', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const inputSearch = screen.getByTestId('search') as HTMLInputElement;
    // if input has value
    fireEvent.change(inputSearch, { target: { value: 'test' } });
    // then click icon clear to clean input
    const iconClear = screen.queryByTestId('clear') as HTMLElement;
    fireEvent.click(iconClear);
    // focus and clean input
    inputSearch.focus();
    fireEvent.change(inputSearch, { target: { value: '' } });
    // passing clean and focus input
    expect(inputSearch.value).toBe('');
    expect(inputSearch).toHaveFocus();
    // passing dom icon clear have not in document
    iconClear.remove();
    expect(iconClear).not.toBeInTheDocument();
  });
});
