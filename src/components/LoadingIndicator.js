import React from 'react';

const LoadingIndicator = () => (
  <div className='LoadingIndicator'>
    <img
      src='/loading.gif'
      alt='Loading ...'
    />
    <div className="sr-only">Loading ...</div>
  </div>
);

export default LoadingIndicator;
