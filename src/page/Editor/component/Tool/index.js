import React from 'react'
import styles from './index.css'
import cx from 'classnames'
import Masonry from 'react-masonry-component'

export default () => {

    const masonryOptions = {
        transitionDuration: 0
    };
    
    const imagesLoadedOptions = { 
        columnWidth: 110,
    }

    const elements = [
        {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575822619012&di=41cb967fe050f9ac01818a6555485f9f&imgtype=0&src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2F77c6a7efce1b9d16f09d48d44fc66a8a8d5464cf.jpeg%3Ftoken%3D8f877908e3178de9d5118cbd133c5665%26s%3DA244D44F9C028F5706EEB8B903001009'
        },
        {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575823805555&di=68919cc46bdcc855c582ef7f7a817ffe&imgtype=0&src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2F43a7d933c895d1434f1993519ae55c075aaf0774.jpeg%3Ftoken%3D3e7304f400c6e01a55c67b0bb163f2c3%26s%3D6ECA7A230AD36DEF5C542CD70100C0B1'
        },
        {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575822619012&di=41cb967fe050f9ac01818a6555485f9f&imgtype=0&src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2F77c6a7efce1b9d16f09d48d44fc66a8a8d5464cf.jpeg%3Ftoken%3D8f877908e3178de9d5118cbd133c5665%26s%3DA244D44F9C028F5706EEB8B903001009'
        },
        {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575822619012&di=41cb967fe050f9ac01818a6555485f9f&imgtype=0&src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2F77c6a7efce1b9d16f09d48d44fc66a8a8d5464cf.jpeg%3Ftoken%3D8f877908e3178de9d5118cbd133c5665%26s%3DA244D44F9C028F5706EEB8B903001009'
        },
        {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575822619012&di=41cb967fe050f9ac01818a6555485f9f&imgtype=0&src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2F77c6a7efce1b9d16f09d48d44fc66a8a8d5464cf.jpeg%3Ftoken%3D8f877908e3178de9d5118cbd133c5665%26s%3DA244D44F9C028F5706EEB8B903001009'
        }
    ]

    const childElements = elements.map(function(element){
        return (
             <li className={styles.picElement}>
                 <img src={element.src} />
             </li>
         );
    })

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
                <div className={styles.picList}>
                <Masonry
                    columnWidth={106}
                    className={styles.picGird} // default ''
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {childElements}
                </Masonry>
                </div>
            </div>
        </div>
    )
}