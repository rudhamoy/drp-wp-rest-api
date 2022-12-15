import React, { useState } from 'react'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'

import MobileMenuImage from '../../assets/images/mobileMenu.png'
import Logo from '../../assets/images/realLogo.png'
import HomeIcon from '../../assets/images/home.png'

import facebook from '../../assets/svg/facebook@4x.svg'
import insta from '../../assets/svg/insta@4x.svg'
import linkedin from '../../assets/svg/linkedin@4x.svg'
import rss from '../../assets/svg/rss@4x.svg'
import twitter from '../../assets/svg/twitter@4x.svg'
import youtube from '../../assets/svg/youtube@4x.svg'
import gazeta from '../../assets/svg/gazeta-post-web.svg'
import tollywood from '../../assets/svg/tollywood.svg'

const MobileNav = ({ setShowMenu, setClickFollow, clickFollow }) => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <nav className="sm:hidden bg-white shadow-md p-2 relative text-black">

            <div className=" w-[100%] flex justify-between items-center">
                {/* mobile menu */}
                <div className="flex items-center gap-x-3 w-[72%]">
                    <div role="button" onClick={() => setShowMenu(true)} className="">
                        <Image src={MobileMenuImage}  alt="" />
                    </div>
                    <Image src={Logo} className="h-[30px]" alt="" priority />
                </div>
                <div className="flex items-center justify-around border-l w-[28%]">
                    {/* share */}
                    {/* <img src="mobileShare.png" alt="" className="h-[35px]" /> */}
                    <div className="relative">
                        <div role="button" onClick={() => {
                            setClickFollow(!clickFollow)

                        }} className="flex items-center gap-x-1">
                            {/* icon and image */}
                            {clickFollow !== true ? <img src="mobileShare.png" alt="" className="h-[22px]" /> : <MdClose className="text-[#bf912d] text-3xl" />}

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
                                            {/* <img className="h-[19px] w-[20px]" src={insta} alt="" />
                                            <img className="h-[19px] w-[20px]" src={facebook} alt="" />
                                            <img className="h-[19px] w-[20px]" src={twitter} alt="" />
                                            <img className="h-[19px] w-[20px]" src={youtube} alt="" />
                                            <img className="h-[19px] w-[20px]" src={linkedin} alt="" />
                                            <img className="h-[19px] w-[20px]" src={rss} alt="" /> */}
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
                        <img src="mobileSearch.png" alt="" className="h-[22px]" />
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
                    <Image src={HomeIcon} alt=""  />
                </div>
                <div className='uppercase flex items-center gap-x-3 text-[12px] font-nunitoSans overflow-x-scroll scrollbar-hide p-1'>
                    <p>Celebrity</p>
                    <p>Entertainment</p>
                    <p className="whitespace-nowrap">Tv News</p>
                    <p className="whitespace-nowrap">Web Stories</p>
                    <p className="whitespace-nowrap">Web Stories</p>
                    <p className="whitespace-nowrap">Web Stories</p>
                    <p className="whitespace-nowrap">Web Stories</p>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav