import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home.jsx'
import FicheLogement from '../src/pages/FicheLogement/FicheLogement'
import About from '../src/pages/About/About'
import Error from '../src/pages/Error/Error'
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer.jsx'
import '../src/style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichelogement/:id" element={<FicheLogement />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)