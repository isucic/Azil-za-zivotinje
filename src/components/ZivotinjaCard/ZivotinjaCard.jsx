import axios from 'axios'
import styles from './ZivotinjaCard.module.css'

function ZivotinjaCard({zivotinja, setUpdate}){
    
    var ime = zivotinja.ime
    var vrsta = zivotinja.vrsta
    var udomljen = zivotinja.udomljen
    var opis = zivotinja.opis
    var photo = zivotinja.photo
    var id = zivotinja.id

    function handleUdomiBotun(id){
        axios
         .patch(`http://localhost:3001/zivotinje/${id}`, {
            udomljen: true})
         .then(res => console.log("ispunjeno"))
         setUpdate(true)
    }

    const backgroundColor = udomljen ? "#F7E1AE" : "#A4D0A4"

    return(
        <div className={styles.zivotinjaCard} style={{ backgroundColor }}>
            <p className={styles.ime}>{ime}</p>

            <div className={styles.photoFrame}>
                <img className={styles.photo} src={photo} />
            </div>

            <div className={styles.vrstaStatus}>
                <p>{vrsta}</p>
                {udomljen ? <p>Udomljen</p> : <p>Nije udomljen</p>}
            </div>

            <p className={styles.opis}>{opis}</p>

            <div className={styles.botuni}>
                <button className={styles.uredibtn}>Uredi</button>
                {!udomljen && 
                <button onClick={() => handleUdomiBotun(id)} className={styles.udomibtn}>Udomi</button>}
                
            </div>


            </div>
    )
}

export default ZivotinjaCard