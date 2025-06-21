import React from 'react'

const Robot = () => {
  return (
    <div className="relative z-20 w-full h-[125px] md:h-[390px] justify-center lg:h-[590px] sm:h-[300px] xxs:h-72 xs:h-64 flex main-container bg-[url('/Background.png')] bg-cover bg-center sm:bg-hidden bg-no-repeat min-h-screen bg-black">
      <div className="container z-50 flex items-center justify-between h-full px-6 mx-auto max-w-7xl ">
          <div className='bg-white sm:w-[300px] rounded-4xl md:w-[650px] py-[15px] px-[15px] md:py-[28px] lg:py-[38px] md:px-[30px] lg:px-[50px] flex flex-col items-start card'>
              <p className='text-[#000] text-[22px] md:text-[44px] lg:text-[80px] font-bold'> JustRobotics</p>
              <p className=' text-[#000] text-[16px] md:text-[28px] lg:text-[44px] font-bold'>твой проводник в мир технологий и искусства</p>
              <p className='text-[#000] text-[14px] my-4 md:text-[20px] lg:text-[30px]'>получите бесплатное первое занятие</p>
              <button className='z-0 group rounded-[8px] cursor-pointer relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-black text-[#FFE001] text-[16px] btn'>Перейти к курсам</button>
          </div>
          <img src="/RobotImage.png" alt="robot" className=' md:w-[250px] hidden md:block md:h-[250px] lg:w-[450px] sm:w-[250px] w-[250px] h-[250px] lg:h-[450px] xl:w-[500px] xl:h-[600px] object-contain' />
      </div>
    </div>
  )
}

export default Robot