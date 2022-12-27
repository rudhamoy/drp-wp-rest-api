import React from 'react'
import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { FaLinkedinIn } from 'react-icons/fa'
import instagramIcon from '../../assets/svg/insta@4x.svg';
import facebookIcon from '../../assets/svg/facebook@4x.svg';
import twitterIcon from '../../assets/svg/twitter@4x.svg';
import linkedinIcon from '../../assets/svg/linkedin@4x.svg';
import nadiaUsman from '../../assets/images/nadia-usman.png';

const AuthorCard = ({ data }) => {

    const avatars = data.avatar_urls

    const avatarList = Object.values(avatars)

    return (
        <div>
            <div className="p-4 rounded-[6px] border bg-[#fffbf1] my-3 w-[95vw]  sm:w-[837px]">
                <div className="flex gap-x-4">
                    <div className=" sm:w-[20%]">
                        <div className="overflow-hidden rounded-full h-[70px] sm:h-[125px] w-[70px] sm:w-[130px] relative">
                            <Image fill className="object-cover rounded-full" src={avatarList[2]} alt="" />
                        </div>
                    </div>
                    <div className="w-[80%]">
                        <h1 className="font-[800] text-[20px] blogTitle">{data.name}</h1>
                        <p className='text-[#6d6d6d] text-[12px] sm:text-[16px] font-[400] blogTitle'>{data.description}</p>
                        <div className="flex gap-x-3 text-xl mt-4">

                            <Image className="cursor-pointer" height={25} width={25} src={instagramIcon} alt="" />
                            <Image className="cursor-pointer" height={25} width={25} src={facebookIcon} alt="" />
                            <Image className="cursor-pointer" height={25} width={25} src={twitterIcon} alt="" />
                            <Image className="cursor-pointer" height={25} width={25} src={linkedinIcon} alt="" />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard