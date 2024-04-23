import React from "react"
// import Buttons from "./Appbuttons"
import Header from "./Header"
import Footer from "./Footer"
import Feat from "./Features"
import Hero from "./Hero"

export default function App() {
  return (
    <div className="flex-col">
        <Header />
      {/* <div className="site-features"> */}
         <Hero />
         <Feat />
        <Footer />
      {/* </div> */}
    </div>
  )
}

