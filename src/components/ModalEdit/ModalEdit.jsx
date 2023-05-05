import styles from './ModalEdit.module.css'
import { useState, useContext } from 'react';
import axios from 'axios';
import {EditSelectInput, EditTextInput} from './EditInput';

function ModalEdit({open, onClose,zivotinja}){  

    const [updatedData, setUpdatedData] = useState([])
    function promjenaUlaza(event){
        var { name, value } = event.target
        setUpdatedData({...updatedData,[name]: value})
        console.log("uslo")
        console.log(updatedData);
    }

    const handleSaveButton = (e) => {
        // e.preventDefault();
        axios
         .patch(`http://localhost:3001/zivotinje/${zivotinja.id}`, updatedData)
         .then(res => console.log(res.data))
         console.log("nista")
         setUpdate(true);
    }

    const vrstaLista = [
        {naziv: "mačka", id:2},
        {naziv: "pas", id:3},
    ]
    const status = [
        {naziv: "udomljen", id: 1},
        {naziv: "nije udomljen", id: 2},
    ]
    const cipiran = [
        {naziv: "cipiran", id: 1},
        {naziv: "nije cipiran", id: 2},
    ]

    if (!open) return null;
    return(
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <p onClick={onClose} className={styles.closeBtn}>X</p>
                <div className={styles.content}>
                    <form onSubmit={handleSaveButton}>

                        <div className={styles.photoFrame}>
                            <img src={zivotinja.photo} className={styles.photo}/>
                        </div>
                    
                        <div className={styles.grid}>
                            <EditTextInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="ime" type="text"/>
                            <EditTextInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="godine" type="number"/>
                            <EditSelectInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="vrsta" lista={vrstaLista}/>
                            <EditSelectInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="status" lista={status}/>
                            <EditTextInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="pregled" type="text"/>
                            <EditSelectInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="cip" lista={cipiran}/>
                        </div>

                        <div className={styles.textBox}>
                            <textarea name="opis" placeholder={zivotinja.opis} onChange={promjenaUlaza}/>
                        </div>
                      
                        <input className={styles.spremiBtn} type="submit" value="Spremi promjene" />
                    </form>

                </div>
            </div>
        </div>
        
    )
}

export default ModalEdit;