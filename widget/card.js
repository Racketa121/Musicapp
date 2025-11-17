import {Title, Artist, Duration, Cover} from "../shared/ui/ui"
import cover from "../public/Cover.jpg";
import styles from './card.module.css';

export const Card = ({}) =>{
    return(
        <div className={styles.main}>
            <div className={styles.naimg}>
                <Cover src={cover}/>   
                <div>
                        <Title children="Название"/>
                        <Artist artist="Артист"/>
                </div>
            </div>
            <div>
                <Duration duration="Длительность"/>
            </div>           
        </div>
    )
}