import styles from './Filters.module.css'
import { useState } from 'react'
function Filters({zivotinje, filteredDataFun}){

    const vrsta = [
        {ime: "mačka", id:2},
        {ime: "pas", id:3},
    ]
    const status = [
        {naziv: "udomljen", id: 1},
        {naziv: "nije udomljen", id: 2},
        {naziv: "svi", id: 3},
    ]

    const [filter,setFilter] = useState("")
    const handlePretrazi = (e) => {
        var filteredData = zivotinje.filter(zivotinja => zivotinja.vrsta === filter)
        console.log(filteredData)
        filteredDataFun(filteredData)
        if(filteredData){
            setRemoveFilter(true)
        }
    }
    const[removeFilter,setRemoveFilter] = useState(false)
    function handleRemoveFilter(){
        setFilter('')
        setRemoveFilter(false)
        filteredDataFun(null)
    }
    return(
            <>
                <h2>Filteri</h2>

                <div className={styles.filteri}>
                    <h3>Vrsta</h3>
                    {vrsta.map(v => (
                        <div className={styles.filter} key={v.id}>
                            <input 
                            type="radio" 
                            name="filters" 
                            value={v.ime} 
                            onChange={(e) => setFilter(e.target.value)}
                            />
                            <label>{v.ime}</label>
                        </div>
                    ))} 
                    <button onClick={handlePretrazi}>Pretraži</button>
                    {removeFilter && <button className={styles.filterClickBtn} onClick={handleRemoveFilter}>Ukloni filter</button>}

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