import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Features from "../components/Features";
import Process from "../components/Process";

const Home = ({ onOpenModal }) => (
  <main className="max-w-6xl mx-auto px-6 py-12">
    <Hero onPrimaryAction={onOpenModal} />
    <Stats />
    <Services />
    <Features />
    <Process />
  </main>
);

export default Home;
