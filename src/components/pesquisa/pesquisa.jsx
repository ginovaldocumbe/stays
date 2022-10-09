import React from 'react';
import { BsSearch } from "react-icons/bs";

function Pesquisa(props) {
  return (
    <div className="flex justify-center md:justify-end md:pr-5">
      <div className='flex flex-row mt-5 w-fit h-16 justify-center rounded-2xl  shadow-md '>
        <div className=' border flex items-center px-2 rounded-l-2xl'>
          <label>Nome Pais</label>
        </div>
        <div className='border flex px-2 items-center'>
          <input placeholder='Add guests' />
        </div>
        <div className='border flex items-center px-2 rounded-r-2xl'>
          <BsSearch className='text-red-800 text-lg' />
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
