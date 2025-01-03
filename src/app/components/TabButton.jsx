"use client";
import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-slate-200 border-b border-blue-300' : 'text-white'
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:slate-300 ${buttonClasses}`}>
                {children}
            </p>
        </button>

    )
}

export default TabButton