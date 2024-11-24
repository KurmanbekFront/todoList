import React from 'react';
import classes from './Input.module.css'

const input = ({value, onChange}) => {
  return (
    <input type='text' placeholder='Enter a task' value={value} onChange={onChange}/>
  );
};

export default input;