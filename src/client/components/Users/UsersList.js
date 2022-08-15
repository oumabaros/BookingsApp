import React from "react";
import { useState,Fragment,useEffect } from "react";
import Spinner from "../UI/Spinner";

export default function UsersList () {
    const [users, setUsers] = useState(null);
    const [userIndex, setUserIndex] = useState(0);
    const user = users?.[userIndex];

    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(resp => resp.json())
        .then(data => setUsers(data));
    }, []);

    if (users === null) {
        return <Spinner/>
    }
    
    return (
    <Fragment>
       <div>
       <ul className="bookables items-list-nav">
            {users.map((u,i)=>(
                <li key={u.id} className={i === userIndex ? "selected" : null}>
                    <button className="btn" onClick={() => setUserIndex(i)}>
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