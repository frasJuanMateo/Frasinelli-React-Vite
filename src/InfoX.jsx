import { useState, useEffect } from 'react'
import './App.css'

function InfoX() {
    const [factData, setFactData] = useState("");
    const [reloadFlag, setReloadFlag] = useState(1);
    useEffect(() => {
        fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then(response => {
            if (response.ok == false) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            else {return response}
        })
        .then(response => response.json())
        .then(json => setFactData(json))
        .catch(error => console.log(error));
    }, [reloadFlag]);

    return (
        <>
            <h1>{factData.text}</h1>
            <p>Source: {factData.source}</p>
            <button onClick={() => setReloadFlag(!reloadFlag)}>Recargar</button>
        </>
    ); 
}

export default InfoX;
