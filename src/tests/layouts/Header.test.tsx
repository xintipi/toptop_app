import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, test } from 'vitest';

import { Header } from '@/layouts';

describe('Header layout', () => {
  let wrapper: RenderResult<typeof import('@testing-library/dom/types/queries')>;
  let container: HTMLElement;
  let popperProfile: Element | null;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    container = wrapper.container;
    popperProfile = container.querySelector('[data-testid="profile"]');
  });

  test('Not show popup of profile at the start', async () => {
    expect(popperProfile).not.toBeInTheDocument();
  });

  test('Click out side popup of profile to close popup', () => {
    const body = document.querySelector('body') as Element;
    fireEvent.click(body);
    popperProfile?.remove();
    expect(popperProfile).not.toBeInTheDocument();
  });

  test('Clean input and then focus in', () => {
    const inputSearch = screen.getByTestId('search') as HTMLInputElement;

    inputSearch.focus();
    fireEvent.change(inputSearch, { target: { value: '' } });

    expect(inputSearch.value).toBe('');
    expect(inputSearch).toHaveFocus();
  });
});
