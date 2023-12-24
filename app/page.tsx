'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

import Snowfall from 'react-snowfall';
import Gallery from './components/gallery';
import LoveNote from './components/loveNote';
import SpecialDates from './components/specialDates';
import MusicPlayer from './components/musicPlayer';
import MessageBoard from './components/messageBoard';

export default function Home() {


  return (
	<>
	  <div className="home-container bg-gray-950 text-white min-h-screen" style={{ position: 'relative', zIndex: 1 }}>
        <Snowfall style={{ zIndex: 10, position: 'absolute' }} />

        <header className="text-center py-8 shadow-md bg-gray-900" style={{ zIndex: 5 }}>
        {/* ...header content */}
        <h1 className="text-5xl font-romantic text-deep-red">
          All About Amy
        </h1>
        <p className="subtitle text-2xl mt-2 font-light">
          Celebrating Our Love and Memories
        </p>
      </header>

    <main style={{ zIndex: 5 }}>
		  <section className="gallery-section my-8">
			<h2 className="section-title text-3xl font-semibold font-sans text-center mb-6">
			  Our Gallery of Memories
			</h2>
			<Gallery />
		  </section>

		  <section className="love-note-section my-8 bg-pink-100 text-gray-800 p-6 rounded-lg">
			<h2 className="section-title text-3xl font-semibold text-center mb-6">
			  Love Notes
			</h2>
			<LoveNote />
		  </section>

		  <section className="special-dates-section my-8">
			<h2 className="section-title text-3xl font-semibold text-center mb-6">
			  Special Dates
			</h2>
			<SpecialDates />
		  </section>

		  <section className="music-player-section my-8 bg-gray-800 p-6 rounded-lg">
			<h2 className="section-title text-3xl font-semibold text-center mb-6 text-pink-500">
			  Our Playlist
			</h2>
			<MusicPlayer />
		  </section>

		  {/* <section className="message-board-section my-8">
			<h2 className="section-title text-3xl font-semibold text-center mb-6">
			  Messages for Amy
			</h2>
			<MessageBoard />
		  </section> */}
		</main>

		<footer className="footer text-center py-4 bg-red-600 mt-8 border-t-4 border-gold">
  <div className="container mx-auto px-6">
    <div className="text-white text-lg font-semibold">
      <p>Made with <span className="text-red-800" role="img" aria-label="heart">❤️</span> for Amy</p>
      <p className="text-sm font-light">Wishing You a Merry Christmas 🎄</p>
    </div>
    
  </div>
</footer>

	  </div>
	</>
  );
}
