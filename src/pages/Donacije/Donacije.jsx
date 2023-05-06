import { useEffect, useState } from 'react'
import styles from './Donacije.module.css'
import axios from 'axios'
import FormDonacija from './FormDonacija'
import DonacijaTable from './DonacijaTable'

function Donacije(){
    return (
        <div className={styles.donacije}>

            <div className={styles.sideBarDon}>
                <p>Sa strane</p>

                <form>
                    {/* <FormDonacija /> */}
                </form>
            </div>

            <div className={styles.popisVrstaDonacija}>
                <button>Nova donacija</button>

                <h1>Tražimo</h1>             
                <DonacijaTable kateg="trazi"/>
                   
                <h1>Nudi se</h1>
                <DonacijaTable kateg="nudi"/>

                <h1>Donirano</h1>
                <DonacijaTable kateg="donirano" />
            </div>
        </div>
    )
}

export default Donacije