import { useEffect, useState } from 'react'
import styles from './Donacije.module.css'
import axios from 'axios'
import FormDonacija from './FormDonacija'
import DonacijaTable from './DonacijaTable'

function Donacije(){

    const [novaDonacija,setNovaDonacija] = useState(false)
    const [refresh, setRefresh] = useState(true)

    const [donacije,setDonacije] = useState([])
    useEffect(() => {
        if(refresh){
        axios
         .get("http://localhost:3001/donacije")
         .then(res => setDonacije(res.data))
         setRefresh(false)
        }
    },[refresh])

    return (

        <div className={styles.donacije}>

            <div className={styles.sideBarDon}>
                {novaDonacija && <FormDonacija setRefresh={setRefresh}/> }
            </div>

            <div className={styles.popisVrstaDonacija}>
                <button onClick={() => setNovaDonacija(true)}>Nova donacija</button>

                <h1>Tražimo</h1>             
                <DonacijaTable donacije={donacije} kateg="trazi" />
                   
                <h1>Nudi se</h1>
                <DonacijaTable donacije={donacije} kateg="nudi"/>

                <h1>Donirano</h1>
                <DonacijaTable donacije={donacije} kateg="donirano" />
            </div>
        </div>
    )
}

export default Donacije