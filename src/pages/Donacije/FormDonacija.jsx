import styles from './Donacije.module.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import userContext from '../../context/userContext'


function FormDonacija({setRefresh}){

    const user = useContext(userContext)
    const [tipDonacija, setTipDonacija] = useState([])

    const [podaci,setPodaci] = useState({
        kategorija: user ? "trazi" : "nudi",
        tip: "",
        vrijednost: null,
        opis: ""
    })

    useEffect(() => {
        axios
         .get("http://localhost:3001/tipDonacija")
         .then(res => setTipDonacija(res.data))
         .catch(err => console.log(err))
    },[])


    function popunaForme(e){
        var { name, value } = event.target
        setPodaci({...podaci,[name]: value})
    }

    const handleSpremiDonaciju = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/donacije", podaci, {
            headers: {
                'content-type': "application/json"
            }
        })   
        setRefresh(true)    
    }
    return(
        <form onSubmit={handleSpremiDonaciju}>
        <div className={styles.formaDonacije}>
            <p>Tip donacije</p>
            <select 
             name="tip"
             value={podaci.tip}
             onChange={popunaForme} >
                {tipDonacija.map(tip => (
                    <option key={tip}>
                        {tip}
                    </option>
                ))}
            </select>
            
            <p>Vrijednost donacije</p>
            <input type="number" name="vrijednost" required onChange={popunaForme} />

            <p>Detalji</p>
            <textarea name="opis" onChange={popunaForme}/>

            <input type="submit" value="Dodaj" />
        </div>
        </form>
    )
}

export default FormDonacija;