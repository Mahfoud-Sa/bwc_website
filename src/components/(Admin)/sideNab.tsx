import React from 'react'
import Refernce from '../../assets/icons/refernce'
import Reports from '../../assets/icons/reports'
import PublichesIcon from '../../assets/icons/publiches-icon'
import StudiesIcon from '../../assets/icons/studies-icon'
import NewsIcon from '../../assets/img/newspaper 1.png'
import NewsIcon2 from '../../assets/img/newspaper 2.png'
import Teams from '../../assets/img/team(2) 1.png'
import Busniess from '../../assets/img/businessman(1) 1.png'
import Service from '../../assets/img/service(1) 1.png'
import Orgnaztion from '../../assets/icons/orgnaztion'
import Massage from '../../assets/icons/massage'
import OurFiles from '../../assets/icons/files'

export default function SideNab() {
  return (
    <div className='w-full h-full text-end overflow-y-auto'>
        <ul className="w-full min-h-[40%]  mb-5 px-3 ">
            <div className='float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3'></div>
            <p className='text-[12px] text-[#9E9E9E]'>المنشورات</p>
            <li className='mt-1 p-2 rounded-md flex justify-end items-center'>المراجع<i className='ml-2'><Refernce/></i></li>
            <li className='mt-1 py-2 px-1 rounded-md flex justify-end items-center'>التقارير<i className='ml-2'><Reports/></i></li>
                <h1 className='hover:bg-[rgb(213,174,120)]/[.20] rounded-md p-2 hover:text-[#D5AE78] cursor-pointer flex justify-end items-center'>المنشورات<i className='ml-2'><PublichesIcon/></i></h1>
            <ul className='w-ful flex flex-col mt-1 '>
                <li className='px-5 mt-1 p-2 rounded-md flex justify-end items-center'>المنشورات<i className='ml-2'><img src={NewsIcon} alt="" /></i></li>
                <li className='px-5 mt-1 p-2 rounded-md flex justify-end items-center'>الاخبار<i className='ml-2'><img src={NewsIcon2} alt="" /></i></li>
                <li className='px-5 mt-1 p-2 rounded-md flex justify-end items-center'>التحاليل<i className='ml-2'><StudiesIcon/></i></li>
            </ul>
        </ul>

        <ul className="w-full min-h-[25%]  mb-5 px-3">
        <div className='float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3'></div>
            <p className='text-[12px] text-[#9E9E9E]'>المؤسسات و الموزفين</p>
            <li className='px-5 mt-1 p-2 flex justify-end items-center'>فريق العمل<i className='ml-2'><img src={Teams} alt="" /></i></li>
            <li className='px-5 mt-1 p-2 flex justify-end items-center'>المؤسسات التي نديرها<i className='ml-2'><Orgnaztion/></i></li>
            <li className='px-5 mt-1 p-2 flex justify-end items-center'>شركائنا<i className='ml-2'><Massage/></i></li>
            <li className='px-5 mt-1 p-2 flex justify-end items-center'>الكُتَّاب<i className='ml-2'><Massage/></i></li>
        </ul>

        <ul className="w-full min-h-[30%] px-3">
        <div className='float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3'></div>
            <p className='text-[12px] text-[#9E9E9E]'>المزايا</p>
            <li className='px-5 mt-1 p-2 rounded-md flex justify-end items-center'>الوظائف<i className='ml-2'><img src={Busniess} alt="" /></i></li>
            <li className='px-5 mt-1 p-2 rounded-md flex justify-end items-center'>خدماتنا<i className='ml-2'><img src={Service} alt="" /></i></li>
            <li className='px-5 mt-1 p-2 flex justify-end items-center'>ملف تعريقي لاعمالنا<i className='ml-2'><OurFiles/></i></li>
        </ul>
    </div>
  )
}
