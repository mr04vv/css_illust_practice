import React from 'react';
import style from './index.module.scss';
import { HomeButton } from '../../components/HomeButton';
export const Cat = () => (
  <>
    <HomeButton />
    <div className={style.container}>
      <div className={style.cat__ear_wrap}>
        <div className={style.cat__ear_inner}></div>
      </div>
      <div className={style.cat__head}>
        <div className={style.cat__hair}></div>
        <div className={style.cat__eye}>
          <div className={style.cat__eye_inner}></div>
        </div>
        <div className={style.cat__nose}></div>
        <div className={style.cat__cheek}></div>
        <div className={style.cat__mouth}></div>
      </div>
      <div className={style.cat__beard1}></div>
      <div className={style.cat__beard2}></div>
      <div className={style.cat__beard3}></div>
    </div>
  </>
);
