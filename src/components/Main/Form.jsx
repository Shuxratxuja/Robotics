import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Select, SelectItem, SelectTrigger,SelectContent, SelectGroup, SelectValue } from '../ui/select'

const Form = () => {

    const [getName, setName] = useState()
    const [getEmail, setEmail] = useState()
    const [getAge, setAge] = useState()
    const [getCat, setCat] = useState()

    const view = (e) => {
        e.preventDefault()
        console.log('Name:',getName,'Number:', getEmail,'Age:',getAge,  'Category:', getCat);
    }

    const selectCategory = (e) => {
        setCat(e);
    }   

  return (
        <form onSubmit={view} className='container mx-auto max-w-7xl my-[50px] flex flex-col gap-3 p-3 lg:flex lg:flex-row lg:justify-between md:grid md:grid-cols-3 lg:items-center '>
            <Input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Ваше имя" className='text-white lg:w-[256px]'/>
            <Input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Номер телефона" className='text-white lg:w-[256px]'/>
            <Input onChange={(e)=> setAge(e.target.value)} type="text" placeholder="Возраст" className='text-white lg:w-[256px]'/>
            <Select onValueChange={selectCategory} className='text-gray-500 '>
                <SelectTrigger className='text-gray-500 w-full flex flex-wrap lg:w-[256px]'>
                    <SelectValue placeholder='Выберете курс'/>
                </SelectTrigger>
                <SelectContent className='text-white bg-black'>
                    <SelectGroup className='text-gray-500' >
                        <SelectItem className='text-gray-500' value='Работотехника'>Работотехника</SelectItem>
                        <SelectItem className='text-gray-500' value='Живопись для взрослых'>Живопись для взрослых</SelectItem>
                        <SelectItem className='text-gray-500' value='Живопись для детей'>Живопись для детей</SelectItem>
                        <SelectItem className='text-gray-500' value='Шахмат'>Шахмат</SelectItem>
                        <SelectItem className='text-gray-500' value='Английский'>Английский</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <button type='submit' className='z-0 group relative w-full inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.8)] uppercase rounded-md  shadow-[0_0_30px_#FFe000] cursor-pointer transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover sm:w-[240px]  font-bold text-black bg-[#FFE000] h-[50px] text-[24px]'>получить</button>
        </form>
  )
}

export default Form