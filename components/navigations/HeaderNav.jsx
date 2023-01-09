import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { BiChevronDown } from 'react-icons/bi'


import Logo from '../../assets/images/logobg.png'
import ShareImage from '../../assets/images/share.png'
import MenuImage from '../../assets/images/menuu.png'
import SearchImage from '../../assets/images/searchh.png'
import gazeta from '../../assets/svg/gazeta-post-web.svg'
import tollywood from '../../assets/svg/tollywood.svg'

// import './navigation.css'
import style from './Navigation.module.css'
import MobileNav from './MobileNav'
import { socialMedia } from './navigationData'
import { getMenuList } from '../../features/navigationSlice'
import DropdownMenu from './DropdownMenu'

const HeaderNav = ({ setShowMenu }) => {
   
    const [clickFollow, setClickFollow] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const dispatch = useDispatch()
    const { menuLists } = useSelector(state => state.menu)

    const filteredMenu = []

    menuLists.forEach((i, index) => {
        if (index === 0 || index > 5) {
            filteredMenu.push(i)
        }
    })

    useEffect(() => {
        dispatch(getMenuList())
    }, [dispatch])

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
                        <div className="flex items-center justify-around font-semibold text-[13px] px-4 uppercase h-[100%]">

                            {filteredMenu.map((menu, index) => {
                                const { childItems, label, path } = menu
                                if (childItems.nodes.length > 0) {
                                    return (
                                        <DropdownMenu childItems={childItems} label={label} />
                                    )
                                }
                                return (
                                    <div key={path} className="cursor-pointer text-black hover:text-[#bf912d]">
                                        <Link className="whitespace-nowrap" href={`/category${path}`}>{label}</Link>
                                    </div>
                                )
                            })}


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
