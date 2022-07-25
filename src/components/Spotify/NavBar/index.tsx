import  SpotifyLogo  from "../../../assets/Spotify_logo.svg";
import { Grid,Svg,GridMenu,GridMenuUser } from "./Styled"

export default function NavBar() {
    return(
        <Grid>
            <Svg  src={SpotifyLogo} alt="Logo Spotify" />
            <GridMenu>
                <GridMenu>
                    <h3>Premium</h3>
                    <h3>Suporte</h3>
                    <h3>Baixar</h3>
                    <h3> | </h3>
                </GridMenu>
                <GridMenuUser>
                    <h3>Inscreva-se</h3>
                    <h3>Entrar</h3>
                </GridMenuUser>
            </GridMenu>
        </Grid>
    )
}