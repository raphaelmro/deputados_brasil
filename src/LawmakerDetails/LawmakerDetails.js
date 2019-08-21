import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import {baseUrl} from "../api";
import LoadImage from "../LoadImage/LoadImage";

function LawmakerDetails(props) {
    const {id} = props.match.params
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)

    const fetchLawmakersByFU = useCallback(async () => {
        const response  = await axios.get(`${baseUrl}/deputados/${id}`)
        setData(response.data.dados)
        setLoaded(true)
        console.log(data)
    }, [data, id])
    useEffect(() => {
        fetchLawmakersByFU()
    },[fetchLawmakersByFU])


    return (
        <div>
            {loaded ? <p>{JSON.stringify(data)}</p>: <LoadImage/>}
        </div>
    )
}

export default LawmakerDetails