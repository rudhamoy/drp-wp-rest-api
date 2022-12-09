import React, { useState, useEffect } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import CategoryListItem from '../category/CategoryListItem';
import SmallerCardItems from './SmallerCardItems';

function CategorySection({ category, data, id }) {

<<<<<<< HEAD
=======
    console.log("THE DATA IS ", data)

>>>>>>> 69b459407d4e37923dfebd44d090ed7195976922
    return (
        <div className="bg-white mt-[15px] sm:mt-[30px] w-[95vw] sm:w-[839px] sm:h-[560px] rounded-[4px] drop-shadow-container">
            <div className="p-2">
                <div className="flex justify-between items-center mb-[15px]">
                    <div className="flex items-center gap-x-2">
                        <p className="font-nunitoSans text-[#bf912d] text-[16px] sm:text-[22px] font-semibold">{data[5].id}</p>
                        <div className="h-[2.5px] w-[60px] sm:w-[100px] rounded bg-[#bf912d]"></div>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <p className="text-[#bf912d] text-[12px] sm:text-[18px] font-semibold font-nunitoSans">READ ALL</p>
                        < FiChevronRight className="text-[#bf912d] text-[18px] sm:text-[25px]" />
                    </div>
                </div>
                {data.slice(0, 1).map((item, index) => (
                    <CategoryListItem key={index} width="810px" data={item} />
                ))}

                <div className="flex justify-between flex-wrap">
                    {data.slice(1, 5).map((item, index) => {
                        return (
<<<<<<< HEAD
                            <SmallerCardItems key={index} />
=======
                            <SmallerCardItems data={item} />
>>>>>>> 69b459407d4e37923dfebd44d090ed7195976922
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategorySection