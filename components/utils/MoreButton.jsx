import React from 'react'

function MoreButton({ title }) {
    return (
        <div className="rounded-[5px] bg-[#bf912d] cursor-pointer text-center h-[52px] w-[95vw] sm:w-[839px] flex items-center justify-center my-[26px]">
            <p className="text-[#ffd200] text-[34px] font-nunitoSans">{title}</p>
        </div>
    )
}

export default MoreButton