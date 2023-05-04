import { Link } from "react-router-dom"
import styles from './Navigacija.module.css'
import logo from '../images/shelter.png'

function Navigacija(){
    return(
        <div className={styles.navigacija}>
            <Link to="/"><img src={logo} className={styles.logo}/></Link>

            <ul className={styles.navUl}>
                <li className={styles.navLink}>
                    <Link to="/" className={styles.link}>Opci Podaci</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/donacije" className={styles.link}>Donacije</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/obavijesti" className={styles.link}>Obavijesti</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/popiszivotinja" className={styles.link}>Životinje</Link>
                </li>
                <li className={styles.navLink}>
                    <Link to="/unosnovihzivotinja" className={styles.link}>Unos Novih</Link>
                </li>
            </ul>

            <div className={styles.navbarLogin}>
                <Link to="/" className={styles.login}>Login</Link>
            </div>
            
        </div>
    )
}

export default Navigacija