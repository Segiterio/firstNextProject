import React, { Fragment } from 'react'
import {LuPieChart,LuTags,LuCalendarClock,LuUser,LuSettings} from "react-icons/lu"
import { navigationList } from '@/types/interfaces'


export const menuItems:navigationList[] = [
    {  id:1,
       icon:LuPieChart,
       value:"Dashboard",
       selected:true,
    },
    { id:2,
       icon:LuTags,
       value:"Transactions",
       selected:false,
    },
    { id:3,
       icon:LuCalendarClock,
       value:"Schedules",
       selected:false,
    },
    { id:4,
       icon:LuUser,
       value:"Users",
       selected:false,
    },
    { id:5,
       icon:LuSettings,
       value:"Settings",
       selected:false,
    },
 ]
const Sidebar = () => {
  return (
    <div className='max-w-[280px] p-4 desktop:p-8 transition-all duration-300 rounded-xlPlus text-white bg-gradient-to-r from-[#4285F4] to-[#3C83F9] border h-full flex-col justify-between flex'>
        
        <div>
         <div className='text-3xl desktop:text-4xl font-bold pb-5'>
            Board.
         </div>
       <div className="">{
            menuItems.map((item) => (<div key={item.id} className='flex items-center gap-2 desktop:text-lg mt-5 hover:cursor-pointer'>
                <item.icon />
                <div className={item.selected ? "font-bold" : "font-normal  hover:scale-105 " } >{item.value}</div>
            </div>))
        }
        </div>
        </div>

        <div className='text-sm'>
            <div className='hover:cursor-pointer'>Help</div>
            <div className='mt-2 hover:cursor-pointer'>Contact Us</div>
        </div>
    </div>
  )
}

export default Sidebar