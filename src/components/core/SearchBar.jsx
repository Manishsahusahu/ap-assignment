import React from 'react'
import image from '../../assets/ic_videoseries.png'
import {AiOutlineSearch} from 'react-icons/ai'


const SearchBar = () => {
  return (
    <div className='flex items-center justify-center space-x-3 px-4 h-16 border-b-2'>
        <div className="image mr-auto">
            <img src={image} width={100} alt="" />
        </div>
        <div className="searchBox text-xl"><AiOutlineSearch /></div>
        <div className="button bg-red-600 px-2 py-1 rounded-md text-white">My Video Series</div>
    </div>
  )
}

export default SearchBar