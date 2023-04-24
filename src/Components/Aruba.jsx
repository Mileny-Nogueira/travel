import styles from './Aruba.module.css'
import Lugares from './Lugares'

function Aruba(){
    return(
        <div className={styles}>
            <div className={styles.background}>
            <Lugares nome="Aruba" descricao="Aruba, pequena ilha do Caribe holandês ao largo da costa da Venezuela, tem clima seco, praias ensolaradas e ondas suaves. Ventos constantes produzem uma brisa fresca e inclinam as árvores divi-divi para o sudoeste." valor="R$ 2.699,00"></Lugares>
            </div>
        </div>
    );
}

export default Aruba