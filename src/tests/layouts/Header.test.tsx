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

    inputSearch.focus();
    fireEvent.change(inputSearch, { target: { value: '' } });

    expect(inputSearch.value).toBe('');
    expect(inputSearch).toHaveFocus();
  });
});
