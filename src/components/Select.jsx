import React, { useRef, useState } from 'react'

export const SelectBtn = () => {
    const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Курсы')

  const options = ['Работотехника', 'Английский', 'Живопись для детей', 'Живопись для взрослых', 'Шахмат']

  const handleSelect = (option) => {
    setSelected(option)
    setIsOpen(false)
  }
  return (
   <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='select flex items-center gap-1 justify-between w-full h-11 pl-[22px] pr-5 border border-[#F0D625] text-[#F0D625] rounded-3xl hover:bg-[#272415] cursor-pointer'>
        <span className='max-w-[150px] line-clamp-1'>{selected}</span>
        <svg width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 12L0.00480938 0.75L12.9952 0.75L6.5 12Z" fill="#F0D625" />
        </svg>
      </button>
      
      {isOpen && (
        <div className='absolute z-9999  w-[338px] mt-2 flex flex-col gap-2 rounded-4xl p-6 pt-0 bg-black '>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className='flex items-center  w-full h-11 pl-[22px] bg-black border border-[#F0D625] text-[20px] text-[#F0D625] rounded-3xl hover:bg-[#272415] cursor-pointer'>
              {option}
            </button>
          ))}
        </div>
      )}
   </div>
  )
}