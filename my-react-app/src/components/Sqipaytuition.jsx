import React from "react";

const Sqipaytuition = () => {
  return (
    <>
      <section>
        <div className=" p-3 m-4 card border-0 shadow">
          <p className="m-0  mb-5">
            {" "}
            TUITION PAYMENT{" "}
            <span className=" text-danger ms-2">(invoices)</span>
          </p>
          <div className=" p-3 card border-0 shadow mb-4">
            <p className="m-0 ">
              DSE-WDFS - PDC - LEVEL 3 - FIRST SEMESTER
              <span className=" bg-success text-light fw-semibold ms-2 p-1 rounded-1">
                PAID
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sqipaytuition;
