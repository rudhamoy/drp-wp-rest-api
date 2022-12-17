import React from 'react'
import CategoryListItem from '../category/CategoryListItem'
import BlogContainer from '../layout/BlogContainer'

const BlogList = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <CategoryListItem />
        </div>
    )
}

export default BlogList