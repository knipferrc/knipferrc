import { FunctionComponent } from 'preact';
import classnames from 'classnames/bind';

import styles from './style.module.css';

const cx = classnames.bind(styles);

const Experience: FunctionComponent = () => {
  return (
    <section class={cx('container')}>
      <h1 class={cx('heading')}>Work Experience</h1>
      <div class={cx('jobs-container')}>
        <div class={cx('job-card')}>
          <h3 class={cx('subheader')}>Ascendum Solutions (Cincinnati, OH)</h3>
          <p class={cx('description')}>
            Engineering Manager October 2019 - Present
          </p>
        </div>
        <div class={cx('job-card')}>
          <h3 class={cx('subheader')}>Ascendum Solutions (Cincinnati, OH)</h3>
          <p class={cx('description')}>
            Sr. Software Engineer February 2018 - October 2019
          </p>
        </div>
        <div class={cx('job-card')}>
          <h3 class={cx('subheader')}>Millipore Sigma (St. Louis, MO)</h3>
          <p class={cx('description')}>
            Frontend Developer June 2016 - Janurary 2018
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
