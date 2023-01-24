import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={150}
      width={150}
      strokeWidth={1}
      strokeWidthSecondary={1}
      color="green"
      secondaryColor="white"
      wrapperStyle={{
        position: 'fixed',
        bottom: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '100',
      }}
    />
  );
}
