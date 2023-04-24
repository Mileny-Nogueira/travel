import styles from './Escocia.module.css'
import Lugares from './Lugares'

function Escocia(){
    return(
        <div className={styles}>
            <div className={styles.background}>
                <Lugares nome="Escócia" descricao="A Escócia, um país no extremo norte do Reino Unido, é uma terra de áreas selvagens montanhosas, como os Cairngorms e as Terras Altas do Noroeste, intercaladas por vales glaciais e lagos. As principais cidades são Edimburgo, a capital, com seu famoso castelo em uma colina, e Glasgow, famosa pelo vibrante cenário cultural. " valor="R$ 5.166,00"></Lugares>
            </div>
        </div>
    );
}

export default Escocia