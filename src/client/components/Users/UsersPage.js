import React,{useState,useContext} from "react"; // import useState
import UsersList from "./UsersList";
import UserDetails from "./UserDetails"; // import new component
import UserContext from "../Users/UserContext";

export default function UsersPage () {
  // manage selected user state
  const [user, setUser] = useState(null);
  // get the user from context
  const loggedInUser = useContext(UserContext);

  // if no user has been selected in the users list,
  // select the logged in user
  const currentUser = user || loggedInUser;

  // pass user state down
  return (
    <main className="users-page">
      <UsersList user={currentUser} setUser={setUser}/>
      <UserDetails user={currentUser}/>
    </main>
  );
}