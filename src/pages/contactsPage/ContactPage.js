import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function ContactPage() {
  const date = new Date().toLocaleString();

  return (
    <div>
      <Header />

      <div style={{height: '500px'}}>
        <h1>Contacts Page</h1>
        <p> {date} </p>
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
