import React, {useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FadeIn from "react-fade-in";

export default function Layout({ children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-4VCYYJHD94";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-4VCYYJHD94');
  }, []);

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