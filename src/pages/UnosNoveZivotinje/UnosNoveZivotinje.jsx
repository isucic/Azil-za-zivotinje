import styles from './UnosNoveZivotinje.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UnosNoveZivotinje(){

    const navigate = useNavigate();

    const [zivotinja,setZivotinja] = useState({
      ime: "",
      vrsta: "",
      photo: "",
      cip: false,
      godine: null,
      opis: "",
      pregled: "",
      udomljen: false
    })

    const promjenaUlaza = (event) => {
        var { name, value } = event.target
        setZivotinja({...zivotinja,[name]: value})
    }

    const handleSubmit = event => {
        axios.post("http://localhost:3001/zivotinje", zivotinja, {
            headers: {
                'content-type': "application/json"
            }
        })
        //  .then(res => console.log(res.data))
         .catch(err => console.log(err))
         event.preventDefault();
         navigate('/zivotinje')

    }

    const [vrste,setVrste] = useState([])
    useEffect(() => {
        axios
        .get("http://localhost:3001/vrste")
        .then(res => setVrste(res.data))
    },[])

    return(
        <div className={styles.mainpage}>
            <h1>Unos nove životinje</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.sveSkupa}>

                    <div className={styles.leftContainer}>
                    <p>Ime</p>
                    <input 
                     type="text" 
                     name="ime" 
                     onChange={(e) => setZivotinja({...zivotinja, [e.target.name]: e.target.value})} 
                    />

                    <div className={styles.vrstaCip}>
                        {/* Izaberi vrstu */}
                        <div className={styles.vrstaBox}>
                            <p>Vrsta</p>
                            {vrste.map(vrsta =>
                                <div className={styles.RadioBox} key={vrsta}>
                                    <div className={styles.Radio}>
                                        <input 
                                         type="radio" 
                                         name="vrsta"
                                         value={vrsta}  
                                         onChange={(e) => setZivotinja({...zivotinja,[e.target.name]: (e.target.value)}) }
                                        />
                                        <label htmlFor={vrsta}>{vrsta}</label>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={styles.cipiranBox}>
                            <p>Čipiran</p>
                            <input 
                             type="checkbox" 
                             name="cip" 
                             onClick={(e) => setZivotinja({...zivotinja,[e.target.name]: Boolean(e.target.value)}) }
                            />
                        </div>
                    </div>

                    <p>Godine</p>
                    <input 
                     type="number" 
                     name="godine" 
                     required 
                     onChange={(e) => setZivotinja({...zivotinja, [e.target.name]: e.target.value})} 
                    />

                    <div className={styles.dateBox}>
                        <p>Datum</p>
                        <input
                            type="date"
                            name="pregled"
                            onChange={(e) => setZivotinja({...zivotinja,[e.target.name]: e.target.value})}
                        />
                    </div>

                    <div className={styles.textBox}>
                        <p>Detalji</p>
                        <textarea name="opis" onChange={promjenaUlaza}/>
                    </div>
                    </div>

                    <div className={styles.rightContainer}>
                        <p>Unesite URL fotografije</p>
                        <input type="text" name="photo" onChange={(e) => setZivotinja({...zivotinja,[e.target.name]: e.target.value})} />
                        {zivotinja.photo && (
                        <div className={styles.photoFrame}>
                                <img src={zivotinja.photo} className={styles.photo}/>
                        </div>
                        )}
                    </div>
                </div>
                <input type="submit" value="Spremi" />
            </form>

        </div>
    )
}

export default UnosNoveZivotinje