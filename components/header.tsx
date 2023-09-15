import React from 'react'
import {BiBell} from "react-icons/bi"
import Image from 'next/image'
import profileImage from "../public/download.jpg"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineSearch} from "react-icons/ai"


const Header = ({setShowSideBar,showSideBar}:{setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>,
showSideBar:boolean}) => {
  return (
    <header className='flex justify-between items-center flex-wrap'>
        <div className='text-2xl font-bold flex items-center gap-2 justify-between tablet:w-fit w-full'>
            <GiHamburgerMenu className='block laptop:hidden border hover:cursor-pointer' onClick={() => setShowSideBar(true)}/>
             <div>Dashboard</div>
            </div>
        <div className='flex gap-4 items-center w-full tablet:w-fit tablet:mt-0 mt-2'>
            <div className='relative  tablet:text-sm w-full'>
              <input type="text" name="" id="" className='w-full focus:outline-none px-2 py-1 relative rounded-lgPlus' placeholder='Search...' />
              <AiOutlineSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-[#B0B0B0]" />
            </div>
             <BiBell />
             <Image src={profileImage} alt="$" className='rounded-full object-cover aspect-square h-6 w-6'/>
        </div>
    </header>
  )
}

export default Header