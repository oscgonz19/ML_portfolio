"use client";
import React from "react";
import '../app/globals.css';
//componets
import HeroSection from '../app/componets/HeroSection';
import Navbar from '../app/componets/Navbar';
import Projects from '../app/componets/Projects';
import AboutMe from "../app/componets/AboutMe";
import AreasOfInterest from "../app/componets/AreasOfInterest";
import Mentorship from "../app/componets/Mentorship";
import Profile from "../app/componets/Profile";
import Footer from "../app/componets/Footer";
import PortfolioComponent from "@/app/componets/PortfolioComponent";
import Articles from "../app/componets/articlesComponent";

export default function Home() {
  return (
    <div className="relative inset-0 min-h-screen flex flex-col">
      {/* Navbar with sticky position */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-1">
        <HeroSection />
        <AreasOfInterest />
        {/* Marca el final de la visibilidad de Navbar con un cambio de clase o estilo */}
        <div className="relative" id="end-of-navbar-visibility">
          <Articles />
          <PortfolioComponent />
        </div>
        <div className="p-2 container mx-auto">
          <Profile />
        </div>
      </main>
      <Footer />
    </div>
  );
}