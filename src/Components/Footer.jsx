import styles from './Footer.module.css'
import Insta from './imagens/instagram.png'
import Face from './imagens/facebook.png'
import Tiktok from './imagens/tiktok.png'
import Whats from './imagens/whatsapp.png'

function Footer(){
    return(
        <div className={styles.footer}>
            <img src={Insta} alt="logo instagram" />
            <img src={Face} alt="logo facebook" />
            <img src={Tiktok} alt="logo tiktok" />
            <img src={Whats} alt="logo whatsapp" />
        </div>
    );
}

export default Footer