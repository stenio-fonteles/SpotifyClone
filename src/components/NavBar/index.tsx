import  SpotifyLogo  from "../../assets/Spotify_logo.svg"


export default function NavBar() {
    return(
        <div>
            <img src={SpotifyLogo} alt="Logo Spotify" />
            <div>
                <h3>Premium</h3>
                <h3>Suporte</h3>
                <h3>Baixar/</h3>
            </div>
            <div>
                <h3>Inscreva-se</h3>
                <h3>Entrar</h3>
            </div>
        </div>
    )
}