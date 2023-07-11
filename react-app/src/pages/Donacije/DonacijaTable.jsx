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
        // .patch(`http://localhost:3001/donacije/${id}`,{kategorija: novaKateg})
        .patch(`http://localhost:5001/api/changeDonationCategory/${id}`,{category: novaKateg})
        .then(res => {
            if (res.data.success) 
                setRefresh(true)
        })
    }

    function handleIzbrisiDonaciju(id){
        if(user && (kateg === "trazi" || kateg==="donirano")){
            axios
            //  .delete(`http://localhost:3001/donacije/${id}`)
             .delete(`http://localhost:5001/api/deleteDonation/${id}`)
             .then(res => {
                if (res.data.success) 
                    setRefresh(true)
            })
            .catch(error => console.log(error))
        }
    }

    function kopijaUTrazimo(donacija){
        const {type: tip, value: vrijednost, details: opis } = donacija
        const noviPodaci = {type: tip, value: vrijednost, details: opis, category: "trazi"}
        axios
        //  .post("http://localhost:3001/donacije", noviPodaci)
         .post("http://localhost:5001/api/postDonation", noviPodaci,{  
         headers: {
            'content-type': "application/json"
            }
        })
         .then(res => {
            if (res.data.success) 
                setRefresh(true)
        })
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
               {donacije.filter(donacija => donacija.category === kateg).map((donacija) => (
                <tr key={donacija.id}>
                    <td>{donacija.type}</td>
                    <td>{donacija.value}</td>
                    <td>{donacija.details}</td>

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