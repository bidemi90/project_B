import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
const Sqiuploaddocument = () => {
  return (
<>
<section>
    <div className=' p-3 card bg-light p-3 m-3 border-0 '>
   <p className=' m-0 my-2 text-uppercase '> DOCUMENTS</p>
   <p className=' m-0 my-2 text-capitalize '> You have not uploaded any document here</p>
    </div>
    <button className='profileeditbutton'>
    <MdAddCircleOutline className=" fs-2"/>
    </button>
</section>
</>
)
}

export default Sqiuploaddocument