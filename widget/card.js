import {Title, Artist, Duration, Cover} from "../shared/ui/ui"
import cover from "../public/Cover.jpg";
import styles from './card.module.css';

export const Card = (track) =>{
    const {id, src, preview, duration, title, artists} = track
    return(
        <div className={styles.main}>
            <div className={styles.naimg}>
                <Cover src={preview}/>   
                <div>
                        <Title children={title}/>
                        <Artist artist={artists}/>
                </div>
            </div>
            <div>
                <Duration duration={duration}/>
            </div>           
        </div>
    )
}