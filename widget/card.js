'use client'

import {Title, Artist, Duration, Cover} from "../shared/ui/ui"
import cover from "../public/Cover.jpg";
import styles from './card.module.css';
import {useState} from "react";
import secondsToMMSS from "@/utils/secondsToMMSS";

export const Card = (track) =>{
    const {id, src, preview, duration, title, artists} = track
    const [color, setColor] = useState(false);

    const formatedDuration = secondsToMMSS(duration);

    const handleChangeColor = () =>{
        if(color){
            setColor(false)
            console.log(color)
        }
        else{
            setColor(true)
            console.log(color)
        }
    }

    return(
        <div className={styles.main}>
            <div className={styles.naimg}>
                <Cover src={preview}/>   
                <div>
                        <Title children={title}/>
                        <Artist artist={artists}/>
                </div>
            </div>
            <div className={styles.reaction}>
                <div onClick={() => handleChangeColor()}>
                    <i class="bi bi-bookmark-plus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color ? "orange" : "black"} class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
                        </svg>
                    </i>
                </div>
                <Duration duration={formatedDuration}/>
            </div>           
        </div>
    )
}