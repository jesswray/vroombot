import React from 'react';
import classnames from 'classnames';

const Button = ({ text, key, children, active, ...props }) => (
  <button className={classnames('Button', { 'Button--active': active })} key={key} {...props}>
    {children}
  </button>
);

export default Button;
