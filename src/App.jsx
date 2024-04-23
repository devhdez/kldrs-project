import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Feat from "./Features"
import Hero from "./Hero"

export default function App() {
  return (
    <div className="flex-col">
        <Header />
         <Hero />
         <Feat />
        <Footer />
    </div>
  )
}

