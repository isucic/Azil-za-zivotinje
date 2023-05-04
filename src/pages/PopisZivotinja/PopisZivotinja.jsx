import axios from 'axios'
import styles from './PopisZivotinja.module.css'
import { useEffect, useState } from 'react'
import ZivotinjaCard from '../../components/ZivotinjaCard/ZivotinjaCard'
import Filters from '../../components/Filters/Filters'

function PopisZivotinja(){

    const vrsta = [
        {ime: "sve", id:1},
        {ime: "mačka", id:2},
        {ime: "pas", id:3},
    ]
    const status = [
        {naziv: "udomljen", id: 1},
        {naziv: "nije udomljen", id: 2},
    ]

    const [zivotinje,setZivotinje] = useState([])
    const [update,setUpdate] = useState(false)

    useEffect(() => {
        axios
         .get("http://localhost:3001/zivotinje")
         .then(res => setZivotinje(res.data))
         setUpdate(false)
    },[update])

    // function saljiFiltriranu(filtrirana){
    //     setFilter(filtrirana)
    //     console.log(filtrirana)
    // }

    return(
        <div className={styles.popisZivotinja}>
            <div className={styles.sideBar}>
                <Filters zivotinje={zivotinje} />
                {/* <h2>Filteri</h2>

                <div className={styles.filteri}>
                    <h3>Vrsta</h3>
                    {vrsta.map((v,index) => (
                        <div className={styles.filter} key={v.id}>
                         <input type="radio" name="filters" value={v.ime} onChange={() => handleChangeFilter(v.ime)}/>
                         <label>{v.ime}</label>
                        </div>
                    ))} 
                </div>

                <div className={styles.filteri}>
                    <h3>Status</h3>
                    {status.map((v,index) => (
                        <div className={styles.filter} key={v.id}>
                         <input type="radio" name="filters" value={v.naziv}/>
                         <label>{v.naziv}</label>
                        </div>
                    ))} 
                </div> */}
            </div>


            <div className={styles.popis}>
                {zivotinje.map(zivotinja => (
                    <ZivotinjaCard zivotinja={zivotinja} key={zivotinja.id} setUpdate={setUpdate} />
                ))}

            </div>
        </div>
    )
}

export default PopisZivotinja