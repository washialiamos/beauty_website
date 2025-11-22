import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Heart, Flower } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Star className="h-6 w-6 text-rose-300 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Heart className="h-8 w-8 text-pink-400" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
          <Flower className="h-7 w-7 text-purple-300 animate-spin" style={{ animationDuration: '4s' }} />
        </div>
        <div className="absolute top-1/3 right-10 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Star className="h-5 w-5 text-rose-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Omwami
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-700 font-light">
              Beauty Studio
            </span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            Where elegance meets innovation. Discover your inner radiance with our premium beauty treatments and personalized care.
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <button
              onClick={scrollToServices}
              className="group bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-rose-500 text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-500 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* Floating beauty elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-60 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-40 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/12 w-12 h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-50 animate-float-slow"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;