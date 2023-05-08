import { useContext, useEffect,useState } from 'react'
import styles from './Obavijesti.module.css'
import axios from 'axios'
import ModalNovaObavijest from '../../components/ModalNovaObavijest/ModalNovaObavijest';
import userContext from '../../context/userContext';
import { FaTrash } from 'react-icons/fa';



function Obavijesti(){

    const user = useContext(userContext)

    const [openModal, setOpenModal] = useState(false);
    const [obavijesti,setObavijesti] = useState([])
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if(refresh){
        axios
         .get("http://localhost:3001/obavijesti")
         .then(res => setObavijesti(res.data))
         .catch(err => console.log(err))
         setRefresh(false);
        }
    },[refresh])

    const handleIzbrisiObavijest = (id) => {
        axios
         .delete(`http://localhost:3001/obavijesti/${id}`)
         .then(res => setRefresh(true))
    }

    return(
        <div className={styles.obavijestiPage}>
            <ModalNovaObavijest open={openModal} onClose={() => setOpenModal(false)}/>
            <h1>Obavijesti</h1>
            <button onClick={() => setOpenModal(true)}>Nova obavijest</button>
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

                        {user && 
                        <div className={styles.izbrisiBtn}>
                            <FaTrash className={styles.fatrash} onClick={() => handleIzbrisiObavijest(donacija.id)}/>
                         </div>}
                </div>
                ))}
                
            </div>
        </div>
        
    )
}

export default Obavijesti