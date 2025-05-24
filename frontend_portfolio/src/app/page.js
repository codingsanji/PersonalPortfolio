//home page of the application (as in what is displayed in Localhost:3000/)
/*
import { Typewriter } from './typewriter_text.tsx';
<h1 className="text-2xl font-normal italic antialiased  text-gray-400">(<Typewriter
          text={["CS Student", "Developer", "Artist","Gamer"]}
          speed={150}
          loop={true}
          className="text-2xl font-semibold italic antialiased text-gray-400" 
        />)</h1> */


import "../styles/fonts.css";
import { Github , Linkedin , Instagram , Twitter , Music } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-1 md:gap-2">
        {/* Left side */}
        <div className="flex-1 text-left">
          <h1 className="text-2xl font-light text-white">Hello,</h1>
          <h1 className="text-3xl font-normal text-white funnel-display-font">
            I'm Deydeepya.
          </h1>
          <h2 className="text-2xl font-light text-white mt-2">How may I assist you today?</h2>
          <div className="flex flex-row mt-4">
            <a href="https://github.com/codingsanji" target="_blank" className="mx-1"><Github color="#ffffff" /></a>
            <a href="https://www.linkedin.com/in/sombatla-truc-deydeepya-lakshmi-096202274/" target="_blank" className="mx-1"><Linkedin color="#ffffff" /></a>
            <a href="https://www.instagram.com/bweezue/" target="_blank" className="mx-1"><Instagram color="#ffffff" /></a>
            <a href="https://x.com/lethientruc_c" target="_blank" className="mx-1"><Twitter color="#ffffff" /></a>
            <a href="https://open.spotify.com/user/31qdkq24rzp5r5yqmxhod6reqztu?si=307943cbbb5d425b" target="_blank"><Music color="#ffffff" /></a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-4 justify-center items-start mt-4 md:mt-6">
          <a href="/devfolio"><button className="pushable">
            <span className="edge"></span>
            <span className="front text-green-100"> Developer Portfolio </span>
          </button></a>
          <a href="/artfolio"><button className="pushable">
            <span className="edge"></span>
            <span className="front text-yellow-100"> Artist Portfolio </span>
          </button></a>
        </div>
      </div>
    </div>
  );
}
