// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../data/translations";

const Hero = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = (key) => translations?.[language]?.[key] || key;

  // Handle navigation - scroll to top and navigate
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // GSAP animation refs
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const pillsRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const visualWrapRef = useRef(null);
  const visualRef = useRef(null);
  const blobLeftRef = useRef(null);
  const blobRightRef = useRef(null);

  // GSAP animation timeline
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.killTweensOf("*");

    if (prefersReducedMotion) {
      gsap.set(
        [
          badgeRef.current,
          titleRef.current,
          subtitleRef.current,
          pillsRef.current,
          buttonsRef.current,
          statsRef.current,
          visualWrapRef.current,
        ],
        { opacity: 1, clearProps: "transform" }
      );
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 12, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.1
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.25
      );

    const pills = pillsRef.current?.querySelectorAll("[data-pill]");
    if (pills?.length) {
      tl.fromTo(
        pills,
        { opacity: 0, y: 14, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
        },
        0.35
      );
    }

    const buttons = buttonsRef.current?.querySelectorAll("button");
    if (buttons?.length) {
      tl.fromTo(
        buttons,
        { opacity: 0, y: 14, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
        },
        0.45
      );
    }

    tl.fromTo(
      visualWrapRef.current,
      { opacity: 0, y: 26, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7 },
      0.55
    );

    tl.fromTo(
      statsRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.55 },
      0.7
    );

    // Floating animations for background blobs
    gsap.to(blobLeftRef.current, {
      y: 18,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blobRightRef.current, {
      y: -22,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(visualRef.current, {
      y: -12,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [language]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />

      {/* Blobs */}
      <div
        ref={blobLeftRef}
        className="absolute -top-10 left-[-80px] w-72 h-72 sm:w-96 sm:h-96 bg-gold-400/10 rounded-full blur-3xl"
      />
      <div
        ref={blobRightRef}
        className="absolute bottom-[-80px] right-[-80px] w-80 h-80 sm:w-[32rem] sm:h-[32rem] bg-gold-400/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 mb-5 bg-gold-400/10 border border-gold-400/30 rounded-full backdrop-blur-sm opacity-0"
        >
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm text-gold-400 font-medium">
            {language === "en"
              ? "Premium Digital Solutions"
              : "Solutions Digitales Premium"}
          </span>
        </div>

        {/* Title - Compact but premium */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-4 sm:mb-5 opacity-0"
        >
          Noortomark
        </h1>

        {/* Subtitle - Proportional sizing */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-9 opacity-0"
        >
          {t("hero-text")}
        </p>

        {/* Pills - Compact */}
        <div
          ref={pillsRef}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10"
        >
          <span data-pill className="px-4 sm:px-5 py-2 sm:py-2.5 bg-stone-800/45 border border-gold-400/20 rounded-full text-xs sm:text-sm text-stone-200">
            ✨ {language === "en" ? "Web Development" : "Développement Web"}
          </span>
          <span data-pill className="px-4 sm:px-5 py-2 sm:py-2.5 bg-stone-800/45 border border-gold-400/20 rounded-full text-xs sm:text-sm text-stone-200">
            🎨 {language === "en" ? "Graphic Design" : "Design Graphique"}
          </span>
          <span data-pill className="px-4 sm:px-5 py-2 sm:py-2.5 bg-stone-800/45 border border-gold-400/20 rounded-full text-xs sm:text-sm text-stone-200">
            📱 {language === "en" ? "Digital Marketing" : "Marketing Digital"}
          </span>
        </div>

        {/* Buttons - Responsive stack */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-10 sm:mb-12"
        >
          <button 
            onClick={() => handleNavigation("/services")}
            className="btn-gold px-7 sm:px-9 py-3 sm:py-3.5 text-base sm:text-lg cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg font-medium"
          >
            {t("discover-services")}
          </button>
          <button 
            onClick={() => handleNavigation("/contact")}
            className="btn-dark px-7 sm:px-9 py-3 sm:py-3.5 text-base sm:text-lg cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg font-medium"
          >
            {t("place-order")}
          </button>
        </div>

        {/* Visual - Empty but animated */}
        <div
          ref={visualWrapRef}
          className="relative mx-auto max-w-3xl mb-8 opacity-0"
        >
          {/* Placeholder for visual content */}
        </div>

        {/* Stats - Compact cards */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-2xl mx-auto opacity-0"
        >
          {[
            ["50+", language === "en" ? "Projects" : "Projets"],
            ["30+", "Clients"],
            ["98%", language === "en" ? "Satisfaction" : "Satisfaction"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="rounded-lg sm:rounded-2xl border border-gold-400/15 bg-black/20 backdrop-blur-sm p-3 sm:p-4"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gold-400">
                {v}
              </div>
              <div className="text-xs sm:text-sm text-stone-400">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
