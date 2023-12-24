"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoveNote = () => {
  const initialLoveNotes = [
    "You are the sunshine that lights up my life with joy and warmth. 🌞",
    "My love for you is deeper and vaster than the endless ocean. 🌊",
    "Every day is brighter and more beautiful with you in it. 🌟",
    "Your smile is the light that brightens my darkest days. 😊",
    "You are my rock in turbulent times, my deepest love, and my most trusted friend. 💖",
    "In your arms, I have found the safe haven of my home. 🏡",
    "Each moment spent with you is a precious gem, treasured in my heart. ⏳",
    "I am eternally grateful for the boundless love you shower upon me. 🙏",
    "You complete me in every aspect, making me whole. 💑",
    "Life with you is an endless adventure, filled with excitement and joy. 🌍",
    "Your laughter is like sweet music, creating melodies of happiness in my life. 🎶",
    "I love you more than any words could ever truly express. ❤️",
    "You are the melody that harmonizes with my heart's deepest desires. 🎵",
    "In the depth of your eyes, I find peace and tranquility. 💫",
    "You shine brighter than the stars, illuminating my life's path. 🌠",
    "Our journey together is a beautiful tale of love and companionship. 🛤️",
    "You bring magic to my everyday life, turning the ordinary into extraordinary. ✨",
    "Every shared moment with you is cherished and held dear. 💌",
    "Your love enriches me, making me feel like the wealthiest person alive. 💰❤️",
    "In your love, I find my strength and a peaceful sanctuary. 🌹",
    "You are the dream that I never knew I had, but now can't live without. 💭",
    "Loving you is as natural and essential as breathing. 💘",
    "Your smile is the reason behind my every joy and happiness. 😊",
    "Being with you is like being in the best place in the world. 🌍💑",
    "My heart dances to the beat of your love, skipping with joy every time. 💓",
    "In your presence, all of life's troubles seem to disappear. ☀️",
    "Your touch brings me comfort and solace, like a warm, gentle embrace. 🤗",
    "In the realm of your love, I see infinite possibilities and hope. 🌈",
    "You are the missing puzzle piece that makes my life complete. 🧩",
    "Your love guides me through darkness, like a bright, shining light. 🔦💕",
    "Every heartbeat of mine whispers your name with love. 💗",
    "You are my forever, the eternal love of my life. ⏳💕",
    "Each second with you turns into a beautiful, everlasting memory. ⏰",
    "Your love is a symphony that resonates with my soul. 🎼",
    "In the stormy seas of life, your love is my calm haven. 🌊❤️",
    "You are the highlight of my day, every single day. ☀️💕",
    "Together, we create a perfect harmony, a melody of love. 🎶💏",
    "You are my ray of hope on cloudy days, bringing light and joy. 🌤️",
    "Alive and vibrant, I am whole with you by my side. 🔥",
    "You hold the key to my heart, guarding its deepest secrets. 🔒❤️",
    "Your love is the essence of my very being, the core of my existence. 🌟",
    "Believing in love was made possible because of you. 💖",
    "In your embrace, I find safety and love, my sanctuary. 🏰💑",
    "With you, my life is a fairy tale, filled with love and happiness. 🧚‍♂️💖",
    "Your love is my compass, leading me to joy and contentment. 🧭❤️",
    "Every night, I thank the stars for the blessing that is you. 🌙✨",
    "Your love fills my world with vivid and vibrant colors. 🎨💕",
    "To the tune of your love, my heart joyously dances. 💃🎵",
    "In the universe of your love, I find endless joy and wonder. 🌌",
    "You are the reason my life is filled with beauty and happiness. 🌸",
    "Every moment with you writes a beautiful chapter in our love story. 📖💏",
  ];

  const [loveNotes, setLoveNotes] = useState(initialLoveNotes);
  const [selectedLoveNote, setSelectedLoveNote] = useState("");

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
    // const updatedLoveNotes = loveNotes.filter((note) => note !== selectedLoveNote);
    // setLoveNotes(updatedLoveNotes);

    // Select a new random love note
    selectRandomLoveNote();
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };



  return (
    <motion.div
      className="love-notes-section bg-soft-pink p-8 md:p-12 rounded-lg shadow-lg text-center my-8 mx-4 md:mx-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-romantic text-deep-red mb-6">
        💌 Your Sweet Love Note 💌
      </h2>
      <motion.div
        className="love-note-card p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        }}
        initial="hidden"
        animate="visible"
      >
        <p className="text-xl md:text-2xl text-gray-700 font-light">
          {selectedLoveNote}
        </p>
      </motion.div>
      <button
        onClick={getAnotherLoveNote}
        className="mt-6 bg-deep-red hover:bg-dark-red text-white font-semibold 
          px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 
          focus:ring-opacity-50 transform hover:scale-105 transition duration-300"
        style={{ zIndex: 9999 }}
      >
        Discover Another Note
      </button>
    </motion.div>
  );
};

export default LoveNote;
