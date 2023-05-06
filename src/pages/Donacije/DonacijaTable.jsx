import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Donacije.module.css'

function DonacijeTable({kateg}){

    const [donacije,setDonacije] = useState([]);
    useEffect(() => {
        axios
         .get("http://localhost:3001/donacije")
         .then(res => setDonacije(res.data))
    },[])

    return(
        <table>
            <thead>
                <tr>
                    <th>Tip</th>
                    <th>Vrijednost</th>
                    <th>Opis</th>
                    <th>Botuni</th>
                </tr>
            </thead>
            <tbody>
               {donacije.filter(donacija => donacija.kategorija === kateg).map((donacija) => (
                <tr key={donacija.id}>
                    <td>{donacija.tip}</td>
                    <td>{donacija.vrijednost}</td>
                    <td>{donacija.opis}</td>
                    <td><button>Doniraj</button></td>
               </tr>
                ))}
            </tbody>
    </table>
    )
}

export default DonacijeTable;