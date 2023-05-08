import { useContext,useState } from "react";
import styles from './Donacije.module.css'
import userContext from "../../context/userContext";
import axios from "axios";

function DonacijeTable({donacije, kateg, setRefresh}){
    
    function handlePremjestiDonaciju(id){
        var novaKateg = ""
        if((user && (kateg=="nudi" || kateg=="trazi")) || (!user && kateg==="trazi"))
           novaKateg = "donirano"
        axios
        .patch(`http://localhost:3001/donacije/${id}`,{kategorija: novaKateg})
        .then(res => setRefresh(true))
    }

    function handleIzbrisiDonaciju(id){
        if(user && (kateg === "trazi" || kateg==="donirano")){
            axios
             .delete(`http://localhost:3001/donacije/${id}`)
             .then(res => setRefresh(true))
        }
    }

    function kopijaUTrazimo(donacija){
        const {tip, vrijednost, opis } = donacija
        const noviPodaci = {tip: tip, vrijednost: vrijednost, opis: opis, kategorija: "trazi"}
        axios
         .post("http://localhost:3001/donacije", noviPodaci)
         .then(res => setRefresh(true))
         .catch(err => console.log("greska"))
    }

    const user = useContext(userContext)
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

                    {/* U tablici Traži, samo korisnik vidi botun Doniraj */}
                    {(!user && kateg=="trazi") &&  
                        <td><button onClick={() => handlePremjestiDonaciju(donacija.id)}>Doniraj</button></td>}

                    {/* U tablici Traži, samo admin vidi botuni Donirano i Izbrisi */}
                    {user && kateg=="trazi" && 
                        <td>
                            <button onClick={() => handlePremjestiDonaciju(donacija.id)}>Donirano</button>
                            <button onClick={() => handleIzbrisiDonaciju(donacija.id)}>Izbrisi</button>
                        </td>}

                    {/* U tablici Nudi, samo admin vidi botun Prihvati */}
                    {user && kateg=="nudi" && <td><button onClick={() => handlePremjestiDonaciju(donacija.id)}>Prihvati</button></td>}

                    {/* U tablici Donirano, samo admin ima pravo na botun Ponovi i izbrisi */}
                    {user && kateg=="donirano" && 
                    <td>
                        <button onClick={() => kopijaUTrazimo(donacija)}>Ponovi</button>
                        <button onClick={() => handleIzbrisiDonaciju(donacija.id)}>Izbrisi</button>
                    </td>}

               </tr>
                ))}
            </tbody>
    </table>
    )
}

export default DonacijeTable;