import React from "react";
import { useState,Fragment,useEffect,useReducer } from "react";
import Spinner from "../UI/Spinner";
import reducer from "./reducer";
import getData from '../../utils/api';

const initialState={
    users:[],
    isLoading:true,
    error:false,
    userIndex:0
};

export default function UsersList () {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {users, isLoading, error,userIndex} = state;
    //const user = users?.[userIndex];
    const user = users[userIndex];
    
    useEffect(
        ()=>{
                dispatch({type: "FETCH_USERS_REQUEST"});
                getData("http://localhost:3001/users").then(users => dispatch({
                    type: "FETCH_USERS_SUCCESS",
                    payload: users
                })).catch(error => dispatch({
                    type: "FETCH_USERS_ERROR",
                    payload: error
                }));
            },[]
        );

        if (error) {
            return <p>{error.message}</p>
        }
        
        if(isLoading){
            return <p><Spinner/> Loading users...</p>
        }

        function changeUserIndex (userIndex) {
            dispatch({
              type: "SET_USER",
              payload: userIndex
            });
          }
    return (
    <Fragment>
       <div>
       <ul className="bookables items-list-nav">
            {users.map((u,i)=>(
                <li key={u.id} className={i === userIndex ? "selected" : null}>
                    <button className="btn" onClick={() => changeUserIndex(i)}>
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