import React from 'react'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi';
import CategoryListItem from '../category/CategoryListItem';
import SmallerCardItems from './SmallerCardItems';
function CategorySection({ category, data, id }) {


    return (
        <div className="bg-white mt-[15px] sm:mt-[30px] w-[95vw] sm:w-[839px] sm:h-[560px] rounded-[4px] drop-shadow-container">
            <div className="p-2">
                <div className="flex justify-between items-center mb-[15px]">
                    <div className="flex items-center gap-x-2">
                        <p className="blogTitle text-[#bf912d] text-[16px] sm:text-[22px] font-semibold">{data[5].id}</p>
                        <div className="h-[2.5px] w-[60px] sm:w-[100px] rounded bg-[#bf912d]"></div>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <Link href={`/category/${data[6].slug}`}>
                            <p className="text-[#bf912d] text-[12px] sm:text-[18px] font-semibold blogTitle">READ ALL</p>
                        </Link>
                        < FiChevronRight className="text-[#bf912d] text-[18px] sm:text-[25px]" />
                    </div>
                </div>
                {data.slice(0, 1).map((item, index) => (
                    <CategoryListItem key={index} width="810px" data={item} />
                ))}

                <div className="flex justify-between flex-wrap">
                    {data.slice(1, 5).map((item, index) => {
                        return (
                            <SmallerCardItems key={index} data={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategorySection