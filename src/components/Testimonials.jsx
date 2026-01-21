// src/components/Testimonials.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { testimonials } from '../data/testimonials.js';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const Testimonials = () => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const t = (key) => translations[language][key] || key;

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 text-center">
          {t('testimonials-title')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-gold-400/20 rounded-lg p-5 sm:p-6 card-hover group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-2 right-2 opacity-20">
                <FaQuoteLeft className="text-gold-400 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className="text-gold-400 fill-current w-4 h-4 sm:w-5 sm:h-5" 
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-stone-300 italic mb-4 leading-relaxed relative z-10">
                {t(testimonial.text)}
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gold-400/20">
                <span className="text-sm sm:text-base text-gold-400 font-semibold">
                  {testimonial.author}
                </span>
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="border rounded-3xl p-8 sm:p-10 md:p-12 max-w-2xl mx-auto" style={{backgroundColor: 'rgba(52, 45, 36, 0.5)', borderColor: 'rgba(189, 145, 90, 0.3)'}}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold-400 mb-4">
              {language === 'en' ? 'Ready to elevate your brand?' : 'Prêt à élever votre marque ?'}
            </h3>
            <p className="text-base sm:text-lg text-stone-300 mb-6">
              {language === 'en' 
                ? 'Join our satisfied clients and experience the Noortomark difference.'
                : 'Rejoignez nos clients satisfaits et découvrez la différence Noortomark.'
              }
            </p>
            <a 
              href="/contact" 
              className="btn-gold inline-block px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg"
            >
              {language === 'en' ? 'Get Started Today' : 'Commencer aujourd\'hui'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;