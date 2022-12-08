import React from 'react'

const Ads = ({bg}) => {
  return (
        <div className={`border bg-${bg} rounded-md p-2 flex justify-center items-center h-[100%] w-[404px]`}>
            <p className="text-3xl text-gray-400">ADVERTISEMENT</p>
        </div>
  )
}

export default Ads