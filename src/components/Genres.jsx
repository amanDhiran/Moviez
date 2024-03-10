import React from 'react'
import { useSelector } from 'react-redux'

function Genres({ data, className }) {
    const {genres} = useSelector((state) => state.home)
    
  return (
    <div className={`flex gap-[5px] ${className}`}>
        {data?.map((g) => {
            if(!genres[g]?.name) return;
            return (
                <div key={g} className=" bg-gradient py-[3px] px-[5px] text-xs rounded-[4px] text-white whitespace-nowrap">
                    {genres[g]?.name}
                </div>
            )
        })}
    </div>
  )
}

export default Genres