import { render, RenderResult, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

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
