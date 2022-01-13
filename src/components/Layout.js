import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in";

export default function Layout({ children }) {
  return (
    <div>
      <FadeIn>
        <Navigation/>
        <div>
          {children}
        </div>
        <Footer/>
      </FadeIn>
    </div>
  )
}