import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ChristmasCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => setIsOpen(!isOpen);

  return (
    <div className="my-10 p-4 max-w-md mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <motion.div
        className={`card ${isOpen ? 'open' : ''}`}
        style={{ perspective: '1000px' }}
        onClick={toggleCard}
      >
        <motion.div
          className={`card-face card-front bg-red-500 p-6 text-center text-white rounded-xl ${isOpen ? 'hidden' : ''}`}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="text-4xl font-extrabold mb-4">Merry Christmas, Amy!</h2>
          <p className="text-lg font-medium">Tap to reveal your surprise...</p>
          <motion.img
            src="https://images.fineartamerica.com/images-medium-large/two-cat-heads-are-better-than-one--anxious-christmas-kittens-kitties-waiting-for-their-xmas-present-chantal-photopix.jpg"
            alt="Christmas"
            className="mt-4 mx-auto rounded-lg"
            style={{ maxHeight: '150px' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          className={`card-face card-back bg-green-500 p-6 text-center text-white rounded-xl ${isOpen ? '' : 'hidden'}`}
          style={{ transform: `rotateY(${isOpen ? '0deg' : '180deg'})` }}
          initial={{ rotateY: -180 }}
          animate={{ rotateY: isOpen ? 0 : -180 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h3 className="text-2xl font-semibold mb-3">A Special Message</h3>
          <p className="text-lg">
            May your holidays sparkle with joy and laughter. Merry Christmas!
          </p>
          <p className="text-lg">My Sweet Kitty,</p>
          <p className="text-lg">
            On this special Christmas day, as we find ourselves away from our
            families in the beautiful city of Seattle, I want to take a moment
            to express the depth of my love and appreciation for you. This year
            has been filled with precious moments, laughter, and the warmth of
            our love, and I can&apos;t help but feel excited about the future we&apos;ll
            continue to build together.
          </p>
          <p className="text-lg">
            Your presence in my life is a gift that I cherish every day. Your
            smile brightens even the cloudiest of Seattle skies, and your love
            has created a home for my heart in this new place we call our own.
          </p>
          <p className="text-lg">
            As we celebrate this Christmas, may our love shine as brightly as
            the city lights, and may our bond grow even stronger with each
            passing moment. I look forward to many more adventures, shared
            dreams, and loving memories as we continue this beautiful journey
            together.
          </p>
          <p className="text-lg">
            Wishing you a Merry Christmas filled with all the love and happiness
            in the world. You are my greatest gift, and I can&apos;t wait to spend
            every second of our future together
          </p>
          <p className="text-lg">With all my love, Hunter 🤍</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChristmasCard;
