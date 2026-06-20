import React from 'react'
import Container from "../components/common/Container.jsx";
import ManagePassCard from '../components/common/ManagePassCard.jsx';

const ManagePass = () => {
  return (
    <Container>
      <div className='w-full mt-40 flex items-center justify-center'>
        <input type="text" placeholder='Search...' className='w-80 h-10 border border-neutral-700/50 rounded-xl ps-4 outline-none focus:border-[#47f375] transition-all duration-200 ease'/>
      </div>

      <div className='w-full my-15 grid grid-cols-1 md:grid-cols-3'>
        <ManagePassCard />
      </div>
    </Container>
  )
}

export default ManagePass