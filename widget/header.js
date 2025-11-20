import Image from 'next/image'
import logo from '../public/logo.svg'

import styles from './header.module.css'

export const Header = () => {
    return(
        <div className={styles.header}>
            <Image src={logo} alt='лого' />
        </div>
    )
}