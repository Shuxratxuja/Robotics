import React from 'react'

const Statistic = ({num, title}) => {
  return (
         <div className=' w-[360px] h-[80px] xs:w-full sm:w-[205px] sm:h-[185px] xs:flex-wrap xs:h-[110px] md:w-[240px] md:h-[220px] md:flex-col lg:w-[280px] lg:h-[260px] xl:w-[340px] xl:h-[320px] bg-[#ffe000] shadow-[0_0_30px_#FFe000] rounded-3xl flex flex-col items-center justify-center mx-auto'>
            <p className=' text-black text-[24px] sm:text-[26px] md:text-[75px] lg:text-[100px] xl:text-[90px] items-center text-center font-bold'>{num}+</p>
            <p className=' text-black text-[16px] sm:text-[12px] md:text-[30px] text-center font-bold'>{title}</p>
        </div>
  )
}

export default Statistic