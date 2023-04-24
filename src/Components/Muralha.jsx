import styles from './Muralha.module.css'
import Lugares from './Lugares'

function Muralha(){
    return(
        <div className={styles}>
            <div className={styles.background}>
            <Lugares nome="Muralha" descricao="A muralha foi erguida em razão da grande incidência de invasões dos povos do norte vindos da Mongólia e da Manchúria. Essa construção tinha uma função estratégica militar de defesa." valor="R$ 4.000,00"></Lugares>
            </div>
        </div>
    );
}

export default Muralha