import React, { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import firebase from "firebase/compat/app";
// import { useEffect } from "react/cjs/react.production.min";


const useCurrentUser = ( auth ) => {
    const [ currentUser, setCurrentUser ] = useState({});

    useEffect(() => {
        (() => {if (auth.authentification) {
            const currentUserId =  firebase.auth().currentUser.uid;
            const dbRef = ref(firebase.database(), "users/" + currentUserId);
            onValue(dbRef, snapshot => {
                setCurrentUser(snapshot.val());
            })
        } })()
    },[auth.authentification])
    return { currentUser, setCurrentUser }
}

export default useCurrentUser