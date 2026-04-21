import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiStarFill } from "react-icons/ri";
import { IoChevronBackCircleOutline, IoChevronForwardCircle } from "react-icons/io5";

import Eddie from '../assets/vectors/Eddie.jpg'
import User2 from '../assets/vectors/Eddie.jpg'
import User3 from '../assets/vectors/Eddie.jpg'
import User4 from '../assets/vectors/Eddie.jpg'
import User5 from '../assets/vectors/Eddie.jpg'


const testimonials = [
  {
    name: "Eddie Reignman",
    location: "Nepal, India",
    image: Eddie,
    text: "From the first inquiry to final handover, the experience was seamless..."
  },
  {
    name: "Sarah Johnson",
    location: "London, UK",
    image: User2,
    text: "Absolutely amazing service. Everything was handled professionally..."
  },
  {
    name: "Michael Chen",
    location: "Beijing, China",
    image: User3,
    text: "The attention to detail and responsiveness stood out the most..."
  },
  {
    name: "Amina Bello",
    location: "Abuja, Nigeria",
    image: User4,
    text: "Highly recommend! The final result exceeded my expectations..."
  },
  {
    name: "Carlos Rivera",
    location: "Madrid, Spain",
    image: User5,
    text: "Professional, friendly, and reliable. I’ve recommended them..."
  }
];

export default function TestSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // ✅ Auto-play (pause on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="flex justify-center my-15 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center gap-6"
          
          // ✅ Swipe support
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) nextSlide();
            if (info.offset.x > 100) prevSlide();
          }}

          // ✅ Animation
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image */}
          <motion.img
            src={testimonials[index].image}
            alt="testimonial"
            className="h-110 w-30 md:w-50 md:h-80 rounded-lg object-cover"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Content */}
          <div className="max-w-lg">
            <p className="md:text-3xl font-bold">
              {testimonials[index].name}
            </p>
            <p className="md:text-3xl font-medium">
              {testimonials[index].location}
            </p>

            {/* Stars */}
            <div className="flex my-3 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <RiStarFill key={i} />
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {testimonials[index].text}
            </p>

            {/* Arrows */}
            <div className="flex justify-end mt-5">
              <IoChevronBackCircleOutline
                onClick={prevSlide}
                className="size-10 cursor-pointer hover:scale-110 transition"
              />
              <IoChevronForwardCircle
                onClick={nextSlide}
                className="size-10 ms-5 cursor-pointer hover:scale-110 transition"
              />
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4 justify-center md:justify-start">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? "bg-black w-6" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}