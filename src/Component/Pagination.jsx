import React from 'react'
import { useGlobalContext } from '../context/Context'

export default function Pagination() {
    const {page,nbPages, prevPost,nextPost} = useGlobalContext()
  return (
    <>
     <div className='pagination-btn flex justify-between my-10 items-center '>
        <button onClick={()=>prevPost()} className='bg-black text-white rounded px-3 py-2'> PREV </button>
        <p className='px-32 text-lg'>  {page + 1 } of {nbPages} </p>
        <button onClick={()=>nextPost()} className='bg-black text-white rounded px-3 py-2'> NEXT </button>
     </div>
    </>
  )
}
