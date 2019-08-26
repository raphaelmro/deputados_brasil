import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {baseUrl} from "../api";
import LoadImage from "../LoadImage/LoadImage";

function LawmakerDetails(props) {
    const {id} = props.match.params
    const [lawmaker, setLawmaker] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        setLoaded(false)
        axios.get(`${baseUrl}/deputados/${id}`)
            .then(res => {
                setLawmaker(res.data.dados)
            })
        setLoaded(true)
    },[id])


    return (
        <div>
            {loaded ? <p>{JSON.stringify(lawmaker)}</p>: <LoadImage/>}
        </div>
    )
}

export default LawmakerDetails