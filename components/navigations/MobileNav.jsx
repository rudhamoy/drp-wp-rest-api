import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdClose } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'

import MobileMenuImage from '../../assets/images/mobileMenu.png'
import Logo from '../../assets/images/realLogo.png'
import HomeIcon from '../../assets/images/home.png'
import MobileSearch from '../../assets/images/mobileSearch.png'
import MobileShare from '../../assets/images/mobileShare.png'

import facebook from '../../assets/svg/facebook@4x.svg'
import insta from '../../assets/svg/insta@4x.svg'
import linkedin from '../../assets/svg/linkedin@4x.svg'
import rss from '../../assets/svg/rss@4x.svg'
import twitter from '../../assets/svg/twitter@4x.svg'
import youtube from '../../assets/svg/youtube@4x.svg'
import gazeta from '../../assets/svg/gazeta-post-web.svg'
import tollywood from '../../assets/svg/tollywood.svg'
import { socialMedia } from './navigationData'

const MobileNav = ({ setShowMenu, setClickFollow, clickFollow }) => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <nav className="sm:hidden bg-white shadow-md p-2 relative text-black">

            <div className=" w-[100%] flex justify-between items-center">
                {/* mobile menu */}
                <div className="flex items-center gap-x-3 w-[70%]">
                    <div role="button" onClick={() => setShowMenu(true)} className="">
                        <Image src={MobileMenuImage} alt="" height={50} width={50} />
                    </div>
                    <Link href='/'>
                        <Image src={Logo} className="h-[30px]" alt="" priority />
                    </Link>

                </div>
                <div className="flex items-center justify-around border-l w-[30%]">
                    {/* share */}
                    <div className="relative">
                        <div role="button" onClick={() => {
                            setClickFollow(!clickFollow)

                        }} className="flex items-center gap-x-1">
                            {/* icon and image */}
                            {clickFollow !== true ? <Image src={MobileShare} alt=""  height={22} /> : <MdClose className="text-[#bf912d] text-3xl" />}

                            {/* <p className="text-[16px] font-futura2">Follow</p> */}
                        </div>
                        {clickFollow === true && (
                            <div className="follow z-40">
                                <div className="absolute uppercase top-8 z-50 -right-10 bg-[#bf912d] w-[267px] h-[149px] border-t-4 border-[#bf912d] shadow-md rounded-md overflow-hidden">
                                    <div>
                                        <p className="uppercase text-center text-white font-nunitoSans my-1">Find more content at</p>
                                        <div className="flex justify-around items-center p-3">
                                            {/* <img className="h-[28px]" src={tollywood} alt="" />
                                            <img className="h-[28px]" src={gazeta} alt="" /> */}
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 border-t flex flex-col justify-center items-center p-2 h-[60px]">
                                        <h1 className="uppercase text-[#393939] text-center text-[9px] font-nunitoSans my-1">Follow us on</h1>
                                        <ul className="flex justify-around w-[100%] mb-1">

                                            {socialMedia.map((socialProfile, index) =>
                                                <Link href={socialProfile.url} key={index}>
                                                    <Image className="h-[19px] w-[20px]" src={socialProfile.icon} alt={socialProfile.name} />
                                                </Link>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* search */}
                    <div
                        role="button"
                        onClick={() => {
                            setShowSearch(!showSearch)
                        }}
                    >
                        <Image src={MobileSearch} alt="" height={22} />
                    </div>

                </div>
            </div>

            {showSearch === true && (
                <div className='absolute top-0 left-0 right-0 bottom-0 bg_transparent flex justify-center items-center'>
                    <div className="">
                        <div className="flex items-center">
                            <div className='border rounded-md px-2 h-[30px] w-[250px] flex items-center gap-x-1 bg-white'>
                                <BsSearch />
                                <input type="text" className="bg-white h-[100%] w-[100%] outline-none" />
                            </div>
                            <MdClose onClick={() => setShowSearch(false)} className="text-[#bf912d] text-3xl" />
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-center gap-x-3 mt-3">
                <div role="button">
                    <Link href='/'>
                        <Image src={HomeIcon} alt="" />
                    </Link>
                </div>
                <div className='uppercase flex items-center gap-x-3 text-[12px] font-nunitoSans overflow-x-scroll scrollbar-hide p-1'>
                    <Link href="/category/celebrity-news">
                        <p>Celebrity</p>
                    </Link>
                    <Link href="/category/entertainment">
                        <p>Entertainment</p>
                    </Link>
                    <Link href='/category/web-series'>
                        <p className="whitespace-nowrap">Tv News</p>
                    </Link>
                    <Link href='/category/movies'>
                        Movie
                    </Link>
                    <Link href=''>
                        <p className="whitespace-nowrap">Technology</p>
                    </Link>
                    <p className="whitespace-nowrap">Web Stories</p>
                    <p className="whitespace-nowrap">Web Stories</p>
                    <p className="whitespace-nowrap">Web Stories</p>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav