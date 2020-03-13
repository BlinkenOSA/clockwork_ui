import React from 'react';

const urlRender = (data) => {
  return(
    <a href={data} target={'_new'}>{data}</a>
  )
};

export default urlRender;