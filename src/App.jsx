import React from "react"
// import Buttons from "./Appbuttons"
import Header from "./Header"
import Footer from "./Footer"
// import Feat from "./Features"
import Hero from "./Hero"

export default function App() {
  return (
    <div className="flex-col">
        <Header />
      {/* <div className="site-features"> */}
        <div>
         <Hero />
        </div>
        
        {/* <Feat /> */}
      {/* </div> */}
      {/* <div className="flex rounded-2xl border-red-700 items-center mx-auto my-3"> */}
        {/* <Buttons /> */}
      {/* </div> */}
      {/* <div className="site-footer"> */}
        <Footer />
      {/* </div> */}
    </div>
  )
}

