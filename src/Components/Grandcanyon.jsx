import styles from './Grandcanyon.module.css'
import Lugares from './Lugares'

function Grandcanyon(){
    return(
        <div className={styles}>
            <div className={styles.background}>
            <Lugares nome="Grand Canyon" descricao="O Grand Canyon, no Arizona, é uma formação natural constituída de camadas de rocha vermelha, que revelam milhões de anos da história geológica em seção transversal." valor="R$ 4.000,00"></Lugares>
            </div>
        </div>
    );
}

export default Grandcanyon