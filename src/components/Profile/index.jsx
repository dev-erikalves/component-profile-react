export default function Profile(props) {
    const myNumber = "(89) 99430-7093"
    const myEmail = "dev.eriksantos@gmail.com"
    return (
        <div className="container-profile">
            <img src={props.imgPerfil} alt="Foto de Perfil" />
            <h3>Erik Alves</h3>
            <p>FullStack Developer</p>
            <p>{myNumber}</p>
            <p>{myEmail}</p>
        </div>    
    )
}