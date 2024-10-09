"use client";
import React, { useState } from "react";
import UploadImage from "./../components/UploadImage.jsx"
import UserTag from "/home/king888/Desktop/First Fix/pinterest-clone/pinterest-clone/app/components/UserTag.jsx"
import { useSession } from 'next-auth/react';

function Form() {
    const {dat:session}=useSession;
    const {title, setTitle}= useState();
    const {desc,setDesc}= useState();
    const {link,setLink}= useState();
    const {file,setFile}= useState();

    const onSave=()=>{
        console.log("Title: ", title,"Desc",desc,"Link",link)
    }
    
    return(
        <div className="bg-white p-16 rounded-2x1">
            <div className="flex justify-end md-6">
                <button onClick={()=>onSave}
                className="bg-red-500 p-2
                text-white font-semibold px-3 rounded-1g">
                    Save
                </button>

            </div>
        <div className="grid grid-cols-1 1g:grid-cols-3 gap-10">
            <UploadImage />
        
        <div className="col-span-2">
        <div className="w-[100%]">
            <input type="text" placeholder="Add your title"
                onChange={(e)=> setTitle(e.target.value)}
            className="text-[35px] outline-none font-bold w-full
            border-b-[2px] border-gray-400 placeholder-gray-400"/>
        <h2 className="text-[12px] w-full text-gray-400">
            The first 40 characters are what usually shown up in foods
        </h2>
        <UserTag />
        <textarea type="text" placeholder="Tell everyone what your pin is about"
            onChange={(e)=> setDesc(e.target.value)}
        className="outline-none w-full mt-8 pb-4 text-[14px]
        border-b-[2px] border-gray-400 placeholder-gray-400"/>
            <input type="text" placeholder="Add a Destination Link"
                onChange={(e)=> setLink(e.target.value)}
            className="outline-none w-full pb-4 mt-[90px]
            border-b-[2px] border-gray-400 placeholder-gray-400" />
        </div>
        </div>
        </div>

        </div>
    )
}
export default Form