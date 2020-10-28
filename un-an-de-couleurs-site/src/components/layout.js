import React from "react"
import Footer from "./footer"
import Header from "./header"

import "../styles/main.scss"
import layoutStyles from "./layout.module.scss"

const Layout = (props) => {
    return (
        <>
            <div className={layoutStyles.layout + ` bg-color-lighter-cycle`}>
                <Header></Header>
                <body>
                    {props.children}
                </body>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout