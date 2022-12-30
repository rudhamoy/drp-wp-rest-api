import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CgMenuRound } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { FcMenu } from 'react-icons/fc'
import { BiSearch } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

import Logo from '../../assets/images/logobg.png'
import ShareImage from '../../assets/images/share.png'
import MenuImage from '../../assets/images/menuu.png'
import SearchImage from '../../assets/images/searchh.png'

import facebook from '../../assets/svg/facebook@4x.svg'
import insta from '../../assets/svg/insta@4x.svg'
import linkedin from '../../assets/svg/linkedin@4x.svg'
import rss from '../../assets/svg/rss@4x.svg'
import twitter from '../../assets/svg/twitter@4x.svg'
import youtube from '../../assets/svg/youtube@4x.svg'
import gazeta from '../../assets/svg/gazeta-post-web.svg'
import tollywood from '../../assets/svg/tollywood.svg'

// import './navigation.css'
import style from './Navigation.module.css'
import MobileNav from './MobileNav'
import { socialMedia } from './navigationData'

const HeaderNav = ({ setShowMenu }) => {
    const [clicked, setClicked] = useState(false)
    const [onClicked, setOnClicked] = useState(false)
    const [clickFollow, setClickFollow] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    return (
        <>
            <MobileNav setShowMenu={setShowMenu} setClickFollow={setClickFollow} clickFollow={clickFollow} />
            <nav className='hidden sm:flex justify-center h-[48px] bg-white shadow-md relative'>
                <div className="w-[1264px] flex justify-between items-center h-[100%]">
                    {/* DESKTOP */}

                    {/* left */}
                    <div className="flex gap-x-2 cursor-pointer items-center w-[20%]">
                        {/* Logo */}
                        <Link href="/">
                            <Image src={Logo} alt="" />
                        </Link>
                    </div>
                    {/* middle */}
                    <div className="w-[65%] h-[100%]">
                        <div className="flex items-center justify-around font-semibold text-[16px] px-6 uppercase h-[100%]">
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">
                                <Link href="/category/celebrity-news">CELEBRITY</Link>
                            </div>

                            <div
                                className="dropdown relative h-[100%]"
                            >
                                <div
                                    role="button"
                                    onMouseEnter={() => {
                                        setClicked(true)
                                    }}
                                    onMouseLeave={() => {
                                        setClicked(false)
                                    }}
                                    className=" flex justify-center items-center h-[100%]"
                                >
                                    <div className="flex items-center text-black hover:text-[#bf912d]">ENTERTAINMENT <BiChevronDown className="text-lg" /></div>
                                </div>
                                {clicked === true && (
                                    <div
                                        className={`${style.menu} z-40`}
                                        onMouseEnter={() => {
                                            setClicked(true)
                                        }}
                                        onMouseLeave={() => {
                                            setClicked(false)
                                        }}
                                    >
                                        <ul className="absolute uppercase text-black  z-50 -right-10 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
                                            <li className="hover:text-[#bf912d]"> <Link href="">Politics</Link></li>
                                            <li className="hover:text-[#bf912d]"><Link href="">Technology</Link></li>
                                            <li className="hover:text-[#bf912d]"><Link href="">Gaming</Link></li>
                                            <li className="hover:text-[#bf912d]"><Link href="">Sports</Link></li>
                                            <li className="hover:text-[#bf912d]"><Link href="/category/exclusive">Trending</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="dropdown relative h-[100%]">
                                <div
                                    role="button"
                                    onMouseEnter={() => {
                                        setOnClicked(true)
                                    }}
                                    onMouseLeave={() => {
                                        setOnClicked(false)
                                    }}
                                    className="flex justify-center items-center h-[100%]"
                                >
                                    <div className="flex items-center text-black hover:text-[#bf912d]">News <BiChevronDown className="text-lg" /></div>
                                </div>
                                {onClicked === true && (
                                    <div
                                        className={`${style.menu} z-40`}
                                        onMouseEnter={() => {
                                            setOnClicked(true)
                                        }}
                                        onMouseLeave={() => {
                                            setOnClicked(false)
                                        }}
                                    >
                                        <ul className="absolute uppercase text-black z-50 -right-6 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
                                        <li className="hover:text-[#bf912d]"> <Link href="">Politics</Link></li>
                                            <li className="hover:text-[#bf912d]"><Link href="">Technology</Link></li>
                                            <li className="hover:text-[#bf912d]"><Link href="">Gaming</Link></li>
                                            <li className="hover:text-[#bf912d]"><Link href="">Sports</Link></li>
                                            <li className="hover:text-[#bf912d]"><Link href="/category/exclusive">Trending</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">
                                <Link href="">ANIME</Link>
                            </div>
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">
                                <Link href="">GAMES</Link>
                            </div>
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">
                                <Link href="/category/movies">MOVIES</Link>
                            </div>
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">
                                <Link href="/category/web-series">TV SHOW</Link>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-[15%] ">
                        <div className=" flex justify-around items-center text-[#bf912d] border-l-2">
                            <div role="button" onClick={() => setShowMenu(true)} className="">
                                <Image src={MenuImage} alt="" />
                            </div>

                            {/* follow/share */}
                            <div className="relative">
                                <div role="button" onClick={() => {
                                    setClickFollow(!clickFollow)

                                }} className="flex items-center gap-x-1">
                                    <Image src={ShareImage} alt="" />
                                    <p className="text-[16px] blogTitle">Follow</p>
                                </div>
                                {clickFollow === true && (
                                    <div className={`${style.follow} z-40`}>
                                        <div className="absolute uppercase top-10 z-50 -right-10 bg-[#bf912d] w-[267px] h-[149px] border-t-4 border-[#bf912d] shadow-md rounded-md overflow-hidden">
                                            <div>
                                                <p className="uppercase text-center text-white blogTitle my-1">Find more content at</p>
                                                <div className="flex justify-around items-center p-3">
                                                    <Image className="h-[28px]" src={tollywood} alt="" />
                                                    <Image className="h-[28px]" src={gazeta} alt="" />
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 border-t flex flex-col justify-center items-center p-2 h-[61px]">
                                                <p className="uppercase text-[#000000] text-center text-[9px] blogTitle my-1">Follow us on</p>
                                                <ul className="flex justify-around w-[100%]">
                                                    

                                                    {socialMedia.map((socialProfile, index) =>
                                                        <Link href={socialProfile.url} key={index}>
                                                            <Image className="h-[24px] w-[24px] cursor-pointer mb-1" src={socialProfile.icon} alt={socialProfile.name} />
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
                                <Image src={SearchImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {showSearch === true && (
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg_transparent flex justify-center items-center'>
                        <div className="">
                            <div className="flex items-center">
                                <div className='border rounded-md px-2 h-[40px] w-[450px] flex items-center gap-x-1 bg-white'>
                                    <BsSearch />
                                    <input type="text" className="bg-white h-[100%] w-[100%] outline-none" />
                                </div>
                                <MdClose onClick={() => setShowSearch(false)} className="text-[#bf912d] text-3xl" />
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default HeaderNav