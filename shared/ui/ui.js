import Image from "next/image"
import styles from '../ui/ui.module.css';

export const Cover = ({src}) =>{
    return(
        <Image scr={src} alt="обложка"/>
    )
}

export const Title = ({children}) =>{
    return(
        <span className={styles.title}>{children}</span>
    )
}

export const Artist = ({artist}) =>{
    return(
        <p>{artist}</p>
    )
}

export const Duration = ({duration}) =>{
    return(
        <span>{duration}</span>
    )
}


