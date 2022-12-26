import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import HeaderNav from '../navigations/HeaderNav'
import Footer from '../navigations/Footer'
import MobileMenu from '../navigations/MobileMenu'

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)

    const { storiesModal } = useSelector(state => state.activity)

    const router = useRouter()


    return (
        <>
        {router.pathname === '/web-stories/[slug]' ? (
            <div>
                {children}
            </div>
        ) : (
            <div className="bg-gray-200 relative">
            {showMenu === true && (
                <div className="">
                    <div onClick={() => setShowMenu(false)} className="absolute left-0 right-0 bottom-0 top-0 z-40 bg_transparent transition ease-in-out delay-200 duration-300 ">
                    </div>
                    <MobileMenu setShowMenu={setShowMenu} />
                </div>
            )}
                <HeaderNav setShowMenu={setShowMenu} />

                {children}
                <Footer />

        </div>
        )}
        
        </>
    )
}

export default Layout