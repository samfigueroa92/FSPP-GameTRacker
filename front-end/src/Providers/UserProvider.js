import { useEffect, useState, createContext } from "react";
import { auth } from "../Services/Firebase";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
    const [user, setUser] = useState("");

    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            console.log(user)

            if(user){
                const { email, displayName, photoURL, uid } = user;
                setUser({ email, displayName, photoURL, uid });
            }else{
                setUser(null);
            };
        });
    }, []);

    return (
        <>
        <UserContext.Provider value={user}>
            <div>
                { props.children }
            </div>
        </UserContext.Provider>
        </>
    );
};