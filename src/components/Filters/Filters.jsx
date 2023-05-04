import styles from './Filters.module.css'
import { useState } from 'react'
function Filters({zivotinje}){

    const vrsta = [
        {ime: "sve", id:1},
        {ime: "mačka", id:2},
        {ime: "pas", id:3},
    ]
    const status = [
        {naziv: "udomljen", id: 1},
        {naziv: "nije udomljen", id: 2},
        {naziv: "svi", id: 3},
    ]


    const [filter,setFilter] = useState("")
    const handleChangeFilter = (e) => {
        setFilter(e.target.value)
        var filteredData = zivotinje.filter(zivotinja => zivotinja.vrsta === filter)
        console.log(filteredData)
        // saljiFiltriranu(filteredData)
    }
    return(
            <>
                <h2>Filteri</h2>

                <div className={styles.filteri}>
                    <h3>Vrsta</h3>
                    {vrsta.map((v,index) => (
                        <div className={styles.filter} key={v.id}>
                         <input type="radio" name="filters" value={v.ime} onChange={handleChangeFilter}/>
                         <label>{v.ime}</label>
                        </div>
                    ))} 
                </div>

                {/* <div className={styles.filteri}>
                    <h3>Status</h3>
                    {status.map((v,index) => (
                        <div className={styles.filter} key={v.id}>
                         <input type="radio" name="filters" value={v.naziv}/>
                         <label>{v.naziv}</label>
                        </div>
                    ))} 
                </div> */}
            </>
    )
}

export default Filters;