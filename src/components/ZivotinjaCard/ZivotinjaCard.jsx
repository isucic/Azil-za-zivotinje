import axios from 'axios'
import { useContext, useState } from 'react'
import styles from './ZivotinjaCard.module.css'
import ModalEdit from '../ModalEdit/ModalEdit'
import userContext from "../../context/userContext"

function ZivotinjaCard({zivotinja, setUpdate}){

    const user = useContext(userContext)
    
    var ime = zivotinja.ime
    var vrsta = zivotinja.vrsta
    var udomljen = zivotinja.udomljen
    var opis = zivotinja.opis
    var photo = zivotinja.photo
    var id = zivotinja.id

    const [openModal, setOpenModal] = useState(false);

    function handleUdomiBotun(id){
        axios
         .patch(`http://localhost:3001/zivotinje/${id}`, {
            udomljen: true})
         .then(res => console.log("ispunjeno"))
         setUpdate(true)
    }

    const backgroundColor = udomljen ? "transparent" : "#f1c0c0"
    const border = udomljen ? "none" : "6px double red"

    return(
        <div className={styles.zivotinjaCard} style={{ backgroundColor, border }}>
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
                <ModalEdit zivotinja={zivotinja} open={openModal} onClose={() => setOpenModal(false)} setUpdate={setUpdate}/>
                {!udomljen && 
                <button onClick={() => handleUdomiBotun(id)} className={styles.udomibtn}>Udomi</button>}
                {user && 
                <button className={styles.uredibtn} onClick={() => setOpenModal(true)}>Uredi</button>
                }
               
                
            </div>


            </div>
    )
}

export default ZivotinjaCard