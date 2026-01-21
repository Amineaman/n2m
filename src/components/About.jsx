// src/components/About.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { FaRocket, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language][key] || key;

  const features = [
    {
      icon: FaRocket,
      title: language === 'en' ? 'Innovation' : 'Innovation',
      description: language === 'en' 
        ? 'Cutting-edge solutions for modern businesses' 
        : 'Des solutions de pointe pour les entreprises modernes'
    },
    {
      icon: FaLightbulb,
      title: language === 'en' ? 'Creativity' : 'Créativité',
      description: language === 'en'
        ? 'Unique designs that make your brand stand out'
        : 'Des designs uniques qui font ressortir votre marque'
    },
    {
      icon: FaUsers,
      title: language === 'en' ? 'Collaboration' : 'Collaboration',
      description: language === 'en'
        ? 'Working together to achieve your goals'
        : 'Travailler ensemble pour atteindre vos objectifs'
    },
    {
      icon: FaAward,
      title: language === 'en' ? 'Excellence' : 'Excellence',
      description: language === 'en'
        ? 'Premium quality in every project'
        : 'Qualité premium dans chaque projet'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-stone-800 to-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12 text-center">
          {t('about-title')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-12">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed">
              {t('about-p1')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed">
              {t('about-p2')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-6 sm:mt-8">
              <div className="text-center p-3 sm:p-4 bg-stone-900/50 rounded-lg">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gold-400 mb-1">50+</div>
                <div className="text-stone-400 text-xs sm:text-sm uppercase tracking-wide font-medium">
                  {language === 'en' ? 'Projects' : 'Projets'}
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-stone-900/50 rounded-lg">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gold-400 mb-1">30+</div>
                <div className="text-stone-400 text-xs sm:text-sm uppercase tracking-wide font-medium">
                  {language === 'en' ? 'Clients' : 'Clients'}
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-stone-900/50 rounded-lg">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gold-400 mb-1">98%</div>
                <div className="text-stone-400 text-xs sm:text-sm uppercase tracking-wide font-medium">
                  {language === 'en' ? 'Satisfaction' : 'Satisfaction'}
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-stone-900/50 rounded-lg">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gold-400 mb-1">24/7</div>
                <div className="text-stone-400 text-xs sm:text-sm uppercase tracking-wide font-medium">
                  {language === 'en' ? 'Support' : 'Support'}
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-stone-800/50 rounded-2xl p-5 sm:p-6 border border-gold-400/20 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature) => (
                  <div 
                    key={feature.title}
                    className="text-center p-4 sm:p-5 bg-black/40 rounded-lg border border-gold-400/15 hover:border-gold-400/40 transition-all duration-300 card-hover group"
                  >
                    <div className="flex justify-center mb-2.5">
                      <feature.icon 
                        className="text-gold-400 group-hover:scale-110 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10" 
                      />
                    </div>
                    <h3 className="font-bold text-gold-400 mb-1.5 text-base sm:text-lg transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="bg-black/50 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gold-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gold-400 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gold-400 mb-4 sm:mb-6 relative z-10">
              {language === 'en' ? 'Our Mission' : 'Notre Mission'}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed relative z-10">
              {language === 'en' 
                ? 'To transform your ideas into impactful digital experiences that drive growth and build lasting brand value.'
                : 'Transformer vos idées en expériences digitales impactantes qui stimulent la croissance et construisent une valeur de marque durable.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;