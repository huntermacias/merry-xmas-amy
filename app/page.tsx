"use client";
import React from "react";
import { motion } from 'framer-motion';
import Snowfall from "react-snowfall";
import Gallery from "./components/gallery";
import LoveNote from "./components/loveNote";
import MusicPlayer from "./components/musicPlayer";
import ChristmasCountdown from "./components/christmasCountdown";
import ChristmasCard from "./components/christmasCard";

export default function Home() {
  return (
    <>
      <div className="home-container bg-gray-950 text-white min-h-screen relative px-4 md:px-8">
        <Snowfall style={{ zIndex: 10, position: "absolute" }} />

        <header className="text-center py-8 shadow-md bg-gray-900 relative z-10">
          <h1 className="text-4xl md:text-5xl font-romantic text-deep-red">
            All About Amy
          </h1>
          <p className="subtitle text-lg md:text-xl mt-2 font-light">
            Celebrating Our Love and Memories
          </p>
        </header>

        <main style={{ zIndex: 5 }}>
          <ChristmasCountdown />
          <ChristmasCard />

          <section className="love-note-section my-8 p-6 rounded-lg shadow-xl bg-soft-blush relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-charcoal">
              <h2 className="text-2xl md:text-3xl font-romantic text-deep-red mb-4">Our Love Notes</h2>
              <LoveNote />
            </div>
          </section>

          <section className="gallery-section my-8">
            <motion.h2 
              className="section-title text-2xl md:text-3xl font-semibold text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Gallery of Memories
            </motion.h2>
            <Gallery />
          </section>

          <section className="music-player-section my-8 bg-gray-800 p-6 rounded-lg">
           
            <MusicPlayer />
          </section>

        </main>

        <footer className="footer text-center py-6 bg-rich-red mt-8 border-t-4 border-golden relative z-10">
  <div className="container mx-auto px-4">
    <div className="text-white text-xl md:text-2xl font-semibold mb-2">
      Made with <span className="text-deep-red" role="img" aria-label="heart">❤️</span> for Amy
    </div>
    <p className="text-md md:text-lg font-light text-golden">
      Wishing You a Merry Christmas 🎄
    </p>
    <div className="mt-4 text-white text-sm md:text-md font-light">
      © 2023 by Amy&apos;s Admirer. All rights reserved.
    </div>
  </div>
</footer>

      </div>
    </>
  );
}
