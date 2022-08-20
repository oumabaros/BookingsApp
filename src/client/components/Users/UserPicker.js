import React,{useState, useEffect} from "react";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function UserPicker () {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    //const [error, setError] = useState(null);

    useEffect(() => {
        getData("http://localhost:3001/users")
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(error => {
                //setError(error);
                setIsLoading(false);
            });
        }, []); 

        /*if (error) {
            return <p>{error.message}</p>
        }*/
        
        if (isLoading) {
            return <p><Spinner/> Loading users...</p>
        }
        

        return (
            <select>
                {
                    users.map((u)=>(
                        <option key={u.id}>
                            {u.name}
                        </option>
                    ))
                }
            </select>
    
        );
}