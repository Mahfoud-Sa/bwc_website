import React from 'react'
import Refernce from '../../assets/icons/refernce'
import Reports from '../../assets/icons/reports'
import PublichesIcon from '../../assets/icons/publiches-icon'
import NewsIcon from '../../assets/img/newspaper 1.png'

export default function SideNab() {
  return (
    <div className='w-full h-full text-end'>
        <ul className="w-full h-[35%]  mb-5 px-3">
            <div className='float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3'></div>
            <p className='text-[12px]'>المنشورات</p>
            <li className='mt-1 p-2 rounded-md flex justify-end items-center'>المراجع<i className='ml-2'><Refernce/></i></li>
            <li className='mt-1 py-2 px-1 rounded-md flex justify-end items-center'>التقارير<i className='ml-2'><Reports/></i></li>
            <ul className='w-ful flex flex-col mt-3 '>
                <h1 className='hover:bg-[rgb(213,174,120)]/[.20] rounded-md p-2 hover:text-[#D5AE78] cursor-pointer flex justify-end items-center'>المنشورات<i className='ml-2'><PublichesIcon/></i></h1>
                <li className='px-5 mt-1 p-2 rounded-md flex justify-end items-center'>المنشورات<i className='ml-2'><img src={NewsIcon} alt="" /></i></li>
                <li className='px-5 mt-1 p-2 rounded-md'>الاخبار</li>
                <li className='px-5 mt-1 p-2 rounded-md'>التحاليل</li>
            </ul>
        </ul>

        <ul className="w-full h-[30%]  mb-5 px-3">
        <div className='float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3'></div>
            <p className='text-[12px]'>المؤسسات و الموزفين</p>
            <li className='px-5 mt-1 p-2'>فريق العمل</li>
            <li className='px-5 mt-1 p-2'>المؤسسات التي نديرها</li>
            <li className='px-5 mt-1 p-2'>شركائنا</li>
            <li className='px-5 mt-1 p-2'>الكُتَّاب</li>
        </ul>

        <ul className="w-full h-[30%] px-3">
        <div className='float-end w-[90%] h-[1px] bg-[#E5E5E5] mb-3'></div>
            <p className='text-[12px]'>المزايا</p>
            <li className='px-5 mt-1 p-2'>الوظائف</li>
            <li className='px-5 mt-1 p-2'>خدماتنا</li>
            <li className='px-5 mt-1 p-2'>ملف تعريقي لاعمالنا</li>
        </ul>
    </div>
  )
}
