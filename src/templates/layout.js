import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

import "../styles/main.scss"
import layoutStyles from "./layout.module.scss"

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout