import { Link } from "react-router-dom"
import styles from './Navigacija.module.css'
import logo from '../images/icon.svg'
import { useContext,useState } from "react"
import Toggle from '../ToggleSwitch/Toggle'
import userContext from "../../context/userContext"
import Login from "../../pages/Login/Login"

function Navigacija({action}){

    const [login,setLogin] = useState(false)
    const handleLogin = () => {
        console.log("Botun")
        setLogin(true)
    }

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
                {/* <Link to="/login" className={styles.login}>Login</Link> */}
                <p>Admin</p>
                <Toggle onChange={action}/>
            </div>
            
        </div>
    )
}

export default Navigacija