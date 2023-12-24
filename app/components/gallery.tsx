/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react';
// import Image from 'next/image';
import galleryData from '../data/data.js';
import { Calendar, Star, Camera, Heart, LucideIcon } from 'lucide-react';

interface IconTypes {
	star: typeof Star;
	camera: typeof Camera;
	heart: typeof Heart;
	// Add more icons as needed
  }
  
const iconMapper: IconTypes = {
star: Star,
camera: Camera,
heart: Heart,
// ... map more icons
};
  

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(4); // Initial limit
  const additionalImagesCount = 4;
  const getIconComponent = (key: string): LucideIcon | undefined => {
	return iconMapper[key as keyof IconTypes];
  }
  

  const displayedImages = showAll
	? galleryData
	: galleryData.slice(0, displayLimit);

const openModal = (image: any) => {
	setSelectedImage(image);
	// Implementing keyboard navigation for accessibility
	window.addEventListener('keydown', handleKeyDown);
  };

  const closeModal = () => {
	setSelectedImage(null);
	window.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (e:any) => {
	if (e.key === 'Escape') {
	  closeModal();
	}
  };

  const toggleShowMore = () => {
	if (displayLimit >= galleryData.length) {
	  setDisplayLimit(4); // Reset to the initial limit
	} else {
	  setDisplayLimit(displayLimit + additionalImagesCount); // Add more images
	}
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	  {displayedImages.map((image) => {
		const IconComponent = getIconComponent(image.icon);
          return (
			<div key={image.id} 
				className="group rounded-2xl overflow-hidden cursor-pointer bg-soft-white shadow-lg transform transition duration-300 hover:scale-105"
				onClick={() => openModal(image)}>
              <div className="relative w-full h-60">
                <img src={image.src} alt={`${image.title}`} className="object-cover w-full h-full" />
              </div>
              <div className="p-4 flex justify-between items-center bg-soft-blush">
                <div>
                  <p className="font-semibold font-romantic text-deep-red">{image.title}</p>
                  <div className="flex items-center font-sans text-sm text-charcoal">
                    <Calendar className="mr-2" />{image.date}
                  </div>
                </div>
                {IconComponent && <IconComponent className="text-rich-pink" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button and Modal Component... */}
	   <div className="text-center mt-6">
		<button
		  className="px-4 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
		  onClick={toggleShowMore}
		>
		  {displayLimit >= galleryData.length ? 'Show Less' : 'Show More'}
		</button>
	  </div>

	  {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

type ModalProps = {
	image: any;
	closeModal: any;
};

const Modal = ({ image, closeModal }: ModalProps) => (
	<div
	  className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
	  onClick={closeModal}
	>
	  <div
		className="bg-soft-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full"
		onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
	  >
		<div className="p-5">
		  <h3 className="text-2xl font-romantic text-deep-red mb-3">
			{image.title}
		  </h3>
		  <div className="border-b border-gray-300 mb-4"></div>
		  <div className="text-charcoal text-sm mb-4">
			<p>{image.description}</p>
		  </div>
		  <img
			src={image.src}
			alt={image.title}
			className="mx-auto"
			style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
		  />
		</div>
		<div className="flex justify-end p-4">
		  <button
			className="px-4 py-2 bg-rich-pink text-white text-base font-medium rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300 ease-in-out"
			onClick={closeModal}
		  >
			Close
		  </button>
		</div>
	  </div>
	</div>
  );
  

export default Gallery;
