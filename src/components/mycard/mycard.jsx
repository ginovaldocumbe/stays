import React from 'react';
import { useState } from 'react';
import { BsFillStarFill } from "react-icons/bs";


function Mycard(props) {
  const [sup, setSup] = useState("Testertfghvjb");
  function superH() {
    setSup(props.sp);
  }


  return (
    <div onLoad={superH} className='mt-5 flex flex-col'>
      <div className='w-full h-80 rounded-3xl'>
        <img className='w-full h-full rounded-3xl' src={props.foto} />
      </div>
      <div className='mt-2 flex justify-between'>
        {sup && (
          <button className='border border-black p-1 text-xs rounded-xl'> SUPER HOST</button>
        )}
        <span>{props.tipo} {props.camas} beds</span>
        <div className='flex flex-row items-center'>
          <BsFillStarFill className='text-red-800' />
          <span className='ml-1'>{props.ava}</span>
        </div>
      </div>
      <div className='mt-2 ml-1'>
        <span className="font-bold">{props.titulo}</span>
      </div>
    </div >
  );
}
export default Mycard;
