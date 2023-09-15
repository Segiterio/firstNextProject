import React from 'react'
import { cardData } from '@/types/interfaces'
// props 

const Card = ({data}:{data:cardData}) => {
  return (
    <div className='p-2 desktop:p-4 border-2 rounded-xlPlus bg-white shadow-lg'>
        <div className={'mb-3 p-2 border w-fit rounded-full text-white ' + data.iconBgColor} ><data.Icon /></div>
        <div className='flex gap-2 justify-between flex-wrap items-end'>
            <div className=''>
                <span className='desktop:text-xs text-xxs whitespace-nowrap'>{data.title}</span>
                <p className='laptop:text-xl font-bold'>{data.value}</p>
            </div>
            <div className=''>
                 <div className='px-2 py-1 rounded-full text-xxs border bg-green-200 font-semibold text-green-400'>+{data.increment}%</div>
            </div>
        </div>
    </div>
  )
}

export default Card