import React,{useState,useEffect} from "react";
import WeekPicker from "./WeekPicker";
import BookablesList from "../Bookables/BookablesList";
import Bookings from "./Bookings";
import Spinner from '../UI/Spinner';
import getData from '../../utils/api';


export default function BookingsPage () {
    const [bookable, setBookable] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData("http://localhost:3001/bookables")
        .then(bookables => {
            setBookable(bookables[0]);
        })
        .catch(error => {
            setError(error);
            setIsLoading(false)
        });
        }, [setBookable]);

    if (error) {
        return <p>{error.message}</p>
    }
    
    /*if(isLoading){
        return <p><Spinner/> Loading bookables...</p>
    }*/
    return (
    <main className="bookings-page">
      <BookablesList bookable={bookable} setBookable={setBookable}/>
      <Bookings bookable={bookable}/>
    </main>
    );
}