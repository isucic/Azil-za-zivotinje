import styles from './UnosNoveZivotinje.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UnosNoveZivotinje(){

    const navigate = useNavigate();

    const [zivotinja,setZivotinja] = useState({
      name: "",
      kind: "",
      photo: "",
      chip: false,
      age: null,
      description: "",
      checkup: "",
    })

    const promjenaUlaza = (event) => {
        var { name, value } = event.target
        setZivotinja({...zivotinja,[name]: value})
    }

    const handleSubmit = event => {
        // axios.post("http://localhost:3001/zivotinje", zivotinja, {
        axios.post("http://localhost:5001/api/postAnimal", zivotinja, {
            headers: {
                'content-type': "application/json"
            }
        })
        //  .then(res => console.log(res.data))
         .catch(err => console.log(err))
         event.preventDefault();
         navigate('/zivotinje')

    }

    const [vrste, setVrste] = useState([])
    useEffect(() => {
        axios
        .get("http://localhost:5001/api/getAnimalKind")
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
                     name="name" 
                     onChange={(e) => setZivotinja({...zivotinja, [e.target.name]: e.target.value})} 
                    />

                    <div className={styles.vrstaCip}>
                        {/* Izaberi vrstu */}
                        <div className={styles.vrstaBox}>
                            <p>Vrsta</p>
                            {vrste.map(vrsta =>
                                <div className={styles.RadioBox} key={vrsta.id}>
                                    <div className={styles.Radio}>
                                        <input 
                                         type="radio" 
                                         name="kind"
                                         value={vrsta.vrsta}  
                                         onChange={(e) => setZivotinja({...zivotinja,[e.target.name]: (e.target.value)}) }
                                        />
                                        <label htmlFor={vrsta.id}>{vrsta.vrsta}</label>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={styles.cipiranBox}>
                            <p>Čipiran</p>
                            <input 
                             type="checkbox" 
                             name="chip" 
                             onClick={(e) => setZivotinja({...zivotinja,[e.target.name]: Boolean(e.target.value)}) }
                            />
                        </div>
                    </div>

                    <p>Godine</p>
                    <input 
                     type="number" 
                     name="age" 
                     required 
                     onChange={(e) => setZivotinja({...zivotinja, [e.target.name]: e.target.value})} 
                    />

                    <div className={styles.dateBox}>
                        <p>Pregled</p>
                        <input
                            type="date"
                            name="checkup"
                            onChange={(e) => setZivotinja({...zivotinja,[e.target.name]: e.target.value})}
                        />
                    </div>

                    <div className={styles.textBox}>
                        <p>Detalji</p>
                        <textarea name="description" onChange={promjenaUlaza}/>
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