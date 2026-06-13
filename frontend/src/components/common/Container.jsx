import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='w-full px-5 md:px-0 md:max-w-3xl lg:max-w-4xl xl:max-w-[1600px] mx-auto'>
        { children }
    </div>
  )
}

export default Container