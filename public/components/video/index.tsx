import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Video: FunctionComponent = () => {
  return (
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
  );
};
