import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { MdArrowBackIos } from 'react-icons/md'

import Logo from '../../assets/images/logobg.png'

import facebook from '../../assets/svg/facebook@4x.svg'
import insta from '../../assets/svg/insta@4x.svg'
import linkedin from '../../assets/svg/linkedin@4x.svg'
import rss from '../../assets/svg/rss@4x.svg'
import twitter from '../../assets/svg/twitter@4x.svg'
import youtube from '../../assets/svg/youtube@4x.svg'
import MenuFooter from './MenuFooter'
import { socialMedia, pageLink } from './navigationData'
import Link from 'next/link'


const mobilePages = [
    {
        name: "About Us",
        slug: "about-us",
    },
    {
        name: "Contact Us",
        slug: "contact-us",
    },
    {
        name: "Our Team",
        slug: "team",
    },
    {
        name: "Visual Stories",
        slug: "web-stories",
    },
    {
        name: "Photo Gallery",
        slug: "photo-gallery",
    },
]


const MobileMenu = ({ setShowMenu }) => {

    const [open, setOpen] = useState(false)
    const [openNews, setOpenNews] = useState(false)

    // css
    const menuItemClass = "text-[14px] cursor-pointer hover:text-[#bf912d] w-full leading-[40px] border-t-[2px] px-2"

    return (
        <div className='fixed left-0 z-50 w-[100vw] sm:w-[20%] h-[100vh] text-black bg-white transition ease-in-out delay-500 duration-500 blogTitle'>
            {/* header */}
            <div className="flex justify-between items-center border-b p-3 h-[10%]">
                <Image src={Logo} alt="" className="w-[76%]" />
                <AiOutlineCloseCircle onClick={() => setShowMenu(false)} className='text-[#bf912d] text-right text-3xl cursor-pointer' />
            </div>
            {/* menu content */}
            <div className="overflow-y-scroll scrollbar h-[72%]">
                <div className="p-2">
                    <div className="w-[100%] bg-gray-200 rounded-md flex gap-x-1 border h-[45px] items-center p-1">
                        <BsSearch className="text-2xl" />
                        <input type="text" placeholder='Search News, Videos, Biographies, or Photo Galleries' className="w-[100%] h-[100%] bg-gray-200 text-xs outline-none" />
                    </div>
                </div>
                <div className='text-gray-600 uppercase p-2 text-[12px]'>
                    <div className={`${menuItemClass}`}>
                        <Link href="/category/celebrity-news">Celebrity</Link>
                    </div>

                    <div className={`${open === true ? 'bg-gray-200' : null}`}>
                        <div role="button" onClick={() => setOpen(!open)} className={`${menuItemClass} flex items-center justify-between pr-5`}>Entertainment <MdArrowBackIos className={`${open === true ? "rotate-90" : '-rotate-90'}`} /> </div>
                        {open === true && (
                            <ul className="p-4 w-full">
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="">Politics</Link></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="">Technology</Link></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="">Gaming</Link></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="">Sports</Link></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="/category/exclusive">Trending</Link></li>
                            </ul>
                        )}
                    </div>

                    <div className={`${openNews === true ? 'bg-gray-200' : null}`}>
                        <div role="button" onClick={() => setOpenNews(!openNews)} className={`${menuItemClass} flex items-center justify-between pr-5`}>News <MdArrowBackIos className={`${openNews === true ? "rotate-90" : '-rotate-90'}`} /></div>
                        {openNews === true && (
                            <ul className="p-4 w-full">
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="">Politics</Link></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="">Technology</Link></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="">Gaming</Link></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="">Sports</Link></li>
                                <li className="py-2 w-full hover:text-[#bf912d] border-gray-300 border-b-[2px]"><Link href="/category/exclusive">Trending</Link></li>
                            </ul>
                        )}
                    </div>
                    <div className={menuItemClass}>
                        <Link href="">Anime</Link>
                    </div>
                    <div className={menuItemClass}>
                        <Link href="">Games</Link>
                    </div>
                    <div className={menuItemClass}>
                        <Link href="">Movies</Link>
                    </div>
                    <div className={menuItemClass}>
                        <Link href="/category/web-series">Tv Shows</Link>
                    </div>
                </div>
                <div className="bg-gray-200 m-2 border blogTitle text-[12px]">
                    <h1 className='uppercase text-[#bf912d] leading-10 px-2'>quick links</h1>
                    <ul className="flex justify-around flex-wrap gap-9 sm:gap-5 p-3 sm:p-2 border-t border-gray-400 border-b mobileFooter">
                        {mobilePages.map((item) => <Link href={`/${item.slug}`} key={item.slug}>
                            <li className="cursor-pointer hover:text-[#bf912d] text-[14px] text-black">{item.name}</li>
                        </Link>)}
                    </ul>
                    <div className="border-t border-gray-400 border-b leading-10 p-2">
                        <h1 className="uppercase">Follow us on</h1>
                        <ul className="flex items-center gap-x-4 px-4">

                            {socialMedia.map((socialProfile, index) =>
                                <Link href={socialProfile.url} key={index}>
                                    <Image className="h-[24px] w-[24px] cursor-pointer" src={socialProfile.icon} alt={socialProfile.name} />
                                </Link>)}
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