import logo from "../../assets/footerLOGO.png"
import "./index.scss"

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="Logo de Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer