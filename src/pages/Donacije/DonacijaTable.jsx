import { useContext } from "react";
import styles from './Donacije.module.css'
import userContext from "../../context/userContext";

function DonacijeTable({donacije, kateg}){

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
                    {!user && kateg=="trazi" && <td><button>Doniraj</button></td>}
                    {/* U tablici Nudi, samo admin vidi botun Prihvati */}
                    {user && kateg=="nudi" && <td><button>Prihvati</button></td>}

                    {/* U tablici donirano, samo admin ima pravo na botun Ponovi i izbrisi */}
                    {user && kateg=="donirano" && 
                    <td>
                        <button>Ponovi</button>
                        <button>Izbrisi</button>
                    </td>}

               </tr>
                ))}
            </tbody>
    </table>
    )
}

export default DonacijeTable;