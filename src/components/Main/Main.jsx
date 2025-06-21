import React from 'react'
import Cards from './Cards'
import Reviews from './Reviews'
import Form from './Form'
import MyMap from './Map'

const Main = () => {
  return (
    <div className="container mx-auto max-w-7xl">
        <p className=' text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold'>Авторские кусы от JustRobotics</p>
        <div className='flex md:flex-wrap items-center gap-[20px] sm:justify-center md:gap-[58px] my-10 overflow-x-auto scrollbar-hide'>
            <Cards img='/card-img-1.png' title='Робототехника'/>
            <Cards img='/card-img-2.png' title='Живопись для детей'/>
            <Cards img='/card-img-3.png' title='Живопись для взрослых'/>
            <Cards img='/card-img-4.png' title='Английский язык для детей'/>
            <Cards img='/card-img-5.png' title='Шахмат'/>
        </div>
        <Reviews/>
        <p className=' uppercase text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold'>получите бесплатный первый урок</p>
        <Form/>
        <MyMap/>
    </div>
  )
}

export default Main