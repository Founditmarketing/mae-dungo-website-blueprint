/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppRoute } from '../types';
import { Play, Sparkles, Award,HeartHandshake, ChevronRight, Check, Heart, Shield, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

// Use the generated image paths
import maePortrait from '../assets/images/mae_dungo_portrait_1779916039660.png';
import clientDiscussion from '../assets/images/houston_client_discussion_1779916056723.png';

interface AboutViewProps {
  onNavigate: (route: AppRoute) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const keyCredentials = [
    {
      title: "Nurse Practitioner (NP) License",
      desc: "Years of dedicated clinical experience in family wellness and public healthcare advocacy.",
      icon: Stethoscope
    },
    {
      title: "Licensed Financial Professional",
      desc: "Licensed in multiple states (including Texas) to construct wealth protection and indexed life allocations.",
      icon: Shield
    },
    {
      title: "Client-Centric Philosophy",
      desc: "Committed to zero pressure, teaching simple equations, and prioritizing long-term survival structures.",
      icon: HeartHandshake
    }
  ];

  return (
    <div id="about-page-root" className="bg-white">
      
      {/* 1. HERO BIO HEADER */}
      <section className="bg-gradient-to-b from-primary-gold-light/40 to-white py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Bio Images Column */}
            <div className="lg:col-span-5 flex flex-col space-y-6" id="about-images">
              <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] bg-gray-100 shadow-xl border-4 border-white max-w-[420px] mx-auto lg:mx-0">
                <img 
                  src={maePortrait} 
                  alt="Mae Dungo, NP - Professional Bio Photograph" 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>

            {/* Core Story Column */}
            <div className="lg:col-span-7 flex flex-col space-y-8" id="about-story">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-[1px] bg-primary-gold"></span>
                  <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">The Dual Advocate</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif text-neutral-dark font-bold tracking-tight">
                  Meet Mae Dungo
                </h1>
                <div className="w-20 h-0.5 bg-primary-gold"></div>
              </div>

              {/* Main Guided Copy Blocks */}
              <div className="space-y-6 text-gray-700 font-sans text-sm sm:text-base leading-relaxed">
                <p className="font-medium text-neutral-dark text-[1.05rem]">
                  Mae Dungo is a Licensed Financial Professional and Nurse Practitioner passionate about helping individuals, families, and business owners better understand financial protection, wealth strategies, and long-term planning through education and personalized guidance.
                </p>
                <p>
                  With a background in healthcare and a passion for financial education, Mae focuses on simplifying complex financial concepts and helping clients make informed decisions with confidence.
                </p>
                <p>
                  In medicine, a health practitioner looks closely at the symptoms, identifies underlying causes, and writes a target prescription. In financial planning, Mae deploys the same diagnostic care. Rather than recommending products immediately, she diagnoses market risk, tax liabilities, and protection gaps, prescribing clean blueprints that restore peace of mind.
                </p>
              </div>

              {/* Core Pillars list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4" id="bio-pillars">
                {keyCredentials.map((cred, i) => {
                  const IconComp = cred.icon;
                  return (
                    <div key={i} className="p-5 rounded-xl border border-gray-100 bg-neutral-light hover:border-primary-gold/30 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-white text-primary-gold flex items-center justify-center mb-3 shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-xs font-bold text-neutral-dark uppercase tracking-wide mb-1">
                        {cred.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. VALUE PROPOSITION: HEALTH & WEALTH BRIDGE */}
      <section className="py-24 bg-neutral-light border-y border-gray-100" id="about-bridge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story block */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">Connecting the Dots</span>
              <h2 className="text-3xl font-serif text-neutral-dark font-bold">Why Finance? Message from Mae</h2>
              
              <div className="space-y-4 font-sans text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                <p>
                  "Throughout my nursing and clinical career, I stood at the frontline of physical crisis. The most painful realization was observing the massive role financial stress played in client recovery. I noticed patients checking out of healing programs prematurely simply because they lacked adequate protection policies, or families facing crushing debt loads when unexpected life shocks hit them.
                </p>
                <p>
                  I transitioned into financial services because I wanted to treat the root cause. Protecting families through tax-favorable indexed plans and setting up concrete retirement trajectories prevents emotional and physical decay. I work with clients to bring medical-grade clarity into wealth building."
                </p>
              </div>

              {/* Quick statistics checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-sans text-neutral-dark font-medium">
                  <div className="w-5 h-5 rounded bg-primary-gold/10 text-primary-gold flex items-center justify-center font-bold">✓</div>
                  <span>Simplified Houston Area Seminars</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-sans text-neutral-dark font-medium">
                  <div className="w-5 h-5 rounded bg-primary-gold/10 text-primary-gold flex items-center justify-center font-bold">✓</div>
                  <span>100% Educational Approach</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-sans text-neutral-dark font-medium">
                  <div className="w-5 h-5 rounded bg-primary-gold/10 text-primary-gold flex items-center justify-center font-bold">✓</div>
                  <span>Licensed Medical Integrity</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-sans text-neutral-dark font-medium">
                  <div className="w-5 h-5 rounded bg-primary-gold/10 text-primary-gold flex items-center justify-center font-bold">✓</div>
                  <span>Automated Followup GHL Channels</span>
                </div>
              </div>
            </div>

            {/* Video Placeholder Container (Optimized representation to protect speed) */}
            <div className="lg:col-span-5 flex justify-center" id="welcome-video-container">
              <div className="w-full max-w-[420px] aspect-[16/10] sm:aspect-square bg-neutral-dark rounded-3xl relative overflow-hidden group shadow-xl border border-gray-800">
                
                {/* Background image under video play overlay */}
                <img 
                  src={clientDiscussion} 
                  alt="Mae Dungo Welcome Video preview" 
                  className="w-full h-full object-cover opacity-35 filter grayscale-15 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Simulated video playback controls */}
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 flex flex-col justify-space-between p-8 text-white z-10">
                    <div className="bg-white/10 w-fit backdrop-blur-md px-3.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-sans border border-white/20">
                      Welcome Video (1:05)
                    </div>
                    
                    <div className="flex flex-col items-center justify-center my-auto cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                      <div className="w-16 h-16 rounded-full bg-primary-gold text-neutral-dark flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 ml-1 fill-neutral-dark" />
                      </div>
                      <span className="text-[10px] font-sans tracking-widest uppercase font-bold mt-4 text-primary-gold">Play Presentation</span>
                      <span className="text-[8px] font-sans text-gray-400">"Prescribing Financial Protection For Texas Families"</span>
                    </div>

                    <div className="text-[9px] font-mono text-gray-400 text-center uppercase tracking-widest">
                      MAE DUNGO BLUEPRINT • SECURE CHANNEL
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-neutral-dark text-center p-8 text-white">
                    <p className="font-serif text-sm italic text-primary-gold mb-3">"Health is wealth, and wealth is peace..."</p>
                    <p className="font-sans text-xs text-gray-400 max-w-sm">
                      This 60-second introduction is configured to map to your native GoHighLevel stream, Vimeo, or YouTube embed link.
                    </p>
                    <button 
                      onClick={() => setIsVideoPlaying(false)}
                      className="mt-6 border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-[9px] font-sans uppercase tracking-widest cursor-pointer"
                    >
                      Reset Video
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. TRUST BANNER */}
      <section className="py-24 bg-white" id="meet-cta-banner">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-dark">
            Partner With a Caring Specialist
          </h3>
          <p className="text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
            Don't leave your protection, retirement allocations, or familial safety to default options. Mae Dungo provides Texas families with dedicated, licensed support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate(AppRoute.Book)}
              className="bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark px-10 py-4.5 rounded-full text-xs font-sans tracking-widest uppercase transition-all shadow-md cursor-pointer border border-neutral-dark"
            >
              Book 15-Minute Review
            </button>
            <button
              onClick={() => onNavigate(AppRoute.Connect)}
              className="bg-transparent hover:bg-neutral-dark/5 text-neutral-dark px-10 py-4.5 rounded-full text-xs font-sans tracking-widest uppercase border border-neutral-dark/15 hover:border-neutral-dark transition-all cursor-pointer"
            >
              Send Direct Message
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
