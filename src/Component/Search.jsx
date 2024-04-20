import React from 'react'
import { useGlobalContext } from '../context/Context'

export default function Search() {
    const {searchPost,query} = useGlobalContext()
    // console.log(query);
  return (
    <>
      <div className='from mt-4'>
        <form onSubmit={(e)=>e.preventDefault()} >
            <input 
            className='border-[2px] w-80 border-black px-2 outline-0 text-lg rounded '
            type="text"
            placeholder='search here'
            value={query}
            onChange={(e)=>searchPost(e.target.value)}
             />
        </form>
      </div>
    </>
  )
}
