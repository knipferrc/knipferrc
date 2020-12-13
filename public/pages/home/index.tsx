import { useState } from 'preact/hooks';
import { h, FunctionComponent } from 'preact';

import styles from './style.module.css';

export const Home: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <section class={styles.home}>
        <h1>Hi, Im Tyler</h1>
      </section>
    </>
  );
};
