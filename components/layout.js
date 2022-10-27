// components/layout.js

import Navbar from './navbar'
import Footer from './footer'
import Title from './title'

export default function Layout({ children }) {
  return (
    <div style={{minHeight: "90vh"}}>
      {/* Default title if not defined in children */}
      <Title full="Public Health FHIR&reg; Implementation Collaborative" />

      <Navbar />

      {children}

      <Footer />
    </div>
  )
}

