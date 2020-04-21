import React from 'react';
import style from './index.module.scss';
import { HomeButton } from '../../components/HomeButton';
export const Messon = () => (
  <>
    <HomeButton />
    <div className={style.container}>
      <div className={style.circle}>
        <div className={style.eye} />
        <div className={style.eye2} />
        <div className={style.nose} />
        <div className={style.hoppe1} />
        <div className={style.hoppe2} />
        <div className={style.mouth} />
        <div className={style.mayu} />
        <div className={style.mayu2} />
        <div className={style.sikaku} />
        <div className={style.sikaku2} />
        <div className={style.sikaku3} />
      </div>
    </div>
  </>
);
