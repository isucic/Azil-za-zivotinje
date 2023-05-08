import { useEffect,useState } from 'react'
import styles from './Obavijesti.module.css'
import axios from 'axios'
import ModalNovaObavijest from '../../components/ModalNovaObavijest/ModalNovaObavijest';

function Obavijesti(){

    const [openModal, setOpenModal] = useState(false);
    const [obavijesti,setObavijesti] = useState([])
    useEffect(() => {
        axios
         .get("http://localhost:3001/obavijesti")
         .then(res => setObavijesti(res.data))
         .catch(err => console.log(err))
    },[])

    return(
        <div className={styles.obavijestiPage}>
            <button onClick={() => setOpenModal(true)}>Nova obavijest</button>
            <ModalNovaObavijest open={openModal} onClose={() => setOpenModal(false)}/>
            <h1>Obavijesti</h1>
            <div className={styles.listaObavijesti}>
                {obavijesti.sort((a, b) => new Date(b.datum) - new Date(a.datum)).map(obavijest => (
                    <div className={styles.obavijest} key={obavijest.id}>
                        <div className={styles.traka} style={{backgroundColor: obavijest.vazno ? "rgba(228, 22, 22, 0.534)" : "#eaae1658"}}>
                            <p>{obavijest.naslov}</p>
                             {obavijest.vazno && <p>VAŽNO</p>}
                            <p>{obavijest.datum}</p>
                        </div>
                        <div className={styles.tekst}>
                            <p>{obavijest.tekst}</p>
                        </div>
                </div>
                ))}
                
            </div>
        </div>
        
    )
}

export default Obavijesti