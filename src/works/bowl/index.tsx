import React from 'react';
import styles from './index.module.scss';
import { HomeButton } from '../../components/HomeButton';

export const Bowl = () => (
  <>
    <HomeButton />
    <div className={styles.container}>
      <div className={styles.bowl}>
        <div className={styles.bowl__top} />
        <div className={styles.bowl__bottom} />
      </div>
    </div>
  </>
);
