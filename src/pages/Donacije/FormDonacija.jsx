import styles from './Donacije.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


function FormDonacija(){

    const [tipDonacija, setTipDonacija] = useState([])
    useEffect(() => {
        axios
         .get("http://localhost:3001/tipDonacija")
         .then(res => setTipDonacija(res.data))
         .catch(err => console.log(err))
    },[])

    return(
        <div className={styles.formaDonacije}>
            <p>Tip donacije</p>
            <select name="tip" >
                {tipDonacija.map(tip => (
                    <option key={tip}>
                        {tip}
                    </option>
                ))}
            </select>
            
            <p>Vrijednost donacije</p>
            <input type="number" required />

            <p>Detalji</p>
            <textarea />
        </div>
    )
}

export default FormDonacija;