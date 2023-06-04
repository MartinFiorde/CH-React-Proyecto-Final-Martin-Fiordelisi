import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const [localUser, setLocalUser] = useState({
        email: null,
        logged: false
    })
    // console.log("localUser",localUser);

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => console.log(e))

    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => console.log("userCredential", userCredential))
            .catch(e => console.log(e))
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // console.log("user", user);
            if (user) {
                setLocalUser({
                    email: user.email,
                    logged: true
                })
            } else {
                setLocalUser({
                    email: null,
                    logged: false
                })
            };
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user: localUser,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
};