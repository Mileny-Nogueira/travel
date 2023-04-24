import styles from './Lugares.module.css'

function Lugares(props){
    return(
        <div className={styles.quadrolugares}>
            <h2 className={styles.nome}>{props.nome}</h2>
            <p className={styles.descricao}>{props.descricao}</p>
            <h3 className={styles.valor}>{props.valor}</h3>
        </div>
    );
}

export default Lugares