import React, { useState } from "react";
import User from "./User";
export default function ListUser({utilisateurs,allPosts}){
   
   
    return(
    <div  >
    {utilisateurs ?
       ( utilisateurs.map((userinfo,index)=>{
             return <User userinfo={userinfo}     allPosts={allPosts}  key={index}/>
        })):'no user to show'
    }
    </div>)
    }
    