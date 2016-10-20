import React from 'react'

import Footer from '../Footer'

const App = props => {
    return (
        <div>
            {props.children}
            <Footer />
        </div>
    )
}

export default App
