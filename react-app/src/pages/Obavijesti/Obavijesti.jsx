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
         .get("http://localhost:5001/api/getPosts")
         .then(res => setObavijesti(res.data))
         .catch(err => console.log(err))
         setRefresh(false);
        }
    },[refresh])

    const handleIzbrisiObavijest = (id) => {
        axios
        //  .delete(`http://localhost:3001/obavijesti/${id}`)
         .delete(`http://localhost:5001/api/deletePost/${id}`)
         .then(res => {
            if (res.data.success) 
                setRefresh(true)
            })
         .catch(error => console.log(error))
    }

    return(
        <div className={styles.obavijestiPage}>
            <ModalNovaObavijest open={openModal} onClose={() => setOpenModal(false)}/>
            <h1>Obavijesti</h1>
            <button onClick={() => setOpenModal(true)}>Nova obavijest</button>
            <div className={styles.listaObavijesti}>
                {obavijesti.sort((a, b) => new Date(b.date) - new Date(a.date)).map(obavijest => (
                    <div className={styles.obavijest} key={obavijest.id}>
                        <div className={styles.traka} style={{backgroundColor: obavijest.importance ? "rgba(228, 22, 22, 0.534)" : "#eaae1658"}}>
                            <p>{obavijest.title}</p>
                             {obavijest.importance && <p>VAŽNO</p>}
                            <p>{obavijest.date.substring(0,10)}</p>
                        </div>
                        <div className={styles.tekst}>
                            <p>{obavijest.description}</p>
                        </div>

                        {user && 
                        <div className={styles.izbrisiBtn}>
                            <FaTrash className={styles.fatrash} onClick={() => handleIzbrisiObavijest(obavijest.id)}/>
                        </div>}
                </div>
                ))}
                
            </div>
        </div>
        
    )
}

export default Obavijesti