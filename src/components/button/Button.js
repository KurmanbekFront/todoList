import React from 'react';
import classes from './Button.module.css'
const Button = ({name, onClick, trueOrfalse}) => {
    
    
  return (
    <button onClick={onClick} className={`${name === "Add task" ? classes.add_task_btn : classes.other_btn}`} 
    disabled={trueOrfalse} >{name}</button>
  );
};

export default Button;