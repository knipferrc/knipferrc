import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import profilePic from '../../assets/images/profile.jpg';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Home: FunctionComponent = () => {
  return (
    <>
      <video
        class={cx('background')}
        playsInline
        autoPlay
        muted
        loop
        poster="https://media.giphy.com/media/3o75248xZ4uXdJbHbi/giphy.mp4"
        id="bgvid"
      >
        <source
          src="https://media.giphy.com/media/3o75248xZ4uXdJbHbi/giphy.mp4"
          type="video/mp4"
        />
      </video>
      <section class={cx('container')}>
        <h1 class={cx('header-text')}>Tyler Knipfer</h1>
        <img class={cx('profile-image')} src={profilePic} />
        <p class={cx('intro-text')}>
          Hi, I'm Tyler, a Frontend Engineer from Cincinnati
        </p>
      </section>
    </>
  );
};
