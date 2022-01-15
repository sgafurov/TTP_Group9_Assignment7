import React from "react"
import {useState} from "react" 
import searchFieldCss from "../searchField.css"
import GifCard from "./GifCard"
import axios from 'axios';

export default function SearchField(){
    const myAPIkey = "UiZGWrYMCET0AZBfmHq49TPkz6vNFFSb";

    const [userInput, setUserInput] = useState();
    
    const apiData = `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${myAPIkey}`
    console.log(apiData);

    const fetchUserTerm = async () => {
        try {
            const response = await axios.get(apiData)
            setUserInput(response.data)
        } catch (e) {
            alert("Fetch Trending Error")
            console.log(e)
        }
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("The user entered: " + userInput);
    }
    return(
        <div>
        <form onSubmit={handleSubmit}className="gif--form">
            <label className="label">Search for gif: </label>
            <input 
                className="input-field"
                type="text"
                value={userInput}
                onChange={(e => setUserInput(e.target.value))}
            />
            <input type="submit" className="submit-btn" value="Submit" onClick={fetchUserTerm}/>
        </form>

        </div>
    )
}