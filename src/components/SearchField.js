import React from "react"
import {useState, useEffect} from "react" 
import searchFieldCss from "../searchField.css"
import GifCard from "./GifCard"
import axios from 'axios';

export default function SearchField(){

    const myAPIkey = "UiZGWrYMCET0AZBfmHq49TPkz6vNFFSb";

    const [userInput, setUserInput] = useState("");
    const [gifArray, setGifArray] = useState([]);
    let apiUrl = "";

    const HandleSubmit = (event) =>{
        setGifArray([]);
        event.preventDefault();
      
        apiUrl = `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${myAPIkey}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(dataJson =>setGifArray(dataJson.data));
        };
    const renderGifs = gifArray.map((item) => {
        console.log(item);
        return (
            <GifCard 
                {...item}
            />
            );
    })
    return(
        <main>
        <form className="gif--form">
            <label className="label">Search for gif: </label>
            <input 
                className="input-field"
                type="text"
                value={userInput}
                onChange={(e => setUserInput(e.target.value))}
            />
            <input type="submit" className="submit-btn" onClick={HandleSubmit}/>
        </form>
        <div className="gif-container">
            {renderGifs} 
        </div>
        </main>
    )
}