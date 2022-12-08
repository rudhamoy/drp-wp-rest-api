import React from 'react'

const BlogContainer = () => {
    return (
        <div className="p-4 rounded-md border bg-white">
            <div className="flex gap-x-2">
                <div className="">
                    <img className="w-[660px] h-[170px] rounded-sm" src="https://dailyresearchplot.com/wp-content/uploads/2022/10/1-1030-750x536.jpg" alt="" />
                </div>
                <div className="relative">
                    <p className="text-xs font-semibold text-[#bf912d]">TV SERIES</p>
                    <h1 className="text-[20.93px]">The Fabulous Season 1: Release Date Update And What We Know</h1>
                    <p className='text-gray-500 text-[14.55px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sequi necessitatibus ullam, ab et nihil voluptatum modi esse rem illo, ipsa, eum ipsum.</p>
                    <p className="text-xs absolute bottom-1">NOVEMBER 2, 2022</p>
                </div>
            </div>
        </div>
    )
}

export default BlogContainer