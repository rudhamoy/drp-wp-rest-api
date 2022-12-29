import React from 'react'
import { BsPinterest } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import Image from 'next/image'
import BalramJee from '../../assets/images/Balram-Jee.webp';
export const MemberCard = () => {


    return (
        <>
            <div className="bg-[#dddddd] p-4 w-[16rem] h-[25rem] flex flex-col items-center relative">
                {/* image container To do: Make this image container scale up on hover */}
                <div className="h-[7rem] overflow-hidden w-[7rem] bg-gray-500 rounded-[100%]  relative">
                    <Image height="auto" width="auto" src={BalramJee} style={{ objectFit: 'cover' }} />
                </div>
                {/* end image container */}
                <h3 className="text-center font-bold text-[1.2rem] text-[#e20e59]">Aastha Sharma</h3>
                <p className="h-[12rem] p-1 text-ellipsis break-all">Pursing Bcom. Hons From Delhi University (Regular) Passionate about writing Awarded for debate writing and story writing competitions at school level.Awarded for self written poem writing at college.I write quotes and poems.</p>
                <div className="flex flex-row gap-2 items-center justify-center p-2">
                    <BsPinterest className="h-6 w-6" />
                    <AiOutlineInstagram className="h-6 w-6" />

                </div>
                {/* <div className={`hidden absolute h-[30rem] w-[30rem] bg-gray-500 border-2 border-white z-1 top-[16px] left-[60px]`}>
                    <Image height="auto" width="auto" src={BalramJee} style={{ objectFit: 'cover' }} />
                </div> */}
            </div>

        </>
    )
}
