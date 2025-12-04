'use client'

import {Title, Artist, Duration, Cover} from "../shared/ui/ui"
import cover from "../public/Cover.jpg";
import styles from './card.module.css';
import {useState} from "react";
import secondsToMMSS from "@/utils/secondsToMMSS";

export const Card = (track) =>{
    const {id, src, preview, duration, title, artists} = track
    const [svgqq, setImage] = useState(false);

    const formatedDuration = secondsToMMSS(duration);

    

    const handleImageChange = () =>{
        if(svgqq){
            setImage(false)
            console.log(svgqq)
        }
        else{
            setImage(true)
            console.log(svgqq)
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
                <div onClick={() => handleImageChange()}>                   
                    <i className={styles.reaction_2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={"black"} class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </i>
                </div>
                <div onClick={() => handleImageChange()}>                   
                    <i class="bi bi-bookmark-plus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </i>
                </div>
                <Duration duration={formatedDuration}/>
            </div>           
        </div>
    )
}