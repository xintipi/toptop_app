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
    popperProfile = container.querySelector('[data-tippy="profile"]');
  });

  test('Not show popup of profile at the start', () => {
    expect(popperProfile).not.toBeInTheDocument();
  });

  test('Click out side popup of profile to close popup', () => {
    const body = document.querySelector('body') as Element;
    fireEvent.click(body);
    expect(popperProfile).not.toBeInTheDocument();
  });

  test('Clean input and then focus in', () => {
    const { queryByPlaceholderText } = wrapper;
    const inputNode = queryByPlaceholderText(
      'Search accounts and videos',
    ) as HTMLInputElement;

    inputNode.focus();
    fireEvent.change(inputNode, { target: { value: '' } });

    expect(inputNode.value).toBe('');
    expect(inputNode).toHaveFocus();
  });
});
