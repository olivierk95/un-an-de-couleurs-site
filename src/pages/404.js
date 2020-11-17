import React from 'react'
import { Link } from 'gatsby'
import Layout from '../templates/layout'
import Head from "../components/head"

import notFoundStyles from './404.module.scss'
import { Helmet } from 'react-helmet'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <div className={notFoundStyles.container}>
                <h1 className="h1-title">Vous vous êtes égaré en chemin.</h1>
                <Link to="/" className={`button--outside button-link bg-color-cycle ${notFoundStyles.link}`}>
                    <div className="button--inside">
                        Revenir à l'accueil
                    </div>
                </Link>
            </div>
        </Layout>
    )
}

export default NotFound