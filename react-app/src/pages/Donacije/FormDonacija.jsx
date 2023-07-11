import styles from './Donacije.module.css'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import userContext from '../../context/userContext'

function FormDonacija({setRefresh}){

    const user = useContext(userContext)
    const [tipDonacija, setTipDonacija] = useState([])

    const [podaci,setPodaci] = useState({
        category: user ? "trazi" : "nudi",
        type: "",
        value: null,
        details: ""
    })

    useEffect(() => {
        axios
        //  .get("http://localhost:3001/tipDonacija")
         .get("http://localhost:5001/api/getDonationType")
         .then(res => {
            setTipDonacija(res.data)
        })
         .catch(err => console.log(err))
    })


    function popunaForme(e){
        var { name, value } = event.target
        setPodaci({...podaci,[name]: value})
    }

    const handleSpremiDonaciju = (e) => {
        e.preventDefault();
        // axios.post("http://localhost:3001/donacije", podaci, {
        axios.post("http://localhost:5001/api/postDonation", podaci, {
            headers: {
                'content-type': "application/json"
            }
        })
         .then(res => setRefresh(true))   
    }

    return(
        <form onSubmit={handleSpremiDonaciju}>
            <div className={styles.formaDonacije}>
                <p>Tip donacije</p>
                <select 
                name="type"
                value={podaci.type}
                onChange={popunaForme} >
                    {tipDonacija.map(tip => (
                        <option key={tip.id}>
                            {tip.name}
                        </option>
                    ))}
                </select>
                
                <p>Vrijednost donacije</p>
                <input type="number" name="value" required onChange={popunaForme} />

                <p>Detalji</p>
                <textarea name="details" onChange={popunaForme}/>

                <input type="submit" value="Dodaj" />
            </div>
        </form>
    )
}

export default FormDonacija;