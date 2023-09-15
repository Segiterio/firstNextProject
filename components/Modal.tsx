import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({setShowModal}:{setShowModal:any}) => {
  const formPostions = [
    { id: 0, title: "Basic" },
    {
      id: 1,
      title: "Contact",
    },
  ];

  const [position, setPosition] = useState(0);

  return (
    <div className="fixed inset-0 bg-opacity-50 bg-gray-500 flex items-center justify-center">
      <div className="flex flex-col w-[550px]">
        <div className="border rounded-t-xlPlus bg-white">
          <div className="flex justify-between items-center px-4 py-2">
            <div>Add New Profile</div>
            <RxCross2 className="hover:cursor-pointer" onClick={() => {
               setShowModal(false)
            }} />
          </div>
        </div>
        <div className="border rounded-b-xlPlus p-2 bg-white ">
          <div className="grid-cols-2 gap-5 grid">
            {formPostions.map((item) => (
              <div className="flex flex-col gap-1" key={item.id}>
                <div
                  className="self-center hover:cursor-pointer"
                  onClick={() => {
                     if(position == 1){
                      setPosition(0);
                     }
                     else{
                       setPosition(1);
                     }
                     return;
                  }}
                >
                  {item.title}
                </div>
                <div
                  className={`w-full rounded-full h-1 ${
                    position == item.id ? "bg-blue-600" : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <form>
            {position == 0 ? (
              <div>
                <div className="flex flex-col my-2 ">
                  <label htmlFor="name" className="after:content-['*'] after:text-red-500">
                    Enter Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded-lg focus:outline-none px-2 py-1"
                    placeholder="Eg. John Doe"
                  />
                </div>
                <div className="flex flex-col my-2 ">
                  <label htmlFor="email" className="after:content-['*'] after:text-red-500">
                    Enter Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded-lg focus:outline-none px-2 py-1"
                    placeholder="Eg. JohnDoe@email.com"
                  />
                </div>
                <div className="flex flex-col my-2 ">
                  <label htmlFor="phone" className="after:content-['*'] after:text-red-500">
                    Enter Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="border rounded-lg focus:outline-none px-2 py-1"
                    placeholder="Eg. John Doe"
                  />
                  <button
                    type="button"
                    className="self-end border bg-blue-500 px-2 py-1 rounded-md mt-2 text-white"
                  onClick={() => {
                     setPosition(1);
                  }}>
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
