import { FunctionComponent } from 'preact';

import styles from './style.module.css';

export const Header: FunctionComponent = () => {
  return (
    <nav class={styles.nav}>
      <ul class={styles.navItems}>
        <li>
          <a class={styles.navLink} href="/">
            Home
          </a>
        </li>
        <li>
          <a class={styles.navLink} href="/experience">
            Experience
          </a>
        </li>
        <li>
          <a class={styles.navLink} href="/projects">
            Projects
          </a>
        </li>
        <li>
          <a class={styles.navLink} href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
