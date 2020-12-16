import { FunctionComponent } from 'preact';

import { DefaultLayout } from '../../layouts/default';
import profilePic from '../../assets/images/profile.jpg';

import styles from './style.module.css';

export const Home: FunctionComponent = () => {
  return (
    <DefaultLayout>
      <section class={styles.homeContainer}>
        <h1 class={styles.headerText}>Tyler Knipfer</h1>
        <img
          class={styles.profileImage}
          src={profilePic}
          height="300"
          width="300"
        />
      </section>
    </DefaultLayout>
  );
};
