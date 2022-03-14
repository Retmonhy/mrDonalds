import { useEffect, useState } from "react";
import { setInfoAboutUser } from "../Supp/SuppFunc/SuppFunctions";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; //вернет объект для управ
const useAuth = (authFirebase) => {
    const [ authentification, setAuthentification ] = useState(null);
    const database = firebase.database();
    
    const auth = authFirebase(); //это объект  с авторизацией

    
    const provider = new authFirebase.GoogleAuthProvider(); 
                            //также authFirebase мы используем для метода GoogleAuthProvider, 
                            //чтобы создать провайдер и передать его в метод signInWithPopUp ниже

    const logIn = () => auth.signInWithPopup(provider)
                        .then(response => {
                            const user = response.user;
                            const userUid = user.uid;
                            const data = {
                                firstName: user.displayName.split(' ')[0] || '',
                                secondName: user.displayName.split(' ')[1] || '',
                                email: user.email || '',
                                phone: user.phone ?? '',
                            }
                            setInfoAboutUser(userUid, data, database)
                        })
                        .catch(error => {
                            console.log('error = ', error)
                        })

        ; //создали объект с авторизацией auth для того чтобы использовать метод signInWithPopUp() 
                    //метод signOut возвращает нам промис, его можно обработать как-то, но мы не будем
    const logOut = () => auth.signOut()
        // .then()
        .catch(err => console.log(err))
    useEffect(() => {
                            //снова обращаемся к объекту auth и вызываем метод onAuthStageChanged
                            //если объект user передан, то мы запустим функцию для смены значения   authentification
        auth.onAuthStateChanged(user => {
            if(user) {
                setAuthentification(user)
            } else {setAuthentification(null)}
        })
    }, [auth, authentification])
    return { authentification, logIn, logOut }
                            // authentification - содержит все данные аутентифицировавшегося пользователя,
                            // login - функция, выполняет аутентификацию
}

export default useAuth;