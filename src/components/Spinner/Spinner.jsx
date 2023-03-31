import { BallTriangle } from 'react-loader-spinner';
import React from 'react';
import css from './Spinner.module.css';

export const Spinner = () => (
  <div className={css.loaderWrapper}>
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#3f51b5"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
      className={css.loader}
    />
  </div>
);
