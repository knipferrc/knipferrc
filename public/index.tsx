import hydrate from 'preact-iso/hydrate';
import { LocationProvider, Router } from 'preact-iso/router';
import lazy, { ErrorBoundary } from 'preact-iso/lazy';
import { FunctionComponent } from 'preact';

import { Home } from './pages/home';
import { NotFound } from './pages/_404.js';
import { Header } from './components/header';
import { Video } from './components/video';

const Contact = lazy(() => import('./pages/contact'));
const Experience = lazy(() => import('./pages/experience'));
const Projects = lazy(() => import('./pages/projects'));

export const App: FunctionComponent = () => {
  return (
    <LocationProvider>
      <div class="app">
        <Header />
        <Video />
        <ErrorBoundary>
          <Router>
            <Home path="/" />
            <Contact path="/contact" />
            <Experience path="/experience" />
            <Projects path="/projects" />
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
