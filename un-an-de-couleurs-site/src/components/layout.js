import React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <body>
                {props.children}
            </body>
            <Footer></Footer>
        </>
    )
}

export default Layout