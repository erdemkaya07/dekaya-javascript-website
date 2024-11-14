import { useState } from "react";
import "./App.css";
import "../src/assets/css/utilities.css";
import "../src/assets/css/media.css";
import "../src/assets/css/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/Navbar/NavBar";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Services from "./views/Services";
import References from "./views/References";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import FooterDetails from "./components/FooterDetails";
import ServiceDetail from "./components/Home/OurServices/ServiceDetail";
import ScrollToTop from "./api/ScrollToTop";
import BlogList from "./components/Blog/BlogList";
import BlogDetail from "./components/Blog/BlogDetail";
import StructuredData from "./StructuredData";

function App() {
  return (
    <HelmetProvider>
      <StructuredData />
      <BrowserRouter>
      <ScrollToTop />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<AboutUs />} />
            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/hizmetlerimiz/:serviceId" element={<ServiceDetail />} />
            <Route path="/referanslar" element={<References />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} /> 
          </Routes>
        </main>
        <FooterDetails />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
