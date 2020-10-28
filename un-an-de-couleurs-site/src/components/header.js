import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div>
                <h1>Logo</h1>
            </div>
            <nav>
                <ul className={headerStyles.list}>
                    <li><Link to="/" className="font-color-cycle" activeClassName="is-active">Galerie</Link></li>
                    <li><Link to="/projet" className="font-color-cycle" activeClassName="is-active">Projet</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header