import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { MdArrowBackIos } from 'react-icons/md'

import facebook from '../../assets/svg/facebook@4x.svg'
import insta from '../../assets/svg/insta@4x.svg'
import linkedin from '../../assets/svg/linkedin@4x.svg'
import rss from '../../assets/svg/rss@4x.svg'
import twitter from '../../assets/svg/twitter@4x.svg'
import youtube from '../../assets/svg/youtube@4x.svg'
import MenuFooter from './MenuFooter'

const MobileMenu = ({ setShowMenu }) => {

    const [open, setOpen] = useState(false)
    const [openNews, setOpenNews] = useState(false)

    // css
    const menuItemClass=" cursor-pointer hover:text-[#bf912d] w-full leading-[40px] border-t-[2px] px-2"

    return (
        <div className='fixed left-0 z-50 w-[100%] sm:w-[20%] h-[100vh] bg-white transition ease-in-out delay-500 duration-500 font-nunitoSans'>
            {/* header */}
            <div className="flex justify-between items-center border-b p-3 h-[10%]">
                <img src="logobg.png" alt="" className="h-[36px]" />
                <AiOutlineCloseCircle onClick={() => setShowMenu(false)} className='text-[#bf912d] text-right text-3xl cursor-pointer' />
            </div>
            {/* menu content */}
            <div className="overflow-y-scroll h-[72%]">
                <div className="p-2">
                    <div className="w-[100%] bg-gray-200 rounded-md flex gap-x-1 border h-[45px] items-center p-1">
                        <BsSearch className="text-2xl" />
                        <input type="text" placeholder='Search News, Videos, Biographies, or Photo Galleries' className="w-[100%] h-[100%] bg-gray-200 text-xs outline-none" />
                    </div>
                </div>
                <div className='text-gray-600 uppercase p-2 text-[12px]'>
                    <div className={`${menuItemClass}`}>Celebrity</div>

                    <div className={`${open === true ? 'bg-gray-200' : null}`}>
                        <div role="button" onClick={() => setOpen(!open)} className={`${menuItemClass} flex items-center justify-between pr-5`}>Entertainment <MdArrowBackIos className={`${open === true ? "rotate-90" : '-rotate-90'}`} /> </div>
                        {open === true && (
                            <ul className="p-4 w-full">
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Politics</a></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Technology</a></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Gaming</a></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Sports</a></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Trending</a></li>
                            </ul>
                        )}
                    </div>

                    <div className={`${openNews === true ? 'bg-gray-200' : null}`}>
                        <div role="button" onClick={() => setOpenNews(!openNews)} className={`${menuItemClass} flex items-center justify-between pr-5`}>News <MdArrowBackIos className={`${openNews === true ? "rotate-90" : '-rotate-90'}`} /></div>
                        {openNews === true && (
                            <ul className="p-4 w-full">
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Politics</a></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Technology</a></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Gaming</a></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Sports</a></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><a href="#">Trending</a></li>
                            </ul>
                        )}
                    </div>
                    <div className={menuItemClass}>Anime</div>
                    <div className={menuItemClass}>Games</div>
                    <div className={menuItemClass}>Movies</div>
                    <div className={menuItemClass}>Tv Shows</div>
                </div>
                <div className="bg-gray-200 m-2 border font-nunitoSans text-[12px]">
                    <h1 className='uppercase text-[#bf912d] leading-10 px-2'>quick links</h1>
                    <ul className="flex justify-around flex-wrap gap-9 sm:gap-5 p-3 sm:p-2 border-t border-gray-400 border-b mobileFooter">
                        <li className="cursor-pointer hover:text-[#bf912d]">About Us</li>
                        <li className="cursor-pointer hover:text-[#bf912d]">Contact Us</li>
                        <li className="cursor-pointer hover:text-[#bf912d]">Our Team</li>
                        <li className="cursor-pointer hover:text-[#bf912d]">Visual Stories</li>
                        <li className="cursor-pointer hover:text-[#bf912d]">Photo Gallery</li>
                    </ul>
                    <div className="border-t border-gray-400 border-b leading-10 p-2">
                        <h1 className="uppercase">Follow us on</h1>
                        <ul className="flex items-center gap-x-4 px-4">
                            <img className="h-[24px] w-[24px] cursor-pointer" src={insta} alt="" />
                            <img className="h-[24px] w-[24px] cursor-pointer" src={facebook} alt="" />
                            <img className="h-[24px] w-[24px] cursor-pointer" src={twitter} alt="" />
                            <img className="h-[24px] w-[24px] cursor-pointer" src={youtube} alt="" />
                            <img className="h-[24px] w-[24px] cursor-pointer" src={linkedin} alt="" />
                            <img className="h-[24px] w-[24px] cursor-pointer" src={rss} alt="" />
                        </ul>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="h-full">
                <MenuFooter />
            </div>
        </div>
    )
}

export default MobileMenu