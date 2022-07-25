import NavBar from "../../components/Spotify/NavBar";
import Premium from "../../components/Spotify/Premium";
import WhyPremium from "../../components/Spotify/WhyPremium";
import NavBarYoutube from "../../components/YoutubeMusic/Navbar";
import { Home, Spotify,YoutubeMusic } from "./styled";

export default function() {
    return (
        <Home>
            <Spotify>
                <NavBar/>
                <Premium/>
                <WhyPremium/>
            </Spotify>
            <YoutubeMusic>
                <NavBarYoutube/>
            </YoutubeMusic>
        </Home>
    )
}