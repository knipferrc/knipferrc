import hydrate from 'preact-iso/hydrate';
import { LocationProvider, Router } from 'preact-iso/router';
import { ErrorBoundary } from 'preact-iso/lazy';
import { FunctionComponent } from 'preact';

import { Home } from './pages/home';
import { NotFound } from './pages/_404.js';

export const App: FunctionComponent = () => {
  return (
    <LocationProvider>
      <div class="app">
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
};

hydrate(<App />);

export async function prerender(data: any) {
  const { default: prerender } = await import('preact-iso/prerender');

  return await prerender(<App {...data} />);
}
