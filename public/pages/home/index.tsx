import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import profilePic from '../../assets/images/profile.jpg';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Home: FunctionComponent = () => {
  return (
    <section class={cx('container')}>
      <h1 class={cx('header-text')}>Tyler Knipfer</h1>
      <img class={cx('profile-image')} src={profilePic} />
    </section>
  );
};
