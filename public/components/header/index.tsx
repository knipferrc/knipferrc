import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';
import { useLoc } from 'preact-iso/router';

import { RoutePaths } from '../../constants/routes';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Header: FunctionComponent = () => {
  const { url } = useLoc();

  return (
    <nav class={cx('nav')}>
      <a
        class={cx('nav-link', { active: url === RoutePaths.HOME })}
        href={RoutePaths.HOME}
      >
        Home
      </a>
      <div class={cx('separator')} />
      <a
        class={cx('nav-link', { active: url === RoutePaths.EXPERIENCE })}
        href={RoutePaths.EXPERIENCE}
      >
        Experience
      </a>
      <div class={cx('separator')} />
      <a
        class={cx('nav-link', { active: url === RoutePaths.PROJECTS })}
        href={RoutePaths.PROJECTS}
      >
        Projects
      </a>
      <div class={cx('separator')} />
      <a
        class={cx('nav-link', { active: url === RoutePaths.CONTACT })}
        href={RoutePaths.CONTACT}
      >
        Contact
      </a>
    </nav>
  );
};
