import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from 'react-confetti';

const ChristmasCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const calculateTimeLeft = () => {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // Month is 0-indexed
    const difference = Number(christmas) - Number(now);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setShowConfetti(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isTimeUp = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (

    <div className="my-8 p-6 rounded-lg shadow-lg bg-gray-800 text-white text-center relative">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <h2 className="text-3xl font-bold mb-4 text-red-500">Countdown to Christmas</h2>
      {showConfetti ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl"
        >
          Merry Christmas Kitty! 🎄
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xl">
          <div>
            <span className="block font-bold text-4xl">{timeLeft.days}</span>
            <span className="text-lg text-gray-400">Days</span>
          </div>
          <div>
            <span className="block font-bold text-4xl">{timeLeft.hours}</span>
            <span className="text-lg text-gray-400">Hours</span>
          </div>
          <div>
            <span className="block font-bold text-4xl">{timeLeft.minutes}</span>
            <span className="text-lg text-gray-400">Minutes</span>
          </div>
          <div>
            <span className="block font-bold text-4xl">{timeLeft.seconds}</span>
            <span className="text-lg text-gray-400">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChristmasCountdown;
