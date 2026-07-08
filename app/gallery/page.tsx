// pages/blog.tsx
import Image from 'next/image'
import React from 'react'
import MoreBlogPage from './MoreBlogPage'
import Gallery from './gallery'

const BlogPage: React.FC = () => {
  return (
    <div className="container pt-[120px] w-full mx-auto px-4 py-12 text-gray-800 font-sans">
     
     <Gallery />
    </div>
  )
}

export default BlogPage
