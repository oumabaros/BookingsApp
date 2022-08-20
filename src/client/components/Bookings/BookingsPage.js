import React,{useState,useEffect} from "react";
import WeekPicker from "./WeekPicker";
import BookablesList from "../Bookables/BookablesList";
import Bookings from "./Bookings";
import Spinner from '../UI/Spinner';
import getData from '../../utils/api';


export default function BookingsPage () {

    const [bookable, setBookable] = useState(null);
    
    return (
    <main className="bookings-page">
      <BookablesList bookable={bookable} setBookable={setBookable}/>
      <Bookings bookable={bookable}/>
    </main>
    );
}