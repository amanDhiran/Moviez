import React, { useState } from 'react'

function SwitchTabs({data, onTabChange}) {
    const [selectedTab, setSelectedTab] = useState(0)
    const [left, setLeft] = useState(0)

    const activeTab = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTab(index)
        }, 300)
        onTabChange(tab, index)
    }

  return (
    <div className='h-[34px] bg-white rounded-[20px] p-[2px]'>
        <div className='flex items-center h-[30px] relative'>
            {data.map((tab,index) => (
                <span 
                key={index} 
                className={`h-full flex items-center justify-center w-[100px] text-black text-sm relative z-[1] cursor-pointer transition-colors ease-in-out duration-[0.3s] ${selectedTab === index ? "text-white" : ""}`}
                onClick={() => activeTab(tab, index)}
                >
                    {tab}
                </span>
            ))}
            <span className="h-[30px] w-[100px] rounded-[15px] bg-gradient absolute left-0 transition-[left] ease-[cubic-bezier(0.88,-0.35,0.565,1.35)] duration-[0.4s]" style={{left}} />
        </div>
    </div>
  )
}

export default SwitchTabs