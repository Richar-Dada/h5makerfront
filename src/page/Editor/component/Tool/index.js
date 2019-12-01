import React from 'react'
import styles from './index.css'
import cx from 'classnames'

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
            <div className={styles.picLib}>
                <span className={cx('iconfont', styles.closeBtn)}>&#xe66d;</span>
                <div className={styles.picLibTitle}>图片库</div>
                <div className={styles.addPicBtn}>添加图片</div>
            </div>
        </div>
    )
}