import { createContext, useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import app from "../firbase.config";

export const AuthContext = createContext(null)
export const auth = getAuth(app)

const ShareProvider = ({children}) => {
  

const [user, setUser] = useState(null);



const createUser = (email, password) => {

return createUserWithEmailAndPassword(auth, email, password)
}


const signUser = (email, password) => { 

    return signInWithEmailAndPassword(auth, email, password)
   
}


useEffect(() => {
const unSubscribe = onAuthStateChanged(auth, (userOnline) => {
    setUser(userOnline);

})
return () => unSubscribe();

}, [])



const singOut = () => {
 
    return signOut(auth)
}






    const allData = {
        user,
        createUser,
        signUser,
        singOut,


    }

    return (
        <AuthContext.Provider value={allData}>
            {
                children
            }
            
        </AuthContext.Provider>
    );
};

export default ShareProvider;