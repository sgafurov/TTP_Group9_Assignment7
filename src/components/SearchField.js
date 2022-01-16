import React from "react"
import {useState, useEffect} from "react" 
import searchFieldCss from "../searchField.css"
import GifCard from "./GifCard"
import axios from 'axios';

export default function SearchField(){

    const myAPIkey = "UiZGWrYMCET0AZBfmHq49TPkz6vNFFSb";
    
    const [userInput, setUserInput] = useState("");
    const [gifArray, setGifArray] = useState([]);
    const trendingApiUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${myAPIkey}`;
    const randomApiUrl = `http://api.giphy.com/v1/gifs/random?api_key=${myAPIkey}`;
    let apiUrl = "";

    const HandleSubmit = (event) =>{
        event.preventDefault();
        setGifArray([]);
        if(event.target.id === "submit_button"){
            apiUrl = `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${myAPIkey}`;
        }else if(event.target.id === "trending_button"){
            apiUrl = trendingApiUrl;
        }else{
            apiUrl = randomApiUrl;
        }
      
        fetch(apiUrl)
            .then(res => res.json())
            .then(dataJson =>{
                
                setGifArray(dataJson.data)
                
            })

        };
        
    const renderGifs = gifArray.map((item) => {
        //console.log(item);
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
            <input type="submit" className="submit-btn" id="submit_button" onClick={HandleSubmit}/>
            <button className="submit-btn" id="trending_button" onClick={HandleSubmit}>Trending</button>
            <button className="submit-btn" id="random_button" onClick={HandleSubmit}>Random</button>
        </form>
        
        <div className="gif-container">
            {renderGifs} 
        </div>
        </main>
    )
}