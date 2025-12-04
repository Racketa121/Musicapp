import styles from './player.module.css';
import { Title, Artist, Duration, Cover } from "../shared/ui/ui";
import cover from '../public/cover.jpg';
import { useState } from "react";


export const Player = (track) =>{
    const {id, src, preview, title, artists} = track;
    const [color, setColor] = useState(false);

    const handleChangeColor = () =>{
        if(color){
            setColor(false)
            console.log(color)
        }else{
            setColor(true)
            console.log(color)
        }
    }

    return(
        <div className = {styles.main}>
            <div className={styles.naming}>
                <Cover src={preview}/>
                <div>
                    <Title children="I am music"/>
                    <Artist artist="PlayBoi Catri"/>
                </div>
            </div>
        </div>
    )
}