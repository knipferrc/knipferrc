import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: FunctionComponent = () => {
  return (
    <nav class={cx('nav')}>
      <a class={cx('nav-link')} href="/">
        Home
      </a>
      <a class={cx('nav-link')} href="/experience">
        Experience
      </a>
      <a class={cx('nav-link')} href="/projects">
        Projects
      </a>
      <a class={cx('nav-link')} href="/contact">
        Contact
      </a>
    </nav>
  );
};
