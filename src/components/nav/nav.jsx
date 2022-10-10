import React, { useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import Stays from './../../files/stays.json'
import { BsSearch } from "react-icons/bs";

function Nav() {
  const [pesq, setPesq] = useState(0)
  const [pesq1, setPesq1] = useState(0)
  const [guest, setGuests] = useState(false)
  function G() {
    setGuests(!guest)
  }
  function increment(){
    setPesq(pesq+1)
  }
  function decrement(){
    setPesq(pesq-1)
  }
  function increment1(){
    setPesq1(pesq1+1)
  }
  function decrement1(){
    setPesq1(pesq1-1)
  }

  const paises = Stays.map((e) => {
    return (
      <div className='mb-3 flex flex-row items-center pl-8 text-lg text-slate-500'>
        <MdLocationOn />
        <label className='ml-3'>{e.city}, {e.country}</label>
      </div>
    )
  })

  return (
    <div className='bg-white p-3 absolute w-full m-[0px] h-screen overflow-scroll'>
      <span className='font-bold '>Edit your search</span>
      <div className='shadow-md mt-5 rounded-2xl'>
        <div onClick={G} className='flex flex-col border p-2 pl-5 rounded-tl-2xl rounded-tr-2xl'>
          <span className='font-semibold'>Location</span>
          <label>Helsinki, Finland</label>
        </div>
        <div onClick={G} className='mb-7 flex flex-col border p-2 pl-5 pl-3 rounded-bl-2xl rounded-br-2xl'>
          <span className='font-semibold'>Guests</span>
          <label className='text-slate-300'>{pesq + pesq1} guests</label>
        </div>
      </div>

      {guest ?
        // 
        <div>{paises}</div>
        :
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='flex flex-col w-fit'>
            <span className='font-semibold'>Adults</span>
            <span className='text-slate-400'>Ages 13 or above</span>

            <div className='text-xl my-2'>
              <span onClick={decrement}  className='border border-slate-500 px-2 rounded-md'>-</span>
              <label className='mx-7'>{pesq}</label>
              <span onClick={increment} className='border border-slate-500 px-2 rounded-md'>+</span>
            </div>
          </div>
          <div className='flex flex-col w-fit'>
            <span className='font-semibold'>Children</span>
            <span className='text-slate-400'>Ages 0-12</span>

            <div className='text-xl my-2'>
              <span onClick={decrement1}  className='border border-slate-500 px-2 rounded-md'>-</span>
              <label className='mx-7'>{pesq1}</label>
              <span onClick={increment1}   className='border border-slate-500 px-2 rounded-md'>+</span>
            </div>
          </div>
        </div>}
      <div className='w-full flex justify-center'>
        <button className='relative bg-red-500 bottom-5 mt-7 text-white flex flex-row items-center p-3 rounded-lg'>
          <BsSearch className='mr-2' />
          Search
        </button>
      </div>
    </div>
  );
}
Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
