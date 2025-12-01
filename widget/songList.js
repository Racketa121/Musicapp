import styles from './songList.module.css';
import { Card } from './card';

export const SongList = ({songs}) =>{
    return(
        <div className={styles.tracklist}>
            {songs.map((track) =>{
                return(
                    <Card key = {track.id} {...track}/>
                )
            })}
            
        </div>
    )
}