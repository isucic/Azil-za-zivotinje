import { useContext, useState } from 'react';
import styles from './ModalNovaObavijest.module.css'
import axios from 'axios';
import userContext from '../../context/userContext'

function ModalNovaObavijest({open, onClose}){

    const user = useContext(userContext)

    const [novaOb, setNovaOb] = useState({
        naslov: "",
        tekst: "",
        vazno: false,
        datum: new Date().toISOString().slice(0, 10)
    })
    const [ponovi, setPonovi] = useState(false)

    const handleSpremiObavijest = (e) => {
        if((novaOb.naslov.length < 20) && novaOb.tekst.length > 10 && novaOb.tekst.length < 200){
            axios
            // .post("http://localhost:3001/obavijesti", novaOb, {
            .post("http://localhost:5001/api/addPost", novaOb, {
                headers: {
                    'content-type': "application/json"
                }
            })
            .then(res  => console.log(novaOb))
            setPonovi(false)
        }
        else {
            setPonovi(true);
             e.preventDefault();
        }
    }

    if(!open) return null;
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <p className={styles.closeBtn} onClick={onClose}>X</p>

                <div className={styles.content}>
                    <h1>Nova obavijest</h1>
                        <form onSubmit={handleSpremiObavijest}>
                        <p>Naslov</p>
                        <input 
                         type="text" 
                         name="naslov" 
                         onChange={(e) => setNovaOb({...novaOb, [e.target.name]: e.target.value})} 
                        />

                        <p>Opis</p>
                        <textarea 
                         name="tekst"
                         onChange={(e) => setNovaOb({...novaOb, [e.target.name]: e.target.value})} 
                        />

                        {user && <div className={styles.vazno}>
                            <p>Važno</p>
                            <input 
                             type="checkbox"
                             name="vazno" 
                             onClick={(e) => setNovaOb({...novaOb, [e.target.name]: Boolean(e.target.value)})} />
                        </div>}

                        {ponovi && <p style={{color: "red"}}>Provjeri da je naslov kraći od 20 znakova i tekst između 10 i 200 znakova.</p>}
                        <input type="submit" value="Spremi" />
                        </form>
                </div>
            </div>
        </div>
    )
}

export default ModalNovaObavijest