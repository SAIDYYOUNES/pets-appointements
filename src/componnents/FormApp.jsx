import React, { useState,useContext } from "react";
import { Icon } from "@iconify/react";
import { MyContext } from '../Mycontext';
// import fs from 'fs';
export const FormApp = () => {
  const { data, setData } = useContext(MyContext);

  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [aptNotes, setAptNotes] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  // const [aptDate, setAptDate] = useState("");
  // const [id, setId] = useState("");
  
  const handleSubmit =(e) => {
   const appd = date + " " + time;
    e.preventDefault();
    // const id = parseInt(data[Object.keys(data)[Object.keys(data).length - 1]].id)+1
    
    setData([...data,{
      'id': data.length,
      'petName':petName,
      'ownerName':ownerName,
      'aptNotes':aptNotes,
      'aptDate':appd
    }])
  };

  return (
    <div className=" ">
      <div className=" py-1 px-12 flex justify-start">
        <Icon
          className="text-red-600 text-3xl"
          icon="teenyicons:appointments-outline"
        />
        <h1 className="text-3xl">Your appointements</h1>
      </div>
      <div className="  flex items-center justify-center mx-12 mb-12">
        <div className="border border-black rounded pb-4 mx-auto w-full  bg-white">
          <div  className="rounded-t h-8 bg-blue-400">
            <div className="flex justify-start">
              <div className=" p-1 text-white flex gap-2 justify-center items-center">
                <Icon
                  className=" text-white"
                  icon="teenyicons:appointments-outline"
                />
                <h1 className="">Add appointements</h1>
              </div>
            </div>
          </div>
          <form>
            <div className=" mt-4 w-6/12 flex justify-around mb-5">
              <label className="mb-3   font-medium text-[#07074D]">
                Owner Name
              </label>
              <input
                onChange={(e) => setOwnerName(e.target.value)}
                type="text"
                name="ownerName"
                className=" rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className=" mt-4 w-6/12 flex justify-around mb-5">
              <label className="mb-3   font-medium text-[#07074D]">
                Pet name
              </label>
              <input
                type="text"
                name="petName"
                onChange={(e) => setPetName(e.target.value)}
                className=" rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className=" mt-4 w-6/12 flex justify-around mb-5">
              <label className="mb-3   font-medium text-[#07074D]">
                Owner Name
              </label>
              <input
                onChange={(e) => setTime(e.target.value)}
                type="time"
                name="time"
                className=" rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className=" mt-4 w-6/12 flex justify-around mb-5">
              <label className="mb-3   font-medium text-[#07074D]">
                Owner Name
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                name="date"
                className=" rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="flex justify-around">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Appointement Notes
              </label>
              <textarea
                onChange={(e) => setAptNotes(e.target.value)}
                cols="100"
                className=' rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"'
                name=""
                id=""
              ></textarea>
            </div>

            <div className=" pt-3 flex justify-end">
              <button
                onClick={handleSubmit}
                className=" mr-3 bg-blue-400 hover:shadow-form w-25 rounded-md  py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
