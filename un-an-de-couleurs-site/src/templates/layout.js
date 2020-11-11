import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

import "../styles/main.scss"

const Layout = (props) => {
    return (
        <>
            <div>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout