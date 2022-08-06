import React from "react";
import data from "../../static.json";
import { useState,Fragment } from "react";

export default function UsersPage () {
    
    const users = data.users;
    const [userIndex,setUserIndex]=useState(0);
    const user = users[userIndex];

    function changeUserIndex(selectedIndex){
        setUserIndex(selectedIndex);
        console.log(selectedIndex);
    }

  return (
    <Fragment>
       <div>
       <ul className="bookables items-list-nav">
            {users.map((u,i)=>(
                <li key={u.id} className={i === userIndex ? "selected" : null}>
                    <button className="btn" onClick={()=>changeUserIndex(i)}>
                        {u.name}
                    </button>
                </li>
            ))}
        </ul>
       </div>
        {
            user&&(
                <div className="booking-details">
                    <div className="item">
                        <div className="item-header">
                            <h2>
                                {user.name}
                            </h2>
                        </div>
                        <div className="item-details">
                            <h3>{user.title}</h3>
                        </div>
                        <p>{user.notes}</p>
                    </div>
                </div>
            )
        }
       </Fragment>
  );
}