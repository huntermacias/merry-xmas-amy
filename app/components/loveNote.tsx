'use client';

import React, { useState, useEffect } from 'react';

const LoveNote = () => {
  const initialLoveNotes = [
	"You are the sunshine in my life. 🌞",
	"My love for you is deeper than the ocean. 🌊",
	"You make every day better just by being in it. 🌟",
	"Your smile brightens up my world. 😊",
	"You are my rock, my love, and my best friend. 💖",
	"In your arms, I've found my home. 🏡",
	"Every moment with you is a treasure. ⏳",
	"I'm grateful for all the love you bring into my life. 🙏",
	"You complete me in every way. 💑",
	"With you, every day feels like a new adventure. 🌍",
	"Your laughter is the sweetest music to my ears. 🎶",
	"I love you more than words can express. ❤️",
	// Add more love notes as needed
  ];

  const [loveNotes, setLoveNotes] = useState(initialLoveNotes);
  const [selectedLoveNote, setSelectedLoveNote] = useState('');

  useEffect(() => {
	// Select a random love note when the component mounts
	selectRandomLoveNote();
  }, []);

  const selectRandomLoveNote = () => {
	const randomIndex = Math.floor(Math.random() * loveNotes.length);
	setSelectedLoveNote(loveNotes[randomIndex]);
  };

  const getAnotherLoveNote = () => {
	// Remove the current love note from the list
	const updatedLoveNotes = loveNotes.filter((note) => note !== selectedLoveNote);
	setLoveNotes(updatedLoveNotes);

	// Select a new random love note
	selectRandomLoveNote();
  };

  return (
	<div className="bg-pink-100 p-6 rounded-lg shadow-lg text-center my-6">
	  <h2 className="text-3xl font-semibold text-pink-600 mb-4">💌 Sweet Love Note 💌</h2>
	  <p className="text-lg font-medium text-gray-800 mb-4">{selectedLoveNote}</p>
	  <button
		onClick={getAnotherLoveNote}
		className="bg-pink-600 hover:bg-pink-700 text-white font-semibold 
		px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 
		focus:ring-opacity-50 transform hover:scale-105 transition duration-300"
		style={{ zIndex: 9999 }}
	  >
		Get Another Love Note
	  </button>
	</div>
  );
};

export default LoveNote;
