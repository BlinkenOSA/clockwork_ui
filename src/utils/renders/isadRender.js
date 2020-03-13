import React from 'react';
import style from './isadRender.module.css';

const isadRender = (data) => {
  return (
    <div className={style.isadField}>
      {
        data.map((d, idx) => {
          return (
            <div key={idx}>{d}</div>
          )
        })
      }
    </div>
  )
};

export default isadRender;