import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import authorFb from '../../assets/svg/authorFb.svg'
import authorWa from '../../assets/svg/authorWa.svg'
import authorEmail from '../../assets/svg/authorEmail.svg'
import authorTwt from '../../assets/svg/authorTwt.svg'
import authorLnkd from '../../assets/svg/authorLnkd.svg'

const NewsFooterAuthor = ({ data }) => {

    const avatars = data.avatar_urls

    const avatarList = Object.values(avatars)

    return (
        <div className="flex  sm:items-center bg-[#f4f4f4] rounded-[4px] p-2 sm:p-4 gap-x-2">
            <div>
                <div className="p-[2px] border-2 border-black rounded-full h-[90px] sm:h-[120px] w-[90px] sm:w-[120px]">
                    <img className="rounded-full h-[100%] w-[100%]" src={avatarList[2]} alt="" />
                </div>
            </div>
            <div>
                <Link href={`/author/${data.slug}`}>
                    <p className="text-[18px] text-[#bf912d] blogTitle mb-[5px] capitalize cursor-pointer">{data.name}</p>
                </Link>

                <p className="text-[14px] text-[#4b4b4b] blogTitle">{data.description}</p>

                <div className="flex items-center gap-x-2 mt-[10px]">
                    <p className="text-[#bf912d] text-[12px] blogTitle">Reach me at :</p>
                    <div className="flex gap-x-[11px] items-center cursor-pointer">
                        <Image height={16} width={16} src={authorFb} alt="" />
                        <Image height={16} width={16} src={authorLnkd} alt="" />
                        <Image height={16} width={16} src={authorWa} alt="" />
                        <Image height={16} width={16} src={authorTwt} alt="" />
                        <Image height={18} width={18} src={authorEmail} alt="" />
                        {/* <img height={16} width={16} src="email.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFooterAuthor