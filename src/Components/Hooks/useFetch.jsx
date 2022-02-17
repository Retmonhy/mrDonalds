import { useEffect, useState } from "react"
import { getDatabase, ref, onValue} from "firebase/database";
const useFetch = () => {
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState(null)
    useEffect( () =>     
                    (async () => {
                    //         try {
                    //             const json = await fetch("DB.json"); //получаем данные с хостинга, из файла "DB.json"
                    //             const res = await json.json();          //преобрауем в ...
                    //             setResponse(res) //устанавливаем значение response равное res
                    //         } catch (err) { setError(err)}
                    // })()

                    try {
                        const database = getDatabase();             // получаем нашу базу данных
                        const dbRef = ref(database, "dbmenu" );         //получаем путь на нужное место в базе данный ( у меня это /dbmenu с его внутренностями)
                        onValue(dbRef, (snapshot) => {              //используя onValue на наш путь(res), мы получаем "скриншот(snapshot)" того места, в момент вызова метода onValue
                            const data = snapshot.val();            // извлекаем данные из res с помощью метода .val()
                            setResponse(data)                       // тут мы устанавливаем значение положительногго запроса (response) равному data, то есть нашим полученным данным
                        })
                    } catch (err) { setError(err)}
            })()
            , [])
    return { response, error }
}
export default useFetch; 