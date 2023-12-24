'use client';
import React from 'react';

const SpecialDates = () => {
  // Dummy data for romantic significant dates
  const romanticDates = [
	{
	  date: 'February 14',
	  occasion: 'Valentine\'s Day',
	  icon: '❤️',
	},
	{
	  date: 'June 18',
	  occasion: 'Our First Date',
	  icon: '🥰',
	},
	{
	  date: 'September 22',
	  occasion: 'Anniversary',
	  icon: '💑',
	},
	{
	  date: 'December 25',
	  occasion: 'Christmas',
	  icon: '🎄',
	},
	// Add more significant dates as needed
  ];

  return (
	<div className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 p-8 rounded-lg shadow-xl text-black my-6">
	  <h2 className="text-4xl font-extrabold text-center text-pink-200 mb-6">
		📅 Romantic Special Dates 💌
	  </h2>
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{romanticDates.map((date, index) => (
		  <div
			key={index}
			className="bg-white p-6 rounded-lg transform hover:scale-105 transition duration-300 hover:shadow-lg"
		  >
			<div className="text-6xl mb-3 text-pink-500">{date.icon}</div>
			<div className="text-2xl font-semibold mb-2">{date.date}</div>
			<div className="text-sm text-gray-700">{date.occasion}</div>
		  </div>
		))}
	  </div>
	  <p className="text-center text-sm text-gray-300 mt-8">
		Made with ❤️ by Vercel, Meta, Figma, and Adobe
	  </p>
	</div>
  );
};

export default SpecialDates;
