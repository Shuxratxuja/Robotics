import React, { useState } from 'react';
import { YMaps, Map as YandexMap } from '@pbe/react-yandex-maps';
import { Link } from 'react-router-dom';
import ClockIcon from '@/assets/icons/ClockIcon';
import LocationIcon from '@/assets/icons/LocationIcon';
import PhoneIcon from '@/assets/icons/PhoneIcon';

const branches = {
  c4: {
    name: 'Филиал Ц4',
    coordinates: [41.2995, 69.2401],
  },
  beruni: {
    name: 'Филиал Беруни',
    coordinates: [41.3275, 69.1983],
  },
};

const MyMap = () => {
  const [center, setCenter] = useState(branches.c4.coordinates)
  const [activeBranch, setActiveBranch] = useState('c4')

  return (
    <div className='pb-4'>
      <div className='container mx-auto max-w-7xl flex items-center justify-center sm:justify-start'>
        <button
          onClick={() => {
            setCenter(branches.c4.coordinates);
            setActiveBranch('c4');
          }}
          className={`uppercase rounded-xl flex items-center cursor-pointer font-tektur py-5 sm:py-[20px] h-[50px] sm:h-[78px] px-9 sm:px-[64px] text-[16px] sm:text-[30px] transition-all duration-300
            ${activeBranch === 'c4'
              ? 'bg-[#ffe000] text-black shadow-[0_0_10px_0_#F0D625,0_0_15px_0_#F0D625,0_0_20px_0_#F0D625]'
              : 'bg-white text-black'}`}
        >
          {branches.c4.name}
        </button>

        <button
          onClick={() => {
            setCenter(branches.beruni.coordinates);
            setActiveBranch('beruni');
          }}
          className={`uppercase rounded-xl items-center flex cursor-pointer font-tektur py-5 sm:py-[20px] h-[50px] sm:h-[78px] px-9 sm:px-[64px] text-[16px] sm:text-[30px] ml-[20px] sm:ml-[60px] transition-all duration-300
            ${activeBranch === 'beruni'
              ? 'bg-[#ffe000] text-black shadow-[0_0_10px_0_#F0D625,0_0_15px_0_#F0D625,0_0_20px_0_#F0D625]'
              : 'bg-white text-black'}`}
        >
          {branches.beruni.name}
        </button>
      </div>
      <div className='container mx-auto max-w-7xl my-[50px] flex items-center justify-center lg:justify-between gap-y-5 flex-wrap'>
        <div className='flex items-center gap-x-5 w-[300px] text-white'>
          <PhoneIcon />
          <Link to="">Адрес Орьентир</Link>
        </div>
        <div className='flex items-center gap-x-5 w-[300px] text-white'>
          <LocationIcon />
          <Link to=''>График работы</Link>
        </div>
        <div className='flex items-center gap-x-5 w-[300px] text-white'>
          <ClockIcon />
          <Link to=''>Номера телефонов</Link>
        </div>
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <YMaps>
          <YandexMap
            state={{ center: center, zoom: 16 }}
            width="100%"
            height="100%"
          />
        </YMaps>
      </div>
    </div>
  );
};

export default MyMap;
