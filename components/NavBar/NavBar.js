import { library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import Image from "next/image"



const linkStyle = {
    marginRight: 15
}

export default function NavBar () {
    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                    <Image
                        src="/img/DRE.png"
                        width="80"
                        height="80"
                        alt="DRE"
                    />
                    </div>
                    <ul className="menu">
                        <li><a href="/" className="menu-btn">Home</a></li>
                        <li><a href="/sobre" className="menu-btn">Sobre</a></li>
                        <li><a href="/contato" className="menu-btn">Contato</a></li>
                    </ul>
                    <div className="menu-btn">
                       <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

