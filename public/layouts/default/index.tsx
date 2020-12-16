import { FunctionComponent } from 'preact';

import styles from './style.module.css';

export const DefaultLayout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <nav class={styles.nav}>
        <ul class={styles.navItems}>
          <li>
            <a class={styles.navLink} href="/">
              Home
            </a>
          </li>
          <li>
            <a class={styles.navLink} href="/">
              Experience
            </a>
          </li>
          <li>
            <a class={styles.navLink} href="/">
              Projects
            </a>
          </li>
          <li>
            <a class={styles.navLink} href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};
