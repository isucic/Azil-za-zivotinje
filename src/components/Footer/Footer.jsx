import fo from './Footer.module.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer(){
    return(
        <div className={fo.footer}>
            <div className={fo.footerLeft}>
            <ul className={fo.footerLinks}>
                <li>
                    <Link to="/" className={fo.footerLink}>Opci Podaci</Link>
                </li>
                <li>
                    <Link to="/donacije" className={fo.footerLink}>Donacije</Link>
                </li>
                <li>
                    <Link to="/obavijesti" className={fo.footerLink}>Obavijesti</Link>
                </li>
                <li>
                    <Link to="/popiszivotinja" className={fo.footerLink}>Životinje</Link>
                </li>
            </ul>
            <p>Company Name</p>
            </div>

            <div className={fo.footerRight}>
                <a href="/"><FaFacebook /></a>
				<a href="/"><FaInstagram /></a>
            </div>
        </div>
    )
}

export default Footer;