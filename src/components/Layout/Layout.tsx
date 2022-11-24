import React from 'react'
import Navbar from '@components/Navbar/Navbar';
import styles from './layout.module.css'

type Props = {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div >
            <Navbar />
                {children}
            <footer className={styles.footer}>footer</footer>
          {/*  <style>
                {`
                    .containerdos {
                        background: #00ff08;
                    }
                `}
                </style> */}
        </div>
    )
}
export default Layout;