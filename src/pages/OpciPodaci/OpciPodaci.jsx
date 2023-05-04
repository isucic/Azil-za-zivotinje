import styles from './OpciPodaci.module.css'
import ContactUs from '../../components/ContactUs/ContactUs'
import Map from '../../components/Map/Map'
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider'

function OpciPodaci(){
    return(
        <div className={styles.homepage}>

            <div className={styles.homepage1}>
                Sa strane
            </div>

            <div className={styles.homepage2}>

                <PhotoSlider />
                <div className={styles.mainInfo}>
                    <h1>O nama</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Dictumst quisque sagittis purus sit amet.</p>
                    <p>Non quam lacus suspendisse faucibus. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Venenatis urna cursus eget nunc scelerisque viverra mauris. Aliquam sem fringilla ut morbi tincidunt. Orci dapibus ultrices in iaculis nunc sed augue lacus. Ornare arcu odio ut sem nulla pharetra diam sit. Amet mattis vulputate enim nulla aliquet porttitor lacus. Vestibulum lectus mauris ultrices eros in. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Ornare lectus sit amet est placerat.</p>
                </div>
                <div className={styles.karta}>
                    <h2>Naša lokacija</h2>
                    <div className={styles.lokacijainfo}>                       
                        <Map />
                        <>
                        <p>Posjeti nas u ovim terminima:</p>
                        <p>10-18 h</p>
                        </>
                    </div>
                </div>
                
                <ContactUs />
            </div>
        </div>
    )
}

export default OpciPodaci