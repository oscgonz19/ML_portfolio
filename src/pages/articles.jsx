"use client";
import React from "react";
import '../app/globals.css';
//componets
import Articles from "../app/componets/articlesComponent";
import Navbar from '../app/componets/Navbar';
import Projects from '../app/componets/Projects';
import Profile from "../app/componets/Profile";
import Footer from "../app/componets/Footer";

export default function articlePage() {
  return (
    <div className="relative inset-0 min-h-screen flex flex-col">
      {/* Navbar with sticky position */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-1">

        {/* Marca el final de la visibilidad de Navbar con un cambio de clase o estilo */}
        <div className="relative" id="end-of-navbar-visibility">
          <Articles />
        </div>
        <div className="p-2 container mx-auto">
          <Profile />
        </div>
      </main>
      <Footer />
    </div>
  );
}