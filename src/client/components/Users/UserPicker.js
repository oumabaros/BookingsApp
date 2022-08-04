import React from "react";
import data from "../../static.json";

export default function UserPicker () {
    const users = data.users;

  return (
    <select>
        {
            users.map((u,i)=>(
                <option key={u.id}>
                    {u.name}
                </option>
            ))
        }
    </select>
    
  );
}