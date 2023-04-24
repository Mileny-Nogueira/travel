import styles from './Header.module.css'
import Logo from './imagens/logo.png'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.containerLogo}>
                <img src={Logo} alt="logo de viagens" />
            </div>
            <ul className={styles.navegacao}>
                <li><Link to='/' style={{ textDecoration: 'none', color: '#000'}}>Home</Link></li>
                <li><Link to='/Grandcanyon' style={{ textDecoration: 'none', color: '#000'}}>Grand Canyon</Link></li>
                <li><Link to='/Escocia' style={{ textDecoration: 'none', color: '#000'}}>Escócia</Link></li>
                <li><Link to='/Muralha' style={{ textDecoration: 'none', color: '#000'}}>Muralhas da China</Link></li>
                <li><Link to='/Aruba' style={{ textDecoration: 'none', color: '#000'}}>Aruba</Link></li>
            </ul>
            <div className={styles.busca}>
                <input type="text" placeholder='Qual o seu destino?'/>
            </div>
        </div>
    );
}

export default Header