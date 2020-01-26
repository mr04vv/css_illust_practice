import React from 'react';
import style from './index.module.scss';
import { HomeButton } from '../../components/HomeButton';
export const Practice = () => (
  <>
    <HomeButton />
    <div className={style.container}>
      <div className={style.cup}>
        <div className={style.cup__top}></div>
        <div className={style.straw}></div>
        <div className={style.straw__bottom}></div>
        <div className={style.cup__inner_wrap}>
          <div className={style.cup__inner_top}></div>
          <div className={style.cup__inner}>
            <div className={`${style.tapioka} ${style.tsubu_1}`}></div>
            <div className={`${style.tapioka} ${style.tsubu_2}`}></div>
            <div className={`${style.tapioka} ${style.tsubu_3}`}></div>
            <div className={`${style.tapioka} ${style.tsubu_4}`}></div>
            <div className={`${style.tapioka} ${style.tsubu_5}`}></div>
            <div className={`${style.tapioka} ${style.tsubu_6}`}></div>
            <div className={`${style.tapioka} ${style.tsubu_7}`}></div>
            <div className={`${style.tapioka} ${style.tsubu_8}`}></div>
          </div>
          <div className={style.cup__inner_bottom}></div>
        </div>
        <div className={style.cup__bottom}></div>
      </div>
    </div>
  </>
);
