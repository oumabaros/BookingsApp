import React,{useState, useEffect} from "react";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function UserPicker ({user,setUser}) {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    //const [error, setError] = useState(null);

    useEffect(() => {
        getData("http://localhost:3001/users")
            .then(data => {
                setUsers(data);
                setUser(data[0]);
                setIsLoading(false);
            })
            .catch(error => {
                //setError(error);
                setIsLoading(false);
            });
        }, [setUser]); 

        /*if (error) {
            return <p>{error.message}</p>
        }*/
        
        if (isLoading) {
            return <p><Spinner/> Loading users...</p>
        }
        
        function handleSelect(e){
            const selectedID = parseInt(e.target.value, 10);
            const selectedUser = users.find(u => u.id === selectedID);
            setUser(selectedUser)
        }

        return (
            <select className="user-picker" onChange={handleSelect} value={user?.id}>
                {
                    users.map((u)=>(
                        <option key={u.id} value={u.id}>
                            {u.name}
                        </option>
                    ))
                }
            </select>
    
        );
}