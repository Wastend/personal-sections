import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './PageWrapper.css'

const PageWrapper = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default PageWrapper