import React from "react"
import GifCardCss from "../gifCard.css"

export default function GifCard(props){
    return(
        <img className="giffy" src={props.images.original.url}/>
    )
}