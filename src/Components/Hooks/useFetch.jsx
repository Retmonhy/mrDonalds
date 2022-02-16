import { useEffect, useState } from "react"

const useFetch = () => {
    const [ response, setResponse ] = useState(null);
    const [ error, setError ] = useState(null)
    useEffect( () =>     
                    (async () => {
                            try {
                                const json = await fetch("DB.json"); //получаем данные с хостинга, из файла "DB.json"
                                const res = await json.json();          //преобрауем в ...
                                setResponse(res) //устанавливаем значение response равное res
                            } catch (err) { setError(err)}
                    })()
            , [])
    return { response, error }
}
export default useFetch; 