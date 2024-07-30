import React from "react";

const Sqichangepassword = () => {
  return (
    <>
      <section>
        <div className=" card bg-light border-0 p-3 m-3">
          <p>CHANGE PASSWORD</p>

         <div>
         <p className="mt-2">Old Password</p> 
          <input type="text" placeholder=" " className=" form-control p-3" />
         <p className="mt-2"> New Password</p>
          <input type="text" placeholder=" " className=" form-control p-3" />
          <p className="mt-2"> Confirm New Passcode</p>
          <input type="text" placeholder=" " className=" form-control p-3" />
          <button className=" btn btn-primary text-light p-2 my-3">
            save changes
          </button>
         </div>
        </div>
        
      </section>
    </>
  );
};

export default Sqichangepassword;
