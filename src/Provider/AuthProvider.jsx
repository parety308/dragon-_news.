import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    };
    const createUserG = (provider) => {
        return signInWithPopup(auth, provider);

    }
    const createUserGit = (provider) => {
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unSuscribe = onAuthStateChanged((auth), (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSuscribe();
        }
    }, []);
    const updateUser = (userData) => {
        return updateProfile(auth.currentUser, userData);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        ;
    };
    const logOutUser = () => {
        return signOut(auth);
    }
    const authData = {
        user,
        setUser,
        createUser,
        loginUser,
        logOutUser,
        updateUser,
        createUserG,
        createUserGit,
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