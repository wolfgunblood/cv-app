import React from 'react';
import styles from './HeaderPreview1.module.scss'

const HeaderPreview1 = ({userInfo}) => {
    
    const first = userInfo.firstName.toUpperCase(); 
    const last = userInfo.lastName.toUpperCase(); 

    return (
        <div >
            <div className={styles.header}>
                <h1>
                    <span className={styles.firstName}>
                        {first}
                    </span>
                    {last}
                </h1>
            </div>
            <div className={styles.currentPos}>
                <h2 className={styles.positionHeader}>test</h2>
            </div>
        </div>
    )
}

export default HeaderPreview1