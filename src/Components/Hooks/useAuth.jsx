import { useEffect, useState } from "react";

const useAuth = (authFirebase) => {
    const [ authentification, setAuthentification ] = useState(null);
    
    const auth = authFirebase(); //это объект  с авторизацией

    
    const provider = new authFirebase.GoogleAuthProvider(); 
                            //также authFirebase мы испоьуем для метода GoogleAuthProvider, 
                            //чтобы создать провайдер и передать его в метод signInWithPopUp ниже

    const logIn = () => auth.signInWithPopup(provider); //создали объект с авторизацией auth для того чтобы использовать метод signInWithPopUp() 
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