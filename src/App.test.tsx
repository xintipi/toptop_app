import { describe, expect, it } from 'vitest';
import { render, waitFor, RenderResult } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/App';

describe('App', () => {
  let result: RenderResult<typeof import('@testing-library/dom/types/queries')>;
  it('Renders correctly', async () => {
    await waitFor(() => {
      result = render(
        <Router>
          <App />
        </Router>,
      );
    });
    expect(result).toMatchSnapshot();
  });
});
