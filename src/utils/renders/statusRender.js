import React from 'react';
import {Badge} from "antd";

const statusRender = (data) => {
  switch (data) {
    case 'Draft':
      return (
        <Badge count={'Draft'} style={{ backgroundColor: '#fa8c16', borderRadius: '3px', fontSize: '0.8em' }} />
      );
    case 'Final':
      return (
        <Badge count={'Final'} style={{ backgroundColor: '#376e18', borderRadius: '3px', fontSize: '0.8em' }} />
      );
    default:
      break;
  }
};

export default statusRender;