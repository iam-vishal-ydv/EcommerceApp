import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Nabvar/Nabvar'

  const  Layout=({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout