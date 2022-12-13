import React, { useState } from 'react'
import Link from 'next/link'
import { CgMenuRound } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { FcMenu } from 'react-icons/fc'
import { BiSearch } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

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

const HeaderNav = ({ setShowMenu }) => {
    const [clicked, setClicked] = useState(false)
    const [onClicked, setOnClicked] = useState(false)
    const [clickFollow, setClickFollow] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    return (
        <>
            <MobileNav setShowMenu={setShowMenu} setClickFollow={setClickFollow} clickFollow={clickFollow} />
            <div className='hidden sm:flex justify-center h-[48px] bg-white shadow-md relative'>
                <div className="w-[1264px] flex justify-between items-center h-[100%]">
                    {/* DESKTOP */}

                    {/* left */}
                    <div className="flex gap-x-2 cursor-pointer items-center w-[20%]">
                        <Link href="/">
                        <img src="logobg.png" alt="" />
                        </Link>
                    </div>
                    {/* middle */}
                    <div className="w-[65%] h-[100%]">
                        <div className="flex items-center justify-around font-semibold text-[16px] px-6 uppercase h-[100%]">
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">CELEBRITY</div>

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
                                    <a className="flex items-center text-black hover:text-[#bf912d]">ENTERTAINMENT <BiChevronDown className="text-lg" /></a>
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
                                            <li className="hover:text-[#bf912d]"><a href="#">Politics</a></li>
                                            <li className="hover:text-[#bf912d]"><a href="#">Technology</a></li>
                                            <li className="hover:text-[#bf912d]"><a href="#">Gaming</a></li>
                                            <li className="hover:text-[#bf912d]"><a href="#">Sports</a></li>
                                            <li className="hover:text-[#bf912d]"><a href="#">Trending</a></li>
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
                                    <a className="flex items-center text-black hover:text-[#bf912d]">News <BiChevronDown className="text-lg" /></a>
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
                                            <li className='hover:text-[#bf912d]'><a href="#">Politics</a></li>
                                            <li className='hover:text-[#bf912d]'><a href="#">Technology</a></li>
                                            <li className='hover:text-[#bf912d]'><a href="#">Gaming</a></li>
                                            <li className='hover:text-[#bf912d]'><a href="#">Sports</a></li>
                                            <li className='hover:text-[#bf912d]'><a href="#">Trending</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">ANIME</div>
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">GAMES</div>
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">MOVIES</div>
                            <div className="cursor-pointer text-black hover:text-[#bf912d]">TV SHOW</div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-[15%] ">
                        <div className=" flex justify-around items-center text-[#bf912d] border-l-2">
                            <div role="button" onClick={() => setShowMenu(true)} className="">
                                <img src="menuu.png" alt="" />
                            </div>

                            {/* follow/share */}
                            <div className="relative">
                                <div role="button" onClick={() => {
                                    setClickFollow(!clickFollow)

                                }} className="flex items-center gap-x-1">
                                    <img src="share.png" alt="" />
                                    <p className="text-[16px] font-nunitoSans">Follow</p>
                                </div>
                                {clickFollow === true && (
                                    <div  className={`${style.follow} z-40`}>
                                        <div className="absolute uppercase top-10 z-50 -right-10 bg-[#bf912d] w-[267px] h-[149px] border-t-4 border-[#bf912d] shadow-md rounded-md overflow-hidden">
                                            <div>
                                                <p className="uppercase text-center text-white font-nunitoSans my-1">Find more content at</p>
                                                <div className="flex justify-around items-center p-3">
                                                    <img className="h-[28px]" src={tollywood} alt="" />
                                                    <img className="h-[28px]" src={gazeta} alt="" />
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 border-t flex flex-col justify-center items-center p-2 h-[61px]">
                                                <p className="uppercase text-[#000000] text-center text-[9px] font-nunitoSans my-1">Follow us on</p>
                                                <ul className="flex justify-around w-[100%]">
                                                <img className="h-[24px] w-[24px] cursor-pointer mb-1" src={insta} alt="" />
                                                    <img className="h-[24px] w-[24px] cursor-pointer" src={facebook} alt="" />
                                                    <img className="h-[24px] w-[24px] cursor-pointer" src={twitter} alt="" />
                                                    <img className="h-[24px] w-[24px] cursor-pointer" src={youtube} alt="" />
                                                    <img className="h-[24px] w-[24px] cursor-pointer" src={linkedin} alt="" />
                                                    <img className="h-[24px] w-[24px] cursor-pointer" src={rss} alt="" />
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
                                <img src="searchh.png" alt="" />
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
            </div>
        </>
    )
}

export default HeaderNav