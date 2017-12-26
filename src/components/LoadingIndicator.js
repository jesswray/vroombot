import React from 'react';
import spinner from './loading.gif';

const LoadingIndicator = () => (
  <div className='LoadingIndicator'>
    <img
      src={spinner}
      alt='Loading ...'
    />
    <div className="sr-only">Loading ...</div>
  </div>
);

export default LoadingIndicator;
