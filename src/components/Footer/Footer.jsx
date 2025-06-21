import InstagramIcon from '@/assets/icons/InstagramIcon'
import LogoIcon from '@/assets/icons/Logo'
import TelegramIcon from '@/assets/icons/TelegramIcon'
import YoutubeIcon from '@/assets/icons/YoutubeIcon'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container mx-auto max-w-7xl flex flex-col sm:flex-row py-6 gap-y-8 px-4 lg:px-0 relative'>
        <div className='flex flex-col items-start sm:flex-col'>
            <div className='background-color:black;border-radius:50%;width:100px;height:100px;display:flex;align-items:center;justify-content:center;margin-bottom:20px'>
                <LogoIcon/>
            </div>
            <p className=' text-black font-bold text-[14px] max-w-[248px]'>SLOGAN lLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex gap-5 mt-4'>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity'>
                    <TelegramIcon/>
                </Link>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity'>
                    <YoutubeIcon/>
                </Link>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity'>
                    <InstagramIcon/>
                </Link>
            </div>
        </div>
        <div className='flex flex-col ml-0 lg:ml-[148px]'>
            <p className=' text-black font-bold text-[26px]'>Курсы</p>
            <div className='mt-4 space-y-2 flex flex-col'>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity __variable_22a8f4 font-tektur text-black text-[20px]'>
                    Работотехника
                </Link>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity __variable_22a8f4 font-tektur text-black text-[20px]'>
                    Английский для взрослых
                </Link>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity __variable_22a8f4 font-tektur text-black text-[20px]'>
                    Английский для детей
                </Link>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity __variable_22a8f4 font-tektur text-black text-[20px]'>
                    Шахмат
                </Link>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity __variable_22a8f4 font-tektur text-black text-[20px]'>
                    Живопись
                </Link>
            </div>
        </div>
        <div className='flex flex-col ml-0 lg:ml-[148px]'>
            <p className='__variable_22a8f4 font-tektur text-black font-bold text-[26px]'>Контакты</p>
            <div className='mt-4 space-y-2 flex flex-col'>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity __variable_22a8f4 font-tektur text-black text-[20px]'>
                    Телеграм
                </Link>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity __variable_22a8f4 font-tektur text-black text-[20px]'>
                    Инстаграм
                </Link>
                <Link className='relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity __variable_22a8f4 font-tektur text-black text-[20px]'>
                    Ютюб
                </Link>
            </div>
        </div>
        <p className='font-semibold text-sm leading-[100%] absolute bottom-[-10px]'>Ideallux.com © 2000-2024, All Rights Reserved</p>
    </div>
  )
}

export default Footer