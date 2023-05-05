import axios from 'axios'
import styles from './PopisZivotinja.module.css'
import { useEffect, useState, createContext } from 'react'
import ZivotinjaCard from '../../components/ZivotinjaCard/ZivotinjaCard'
import Filters from '../../components/Filters/Filters'

export const UpdateList = createContext({})
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
    const [ispis,setIspis] = useState([])

    useEffect(() => {
            axios
            .get("http://localhost:3001/zivotinje")
            .then(res => {setZivotinje(res.data);setIspis(res.data)})
            setUpdate(false)
    },[update])

    const [filterData,setFilterData] = useState()
    
    const filteredDataFun = (filterData) => {
        setFilterData(filterData)
        setIspis(filterData)
        if(!filterData) setIspis(zivotinje)
    }

    return(
        <div className={styles.popisZivotinja}>
            <div className={styles.sideBar}>
                <Filters zivotinje={zivotinje} filteredDataFun={filteredDataFun}/>
                {/* <h2>Filteri</h2>

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
                {ispis.map(zivotinja => ( 
                    <ZivotinjaCard zivotinja={zivotinja} key={zivotinja.id} setUpdate={setUpdate} />
                ))}

            </div>
        </div>
    )
}

export default PopisZivotinja