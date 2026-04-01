'use client';

import { useState } from 'react';

const slides = [
  {
    id: 1,
    image: "/about-me-1.png",
    text: "Hi, I'm Hongwei. I work across data analytics and data engineering, using data to understand how businesses operate — from acquisition to conversion to retention."
  },
  {
    id: 2,
    image: "/about-me-2.png",
    text: "I build pipelines, structure messy campaign and behavioural data, and turn it into tools and insights that teams can actually use. While much of my work sits in CRM and marketing, I think in systems — looking end-to-end at where things break and how they can be improved."
  },
  {
    id: 3,
    image: "/about-me-3.png",
    text: "Data can tell you a lot, but it only becomes useful when placed in context. My background in strategy and accounts shapes how I approach problems today — not just analysing data, but understanding how it fits into business goals, stakeholder needs, and real-world constraints."
  },
  {
    id: 4,
    image: "/about-me-4.png",
    text: "I enjoy working with ambiguity and turning it into something structured, measurable, and useful — whether in marketing, product, or operations."
  }
];

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="about" className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-[#09090b] overflow-hidden mt-24">
      
      {/* Full Screen Mapped Background Images */}
      {slides.map((slide, index) => (
        <img 
          key={slide.id}
          src={slide.image}
          alt={`About me sequence ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${index === activeSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'}
          `}
        />
      ))}

      {/* Global Darkener Overlay */}
      <div className="absolute inset-0 bg-zinc-950/65 z-10 transition-opacity duration-300"></div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 flex flex-col justify-center h-full pt-16 md:pt-0">
         
         {/* Section Header */}
         <h2 className="text-3xl font-bold tracking-tight text-white mb-12 flex items-center drop-shadow-xl">
           <span className="text-sm font-mono text-amber-500 mr-4">01.</span> About Me
           <span className="hidden md:block h-px w-32 bg-zinc-400/30 ml-6"></span>
         </h2>

         {/* Text Block - Unified Layer, No Background Box */}
         <div className="w-full md:w-[85%] lg:w-[70%]">
           <div className="relative h-[260px] md:h-[180px] w-full">
              {slides.map((slide, index) => (
                <p 
                key={slide.id}
                className={`absolute top-0 left-0 w-full text-zinc-100 text-[1.15rem] md:text-2xl leading-relaxed md:leading-relaxed transition-all duration-700 ease-out drop-shadow-2xl
                  ${index === activeSlide ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
                `}
                >
                {slide.text}
                </p>
              ))}
          </div>
         </div>
      </div>

      {/* Floating Carousel Controls Anchored to Bottom */}
      <div className="absolute bottom-8 md:bottom-12 left-0 w-full z-30 px-6">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
            
            {/* Progress Dots Indicator */}
            <div className="flex gap-2.5 items-center w-full md:w-auto justify-center md:justify-start">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out focus:outline-none ${index === activeSlide ? 'w-10 bg-amber-500' : 'w-3 bg-zinc-500/50 hover:bg-zinc-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows & Counter */}
            <div className="flex items-center gap-6">
              <button 
                onClick={prevSlide}
                className="p-3.5 border border-zinc-500/30 hover:border-zinc-300/60 bg-zinc-900/30 backdrop-blur-md hover:bg-zinc-800/60 rounded-full text-zinc-100 transition-all focus:outline-none shadow-xl"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <div className="font-mono text-zinc-200 font-medium tracking-widest text-sm select-none bg-zinc-900/40 backdrop-blur-md px-5 py-2.5 border border-zinc-500/30 rounded-full shadow-xl">
                <span className="text-white font-bold">0{activeSlide + 1}</span> <span className="text-zinc-500 mx-1">/</span> 0{slides.length}
              </div>
              <button 
                onClick={nextSlide}
                className="p-3.5 border border-zinc-500/30 hover:border-zinc-300/60 bg-zinc-900/30 backdrop-blur-md hover:bg-zinc-800/60 rounded-full text-zinc-100 transition-all focus:outline-none shadow-xl"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

         </div>
      </div>

    </section>
  );
}
