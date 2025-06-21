import GlavniyIcon from '@/assets/icons/GlavniyIcon';
import { Humans } from '@/assets/icons/Humans';
import { Message } from '@/assets/icons/Message';
import Pen from '@/assets/icons/Pen';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden z-50"> 
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-[60px] h-[60px] bg-black flex items-center justify-center transition-all duration-300"
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute h-[2px] w-6 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-3' : 'top-1'
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white transition-opacity duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'top-3'
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? '-rotate-45 bottom-3' : 'bottom-1'
            }`}
          />
        </div>
      </button>

      <div
        className={`
          absolute top-[70px] left-0 bg-black text-white p-5 
          w-full h-[364px] mt-26 mr-12
          transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
        `}
      >
        <Link className='flex items-center p-4 border-b border-[#191919]'>
          <GlavniyIcon />
          <p className='font-normal text-2xl leading-[100%] text-white ml-3'>Главная</p>
        </Link>
        <Link className='flex items-center p-4 border-b border-[#191919]'>
          <Pen />
          <p className='font-normal text-2xl leading-[100%] text-white ml-3'>О нас</p>
        </Link>
        <Link className='flex items-center p-4 border-b border-[#191919]'>
          <Message />
          <p className='font-normal text-2xl leading-[100%] text-white ml-3'>Курсы</p>
        </Link>
        <Link className='flex items-center p-4 border-b border-[#191919]'>
          <Humans />
          <p className='font-normal text-2xl leading-[100%] text-white ml-3'>Контакты</p>
        </Link>
      </div>
    </div>
  );
};
export default BurgerMenu;
