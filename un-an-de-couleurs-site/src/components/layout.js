import React from "react"
import Footer from "./footer"
import Header from "./header"

import "../styles/main.scss"
import layoutStyles from "./layout.module.scss"

const Layout = (props) => {
    return (
        <>
            <div className="bg-color-lighter-cycle">
                <Header></Header>
                <div className={layoutStyles.containeroutside}>
                    <div className={layoutStyles.container}>
                        {props.children}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout