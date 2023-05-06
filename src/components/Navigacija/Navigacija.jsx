import { Link } from "react-router-dom"
import styles from './Navigacija.module.css'
import logo from '../images/shelter.png'
import { useContext, useState } from "react"
import Toggle from '../ToggleSwitch/Toggle'
import userContext from "../../context/userContext"

function Navigacija({action}){

    const user = useContext(userContext)
    return(
        <div className={styles.navigacija}>
            <Link to="/"><img src={logo} className={styles.logo}/></Link>

            <ul className={styles.navUl}>
                <li className={styles.navLink}>
                    <Link to="/" className={styles.link}>Početna</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/donacije" className={styles.link}>Donacije</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/obavijesti" className={styles.link}>Obavijesti</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/zivotinje" className={styles.link}>Životinje</Link>
                </li>
                {user && 
                <li className={styles.navLink}>
                    <Link to="/unosnovezivotinje" className={styles.link}>Unos Novih</Link>
                </li>}
            </ul>

            <div className={styles.navbarLogin}>
                {/* <Link to="/" className={styles.login}>Login</Link> */}
                {user ? (<p>Admin</p>) : (<p>Korisnik</p>)}
                <Toggle onChange={action}/>
            </div>
            
        </div>
    )
}

export default Navigacija