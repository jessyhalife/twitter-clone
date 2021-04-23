import React from 'react'
import styles from './styles.module.scss';
import Sidebar from '../Sidebar';

const Layout : React.FC = ({children}) => {
    return (
        <div className={styles.container}>
            <Sidebar></Sidebar>
            {children}
        </div>
    )
}

export default Layout
