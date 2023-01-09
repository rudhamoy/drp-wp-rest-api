import Link from 'next/link'
import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import style from './Navigation.module.css'

const DropdownMenu = ({ label, childItems }) => {
    const [clicked, setClicked] = useState({
        status: false,
        menu: ''
    })
    return (
        <>
            <div
                className="dropdown relative h-[100%]"
            >
                <div
                    role="button"
                    onMouseEnter={() => {
                        setClicked({
                            status: true,
                            menu: `${label}`
                        })
                    }}
                    onMouseLeave={() => {
                        setClicked({
                            status: false,
                            menu: ''
                        })
                    }}
                    className=" flex justify-center items-center h-[100%]"
                >
                    <div className="flex items-center text-black hover:text-[#bf912d] uppercase">{label} <BiChevronDown className="text-lg" /></div>
                </div>
                {clicked.status === true && clicked.menu === label && (
                    <div
                        className={`${style.menu} z-40`}
                        onMouseEnter={() => {
                            setClicked({
                                status: true,
                                menu: `${label}`
                            })
                        }}
                        onMouseLeave={() => {
                            setClicked({
                                status: false,
                                menu: ''
                            })
                        }}
                    >
                        <ul className="absolute uppercase text-black  z-50 -right-10 bg-white w-[240px] p-2 border-t-4 border-[#bf912d] shadow-md rounded-sm">
                            {childItems?.nodes.map(item => (
                                <li key={item.path} className="hover:text-[#bf912d]  my-1"> <Link href={`/category${item.path}`}>{item.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default DropdownMenu