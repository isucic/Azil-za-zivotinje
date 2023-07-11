import styles from './ModalEdit.module.css'
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import {EditSelectInput, EditTextInput, EditCheckbox} from './EditInput';

function ModalEdit({open, onClose,zivotinja}){  


    const [vrstaLista, setVrstaLista] = useState([])
    useEffect(() => {
        axios
        .get("http://localhost:5001/api//getAnimalKind")
        .then(res => setVrstaLista(res.data))
        .catch(error => console.log(error))
    },[])

    const [updatedData, setUpdatedData] = useState([])
    function promjenaUlaza(event){
        var { name, value } = event.target
        setUpdatedData({...updatedData,[name]: value})
        // console.log(name);
        // console.log(value);
        // console.log(updatedData);
    }

   function promjenaCheckboxa(event){
        // console.log(event.target.checked)
        // console.log(event.target.name)
        var { name, checked } = event.target
        setUpdatedData({...updatedData,[name]: checked})
   }

    const handleSaveButton = (e) => {
        // e.preventDefault();
        axios
        //  .patch(`http://localhost:3001/zivotinje/${zivotinja.id}`, updatedData)
         .patch(`http://localhost:5001/api/updateAnimal/${zivotinja.id}`, updatedData)
         .then(res => {
            if(res.data.success) setUpdate(true);
         })
        //  setUpdate(true);
    }

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
                            <EditTextInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="name" type="text"/>
                            <EditTextInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="age" type="number"/>

                            <EditSelectInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="kind" lista={vrstaLista}/>

                            <EditCheckbox zivotinja={zivotinja} promjenaUlaza={promjenaCheckboxa} name="adopted" /> 
                           
                            
                            <EditTextInput zivotinja={zivotinja} promjenaUlaza={promjenaUlaza} name="checkup" type="text"/>
                            <EditCheckbox zivotinja={zivotinja} promjenaUlaza={promjenaCheckboxa} name="chip" />
                        </div>

                        <div className={styles.textBox}>
                            <textarea name="description" placeholder={zivotinja.description} onChange={promjenaUlaza}/>
                        </div>
                      
                        <input className={styles.spremiBtn} type="submit" value="Spremi promjene" />
                    </form>

                </div>
            </div>
        </div>
        
    )
}

export default ModalEdit;