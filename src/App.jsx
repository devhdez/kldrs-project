import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Feat from "./Features"
import Hero from "./Hero"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from "./PrivacyPolicy"



export default function App() {
  return (
    <Router>
      <div className="flex-col">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Feat />
            </>
          } />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

