import axios from 'axios'
import { useContext, useState } from 'react'
import styles from './ZivotinjaCard.module.css'
import ModalEdit from '../ModalEdit/ModalEdit'
import userContext from "../../context/userContext"

function ZivotinjaCard({zivotinja, setUpdate}){

    const user = useContext(userContext)
    
    var ime = zivotinja.name
    var vrsta = zivotinja.kind
    var udomljen = zivotinja.adopted
    var opis = zivotinja.description
    var photo = zivotinja.photo
    var id = zivotinja.id

    const [openModal, setOpenModal] = useState(false);

    function handleUdomiBotun(id){
        axios
         .patch(`http://localhost:5001/api/updateAdoptedAnimal/${id}`,{
            adopted: true})
         .then(res => {if (res.data.success) setUpdate(true)})
         
    }

    const backgroundColor = udomljen ? "#faeaea" : "transparent";

    return(
        <div className={styles.zivotinjaCard} style={{ backgroundColor }}>
            <p className={styles.ime}>{ime}</p>

            <div className={styles.photoFrame}>
                <img className={styles.photo} src={photo} />
            </div>

            <div className={styles.vrstaStatus}>
                <p>{vrsta}</p>
                {udomljen ? <p className={styles.status}>Udomljen</p> : <p className={styles.status}>Nije udomljen</p>}
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