import styles from './search.module.css'

export const Search = ({func}) =>{
    return(
        <div>
            <input placeholder='поиск' onChange={func} />
        </div>
    )
}