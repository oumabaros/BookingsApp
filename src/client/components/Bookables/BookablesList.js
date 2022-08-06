import React from "react";
import data from "../../static.json";
import { useState,Fragment } from "react";
import {FaArrowRight} from "react-icons/fa";


export default function BookablesList(){
    const [group, setGroup] = useState("Rooms");
    const {bookables} = data;
    const bookablesInGroup=bookables.filter(b=>b.group===group);
    const [bookableIndex,setBookableIndex]=useState(0);
    const groups = [...new Set(bookables.map(b => b.group))];
    const bookable = bookablesInGroup[bookableIndex];
    const [hasDetails, setHasDetails] = useState(false);

    function changeBookable(selectedIndex){
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }
    function nextBookable () {
        setBookableIndex(bookableIndex => (bookableIndex + 1) % bookablesInGroup.length);
    }

    return(
        <Fragment>
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
        {
            bookable && (
                <div className="book-details">
                    <div className="item">
                        <div className="item-header">
                            <h2>
                                {bookable.title}
                            </h2>
                            <span className="controls">
                                <label>
                                    <input type="checkbox" checked={hasDetails} onChange={()=>setHasDetails(has=>!has)} />
                                    Show Details
                                </label>
                            </span>
                        </div>
                        <p>{bookable.notes}</p>
                        {hasDetails && (
                            <div className="item-details">
                                <h3>Availability</h3>
                                <div className="bookable-availability">
                                    <ul>
                                        {
                                            bookable.days.sort().map(d=><li key={d}>{ bookable.days[d]}</li>)
                                            
                                        }
                                    </ul>
                                    <ul>
                                        {
                                            bookable.sessions.map(s=><li key={s}>{ bookable.sessions[s]}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )
        }
        </Fragment>
    );

}
