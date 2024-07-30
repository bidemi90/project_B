import React from "react";

const Sqipaymenthis = () => {
  return (
    <>
      <section>
        <div className=" p-3 m-4 card border-0 shadow">
          <p className="m-0  mb-2"> PAYMENT HISTORY </p>
          <div className=" p-3 card border mb-4">
            <div>
              <button className=" btn btn-primary p-2 m-2">
                print summary
              </button>
              <button className=" btn btn-primary p-2 m-2">
                print clearance
              </button>
              <button className=" btn btn-primary p-2 m-2">
                download clearancePDF
              </button>
            </div>

            <div>
              <table className="w-100">
                <tr className="  border-bottom border-top">
                  <td className=" py-3"> INVOICE# </td>
                  <td className=" py-3">AMOUNT TO BE PAID </td>
                  <td className=" py-3">AMOUNT PAID </td>
                  <td className=" py-3">BALANCE </td>
                  <td className=" py-3">DATE </td>
                  <td className=" py-3">ACTION</td>
                  <td className=" py-3"></td>
                </tr>
                <tr>
                  <td> Lorem ipsum, dolor sit amet. </td>
                  <td> Lorem </td>
                  <td>Lorem </td>
                  <td>Lorem </td>
                  <td>Lorem </td>
                  <td><button className=" btn btn-primary p-2 m-2 ">
                    print</button></td>
                  <td><button className=" btn btn-primary p-2 m-2 ">
                  download</button></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sqipaymenthis;
