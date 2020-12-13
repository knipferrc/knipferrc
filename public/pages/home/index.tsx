import { h, FunctionComponent } from 'preact';

import styles from './style.module.css';

export const Home: FunctionComponent = () => {
  return (
    <>
      <section class={styles.home}>
        <h1>Hi, Im Tyler</h1>
      </section>
    </>
  );
};
