import { FunctionComponent } from 'preact';

import profilePic from '../../assets/images/profile.jpg';

import styles from './style.module.css';

export const Home: FunctionComponent = () => {
  return (
    <section class={styles.homeContainer}>
      <h1 class={styles.headerText}>Tyler Knipfer</h1>
      <img class={styles.profileImage} src={profilePic} />
    </section>
  );
};
