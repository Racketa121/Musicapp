import Image from "next/image"
import styles from '../ui/ui.module.css';


export const Cover = ({src}) =>{
    return(
        <Image src={src} alt="обложка" width={47} height={47}/>
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


