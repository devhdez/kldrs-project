import React from "react"
import MyComponent from 'react-mobile-store-button'
import Header from "./Header"
import Footer from "./Footer"
import Feat from "./Features"

export default function App() {
  return (
    <div className="flex-col">
        <Header />
      {/* <div className="site-features"> */}
        <Feat />
      {/* </div> */}
        <MyComponent />
      {/* <div className="site-footer"> */}
        <Footer/>
      {/* </div> */}
    </div>
  )
}

