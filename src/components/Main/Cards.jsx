import React from 'react'

const Cards = ({img, title}) => {
  return (
        <div className='flex flex-col justify-between md:w-[551px] min-w-[300px] rounded-4xl bg-[#F0D625] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[500px] w-[250px] px-[15px] py-[15px]  md:px-[51px] md:py-[43px]'>
            <img src={img} alt="" />
            <p className=' text-black md:text-[#000] text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-start font-bold my-[21px]'>{title}</p>
            <div className='flex items-end justify-end mb-0'>
                <button className='z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover mb-0 bg-black rounded-full text-white text-end sm:flex'>Подробнее о кусе </button>
            </div>
        </div>
  )
}

export default Cards