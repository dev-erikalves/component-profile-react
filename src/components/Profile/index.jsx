import styles from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img className={styles.myPhoto} src={props.imgPerfil} alt="Foto de Perfil" />
            <h3>{props.name}</h3>
            <p>{props.bio}</p>
            <p>{props.contact}</p>
            <p>{props.email}</p>
            <div className={styles.containerButtons}>
                <a href={props.githubUrl} target="_blank">Github</a>
                <a href={props.linkedinUrl} target="_blank">Linkedin</a>
                <a href={props.instagramUrl} target="_blank">Instagram</a>
            </div>
        </div>
    )
}