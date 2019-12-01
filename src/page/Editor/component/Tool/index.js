import React from 'react'
import styles from './index.css'

export default () => {
    return (
        <div className={styles.container}>
            <div className={styles.toolButton}>
                <span className="iconfont">&#xe618;</span>
                <span>图片</span>
            </div>
            <div className={styles.toolButton}>
                <span className="iconfont">&#xe7de;</span>
                音乐
            </div>
        </div>
    )
}