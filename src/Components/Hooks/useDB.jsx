import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

const useDB = (dataBase) => {
    const [ db, setDb ] = useState(null);


    useEffect(() => {
        const database = getDatabase();             //поулчили базу данных
        const dataRef = ref(database, "dbmenu");    //получили ссылку на нужный раздел в нашей базе
        onValue(dataRef, (snapshot) => {            //методом onValue обращаемся к нашей ссылке и делаем скриншот(snapshot) БД(в месте, расположенном по ссылке)
            setDb(snapshot.val())                   // метод .val() извлекает и возвращает данные из того места / устанавливаем db = полученным данным
        })

    }, [])
    return db;
}


export default useDB