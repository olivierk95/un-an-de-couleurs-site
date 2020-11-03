import React from "react"
import Footer from "./footer"
import Header from "./header"

import "../styles/main.scss"

const Layout = (props) => {
    return (
        <>
            <div className="bg-color-lighter-cycle">
                <Header></Header>
                {props.children}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout