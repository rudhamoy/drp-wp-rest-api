import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import gazeta from '../../assets/svg/gazeta-post-web.svg'
import tollywood from '../../assets/svg/tollywood.svg'

const MenuFooter = () => {
    return (
        <div className="uppercase bg-[#1d1d1d] p-2">
            <div>
                <p className="uppercase text-center text-white text-[12px] font-nunitoSans my-1">Find more content at</p>
                <div className="flex justify-around items-center p-3">
                    <img className="h-[28px]" src={tollywood} alt="" />
                    <img className="h-[28px]" src={gazeta} alt="" />
                </div>
            </div>
            <div className="text-center flex justify-center">
                <p className='flex text-[10px] font-nunitoSans text-[#dbdbdb]'>
                    <BiCopyright className='text-[12px]' /> <span>2019 - 2022 Daily Research Plot All Rights Reserved.</span>
                </p>
            </div>
        </div>
    )
}

export default MenuFooter