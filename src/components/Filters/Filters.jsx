import styles from './Filters.module.css'
function Filters({vratiUParent, vratiStatus}){

    const vrsta = [
        {ime: "Mačka", id:2},
        {ime: "Pas", id:3}
    ]
    const status = [
        {naziv: "udomljen", id: 1},
        {naziv: "nije udomljen", id: 2}
    ]
    return(
            <>
                <h2>Filteri</h2>

                <div className={styles.filteri}>
                    <h3>Vrsta</h3>
                    {vrsta.map(v => (
                        <div className={styles.filter} key={v.id}>
                            <label htmlFor="vrsta">{v.ime}</label>
                            <input 
                            type="radio" 
                            name="vrsta" 
                            value={v.ime} 
                            onChange={(e) => vratiUParent(e.target.value)}
                            />
                        </div>
                    ))} 
                </div>

                <div className={styles.filteri}>
                    <h3>Status</h3>
                    {status.map((v,index) => (
                        <div className={styles.filter} key={v.id}>
                            <label htmlFor="status">{v.naziv}</label>
                            <input 
                            type="radio" 
                            name="status" 
                            value={v.naziv} 
                            onChange={(e) => vratiStatus(e.target.value)}/>
                        </div>
                    ))} 
                </div>
            </>
    )
}

export default Filters;