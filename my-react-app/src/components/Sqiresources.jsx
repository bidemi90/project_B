import React from 'react'

const Sqiresources = () => {
  return (
   <>
   <section>
   <div className='p-3'>

<p className='m-0 mt-3 fs-6'>SELECT SEMESTER</p>

 
<div className=' d-flex justify-content-evenly align-items-center mb-5'>
<select className="custom-select my-1 mr-sm-2 thebottomselect w-50">
  <option selected>   PDC - DSE-WDFS - LEVEL 3 - First Semester</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
</select>
<input type="text" className=' form-control w-50' placeholder='Search Here..' />
</div>

    <div className=' card border-0 mt-5'>
<p className=' text-center fw-bold fs-5 p-3 shadow'>You currently do not have any course/resource to view for this semester, kindly check to ensure that you have registered for the courses.</p>
    </div>
   </div>
   </section>
   </>
  )
}

export default Sqiresources