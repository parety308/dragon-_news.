import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => console.log(error));

    };
    useEffect(() => {
        const unSuscribe = onAuthStateChanged((auth), (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSuscribe();
        }
    }, []);
    console.log(user);
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    };
    const logOutUser = () => {
        signOut(auth)
        .then(
            alert('LogOut SuccessFully')
        )
        .catch(error=>console.log(error));
    }
    const authData = {
        user,
        setUser,
        createUser,
        loginUser,
        logOutUser,

    };
    return (
        <div>
            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;