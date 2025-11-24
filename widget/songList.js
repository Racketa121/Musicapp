import styles from './songList.module.css';
import tracksList from '@/assets/tracksList';
import { Card } from './card';

export const SongList = () =>{
    return(
        <div className={styles.tracklist}>
            {tracksList.map((track) =>{
                return(
                <Card key = {track.id} {...track}/>
                )
            })}
            
        </div>
    )
}