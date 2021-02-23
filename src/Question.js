import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({title, info}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{info}</p>
    </div>
  )
  
};

export default Question;