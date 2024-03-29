import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import facebookColoredIcon from '../../assets/icons/facebook-colored-icon.svg';
import linkedinColoredIcon from '../../assets/icons/linkedin-colored-icon.svg';
import whatsappColoredIcon from '../../assets/icons/whatsapp-colored-icon.svg';
import twiterColoredIcon from '../../assets/icons/twiter-colored-icon.svg';

import Author from '../utils/Author'
import FormatDate from '../utils/FormatDate'


const NewsHeaderAuthor = ({data}) => {


     const date = new Date(data[0].date).getDate()
     const month = new Date(data[0].date).getMonth()
     const year = new Date(data[0].date).getFullYear()
      const archiveDate = `${year}-${month+1}-${date}`

     const avatars = data[0]?._embedded.author[0].avatar_urls

     const avatarList = Object.values(avatars)
     
    return (
       <div>
                <div className="flex flex-row justify-between sm:items-center items-end gap-x-2">
                    <div className="flex gap-x-2 items-center">
                        {/* <img src="author2.png" alt="" /> */}
                        <img src={avatarList[1]} alt="" className="rounded-full" />
                        <div className="text-[13px] text-[#6d6d6d]">
                            <Link href={`/author/${data[0]?._embedded.author[0].slug}`}>
                            <p className=''>by <span className="text-[16px] text-[#000000] font-nunitoSans font-semibold">{data[0]?._embedded.author[0].name}</span></p>
                            </Link>
                          
                            <Link href={`/archive/${archiveDate}`}>
                            <p className="font-nunitoSans">Published On <span className="text-black font-semibold">{FormatDate(data[0].date)}</span> (Updated On <span className="text-black font-semibold">{FormatDate(data[0].modified)}</span>)</p>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-row items-center cursor-pointer sm:gap-x-3 gap-x-2 ml-[-60px]">
                        <Image src={facebookColoredIcon} alt="" />
                        <Image height={24} width={24} src={linkedinColoredIcon} alt="" />
                        <Image height={24} width={24} src={whatsappColoredIcon} alt="" />
                        <Image height={24} width={24} src={twiterColoredIcon} alt="" />
                        {/* <Image height={24} width={24} src="email.png" alt="" /> */}
                    </div>
                </div>
            </div>
    )
}

export default NewsHeaderAuthor