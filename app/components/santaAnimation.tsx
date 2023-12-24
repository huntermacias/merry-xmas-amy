import { motion } from 'framer-motion';

const SantaAnimation = () => {
	const santaVariants = {
		start: {
		  x: 'calc(-100% - 100px)', // Start off-screen to the left
		  y: '10vh', // Start from a higher vertical position
		  rotateY: 0, // Facing forwards initially
		},
		end: {
		  x: '100%', // Move across to the right edge of the screen
		  y: ['10vh', '90vh', '10vh'], // Move up and down
		  rotateY: 180, // Flip Santa on the return path
		},
	  };
	  

	  return (
		<motion.div
		  className="santa"
		  variants={santaVariants}
		  initial="start"
		  animate="end"
		  transition={{
			duration: 10,
			repeat: Infinity,
			repeatType: "reverse", // Ensure Santa goes back and forth
			ease: "linear"
		  }}
		  style={{ 
			position: 'fixed',
			width: 100,
			height: 100
		  }}
		>
		  <img src="/images/santa2.png" alt="santa" style={{ width: '100%', height: '100%' }} />
		</motion.div>
	  );
};

export default SantaAnimation;
