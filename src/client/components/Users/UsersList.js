import React from "react";
import data from "../../static.json";
import { useState } from "react";

export default function UsersPage () {
    
    const users = data.users;
    const [userIndex,setUserIndex]=useState(0);
    
    function changeUserIndex(selectedIndex){
        setUserIndex(selectedIndex);
        console.log(selectedIndex);
    }

  return (
    <main className="users-page">
       <ul className="bookables items-list-nav">
            {users.map((u,i)=>(
                <li key={u.id} className={i === userIndex ? "selected" : null}>
                    <button className="btn" onClick={()=>changeUserIndex(i)}>
                        {u.name}
                    </button>
                </li>
            ))}
        </ul>
    </main>
  );
}