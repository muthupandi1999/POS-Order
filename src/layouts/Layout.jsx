import React from 'react'

export default function Layout({ children }) {

    return (
        <div className='m-4 font-cairoRegular'>
            <header className='flex items-center justify-center gap-x-10 bg-Light text-Primary w-full h-14 rounded-xl'>
                
            </header>
            {children}
            {/* <footer></footer> */}
        </div>
    )
}
