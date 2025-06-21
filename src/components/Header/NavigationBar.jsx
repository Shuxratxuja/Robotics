import LogoIcon from '@/assets/icons/Logo'
import { Link } from 'react-router-dom'
import { SelectBtn } from '../Select'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import BurgerMenu from '../burger'


const NavigationBar = () => {

 
  return (
   <div className=' lg:flex w-full border-t-[10px] border-t-[#ffe000] border-b-[10px] border-b-[#ffe000] bg-black '>
       <div className='flex items-center lg:justify-around container mx-auto  mt-[23px] mb-[23px] w-full sm:justify-between '>
        <LogoIcon />
        <nav className='lg:flex gap-10 ml-[300px] items-center hidden '>
            <Link className='text-white font-normal text-2xl leading-[100%]'>Главная</Link>
            <Link className='text-white font-normal text-2xl leading-[100%]'>О нас</Link>
            <SelectBtn/>
            <Link className='text-white font-normal text-2xl leading-[100%]'>Контакты</Link>
            <button className=' bg-[#FFE000]  shadow-[0_0_10px_0_#F0D625,0_0_15px_0_#F0D625,0_0_20px_0_#F0D625] text-black font-bold text-2xl leading-[100%] pt-4 pb-4 pl-[54px] pr-[54px] rounded-[7px] cursor-pointer hover:bg-[#ffe100c8] transition-all duration-300'><Link>Позвонить</Link></button>
        </nav>
            <div className='flex  items-center gap-4'>
              <Tabs defaultValue='ru' className='ml-15'>
              <TabsList className='bg-transparent flex gap-4'>
                <TabsTrigger
                  value='uz'
                  className='
                    text-[#ffe000] bg-black 
                    pt-7 pb-7 px-8 font-normal text-[21.66px] leading-[100%] rounded-[14px]
                    data-[state=active]:bg-[#ffe000] data-[state=active]:text-white
                  '
                >
                  UZ
                </TabsTrigger>
                <TabsTrigger
                  value='ru'
                  className='
                    text-[#ffe000] bg-black 
                    pt-7 pb-7 px-8 font-normal text-[21.66px] leading-[100%] rounded-[14px]
                    data-[state=active]:bg-[#ffe000] data-[state=active]:text-white
                  '
                >
                  RU
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <BurgerMenu/>
            </div>
    </div>
   </div>
  )
}

export default NavigationBar


