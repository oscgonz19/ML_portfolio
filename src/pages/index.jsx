"use client";
import React from "react";
import '../app/globals.css';
// Componentes
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
    <div className="relative inset-0 min-h-screen flex flex-col bg-gray-100">
      {/* Navbar con posición sticky */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <main className="flex-1">
        <HeroSection />
        <div className="px-2 sm:px-6 lg:px-8">
          <AreasOfInterest />
          <div className="relative">
            <Articles />
            <PortfolioComponent />
          </div>
          <div className="container mx-auto bg-black-100">
            <Profile />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}