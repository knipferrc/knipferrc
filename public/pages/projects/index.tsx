import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

const Projects: FunctionComponent = () => {
  return (
    <section class={cx('container')}>
      <h1 class={cx('heading')}>Projects</h1>
      <div class={cx('projects-container')}>
        <div class={cx('project-card')}>
          <h3 class={cx('subheader')}>
            Plate{' '}
            <a
              className={cx('app-link')}
              target="_blank"
              rel="noreferrer"
              href="https://plate-app.vercel.app"
            >
              https://plate-app.vercel.app
            </a>
          </h3>
          <p class={cx('description')}>
            Web app to keep track of things you need to do
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
