import React from 'react'

const SectionWrapper = ({ children }) => {
    return (
        <section id='photo-galerie'>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default SectionWrapper