import React from 'react';
import './index.scss';

export const Practice = () => (
  <>
    <div className="cup">
      <div className="cup__top"></div>
      <div className="straw"></div>
      <div className="straw--bottom"></div>
      <div className="cup__inner-wrap">
        <div className="cup__inner-top"></div>
        <div className="cup__inner">
          <div className="tapioka tsubu-1"></div>
          <div className="tapioka tsubu-2"></div>
          <div className="tapioka tsubu-3"></div>
          <div className="tapioka tsubu-4"></div>
          <div className="tapioka tsubu-5"></div>
          <div className="tapioka tsubu-6"></div>
          <div className="tapioka tsubu-7"></div>
          <div className="tapioka tsubu-8"></div>
        </div>
        <div className="cup__inner-bottom"></div>
      </div>
      <div className="cup__bottom"></div>
    </div>
  </>
);
