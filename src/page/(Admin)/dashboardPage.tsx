import React from 'react'
import NavBar from '../../components/(Admin)/navBar'
import SideNab from '../../components/(Admin)/sideNab'

export default function DashboardPage() {
  return (
    <div className='h-[100vh] w-full box-border'>
        <div className='h-[10vh] w-full flex'>
            <NavBar/>
        </div>
        <div className='w-full h-[90vh] flex'>
            <div className=' w-[85%] h-full bg-slate-700'>

            </div>
            <aside className=' w-[15%] h-full '>
            <SideNab/>
            </aside>
        </div>
    </div>
  )
}
