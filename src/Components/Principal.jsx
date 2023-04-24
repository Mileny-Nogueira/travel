import styles from './Principal.module.css'
import Mala from './imagens/mala.png'

function Principal(){
    return(
        <div className={styles.principal}>
            <div className={styles.imagemPrincipal}>
                <img src={Mala} alt="mala de viagem"/>
            </div>
            <div className={styles.textoPrincipal}>
                <h1>Viva experiências únicas com a Travel do seu lado!</h1>
                <p>Desconecte do estresse do trabalho, relaxe e desfrute de paisagens deslumbrantes e explore cidades vibrantes. Com os nossos serviços você não tem que se preocupar com absolutamente nada. Nós resolvemos pra você!</p>
            </div>
        </div>
    );
}

export default Principal