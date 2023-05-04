import ImageSlider from "./ImageSlider"
import styles from './PhotoSlider.module.css'
function PhotoSlider(){

    const slides=[
        {url:'premium_photo-1663133411098-58f757c92861.avif', title:'photo1'},
        {url:'photo-1583786102038-6fce0083f370.avif', title:'photo2'},
        {url:'photo-1594004844563-536a03a6e532.avif', title:'photo3'},
        {url:'photo-1507146426996-ef05306b995a.avif', title:'photo4'}
    ]
    return(
        <div className={styles.containerStyles}>
            <ImageSlider slides={slides}/>
        </div>
    )
}
export default PhotoSlider