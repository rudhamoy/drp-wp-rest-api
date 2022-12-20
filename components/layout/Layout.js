import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import HeaderNav from '../navigations/HeaderNav'
import Footer from '../navigations/Footer'
import MobileMenu from '../navigations/MobileMenu'
import StoriesPlayer from '../stories/StoriesPlayer'

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)

    const { storiesModal } = useSelector(state => state.activity)

    return (
        <div className="bg-gray-200 relative">
            {showMenu === true && (
                <div className="">
                    <div onClick={() => setShowMenu(false)} className="absolute left-0 right-0 bottom-0 top-0 z-40 bg_transparent transition ease-in-out delay-200 duration-300 ">
                    </div>
                    <MobileMenu setShowMenu={setShowMenu} />
                </div>
            )}
            {storiesModal === true ? (
                <div className='absolute top-0 bottom-0 right-0 left-0 z-[500] bg-gray-800 h-[100vh] overflow-hidden'>
                    <StoriesPlayer />
                </div>
            ) : (
                <>
                <HeaderNav setShowMenu={setShowMenu} />
                
                {children}
                <Footer />
                </>
                )}

        </div>
    )
}

export default Layout