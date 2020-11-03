import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import Logo from "../assets/un-an-de-couleurs-logo.svg"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.container + ` bg-color-lighter-cycle`}>
                <div className={headerStyles.logo}>
                    <Link className={headerStyles.logolink} to="/"><Logo /></Link>
                </div>
                <h2 className={headerStyles.signature}>Par Organik</h2>
                <nav className={headerStyles.nav}>
                    <ul className={headerStyles.navlist}>
                        <li><Link to="/" className="font-color-cycle" activeClassName="is-active">Galerie</Link></li>
                        <li><Link to="/boutique" className="font-color-cycle" activeClassName="is-active">Boutique</Link></li>
                        <li><Link to="/propos" className="font-color-cycle" activeClassName="is-active">A propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header