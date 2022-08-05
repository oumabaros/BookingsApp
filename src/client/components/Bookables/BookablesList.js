import React from "react";
import data from "../../static.json";
import { useState } from "react";
import {FaArrowRight} from "react-icons/fa";


export default function BookablesList(){
    const [group, setGroup] = useState("Rooms");
    const {bookables} = data;
    const bookablesInGroup=bookables.filter(b=>b.group===group);
    const [bookableIndex,setBookableIndex]=useState(0);
    const groups = [...new Set(bookables.map(b => b.group))];


    function changeBookable(selectedIndex){
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }
    function nextBookable () {
        setBookableIndex(bookableIndex => (bookableIndex + 1) % bookablesInGroup.length);
    }

    return(
        <div>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
                {groups.map(g => <option value={g} key={g}>{g}</option>)}
            </select>
            <ul className="bookables items-list-nav">
                {bookablesInGroup.map((b,i)=>(
                    <li key={b.id} className={i === bookableIndex ? "selected" : null}>
                        <button className="btn" onClick={()=>changeBookable(i)}>
                            {b.title}
                        </button>
                    </li>
                ))}
            </ul>
            <p>
                <button className="btn" onClick={nextBookable} autoFocus>
                    <FaArrowRight/>
                    <span>Next</span>
                </button>
            </p>
        </div>
    );

}