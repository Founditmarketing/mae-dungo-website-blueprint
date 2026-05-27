/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppRoute } from '../types';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Award, 
  Lightbulb, 
  Briefcase, 
  Heart,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Compass,
  FileCheck,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

// Real photos from public/images
const maePortrait = '/images/Aragon-Headshot-Mae-Dungo-2025-10-07-4.jpeg';
const clientDiscussion = '/images/1000051446.jpg';

interface HomeViewProps {
  onNavigate: (route: AppRoute) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  
  const featuredServices = [
    {
      id: 1,
      title: "Wealth Protection",
      desc: "Helping individuals and families prepare for life's unexpected moments through protection-focused financial strategies.",
      icon: Shield
    },
    {
      id: 2,
      title: "Retirement Planning",
      desc: "Strategies designed to help clients build long-term financial confidence and prepare for retirement.",
      icon: Compass
    },
    {
      id: 3,
      title: "Indexed Strategies",
      desc: "Education on protection-focused financial strategies designed for long-term growth potential.",
      icon: TrendingUp
    },
    {
      id: 4,
      title: "Final Expense",
      desc: "Helping families prepare for future financial responsibilities and legacy needs.",
      icon: Award
    },
    {
      id: 5,
      title: "Financial Education",
      desc: "Simplifying financial concepts through personalized educational conversations and guidance.",
      icon: Lightbulb
    },
    {
      id: 6,
      title: "Business Planning",
      desc: "Educational strategies designed to help business owners and entrepreneurs plan for long-term success.",
      icon: Briefcase
    }
  ];

  const targetClients = [
    { title: "Busy Professionals", desc: "For nurses, physicians, corporate executives, and managers who are short on time but need institutional wealth strategies." },
    { title: "Families", desc: "For legacy protection, debt reduction, generational transfers, and college funding frameworks." },
    { title: "Business Owners", desc: "For key-person life insurance structures, succession blueprints, and retirement plans for teams." },
    { title: "Pre-Retirees", desc: "To minimize market exposure, capitalize on growth caps, and formulate predictable lifetime distribution." },
    { title: "Retirees", desc: "To shelter accumulated principle assets and build reliable generational estate legacies." },
    { title: "Entrepreneurs", desc: "To launch, scale, protect assets, and build tax-efficient personal capital engines." }
  ];

  return (
    <div id="homepage-root" className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 lg:min-h-[85vh] flex items-center bg-gradient-to-b from-primary-gold-light/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col space-y-8" id="hero-text-container">
              <div className="inline-flex items-center space-x-2 bg-white border border-primary-gold/30 px-4 py-2 rounded-full w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-primary-gold animate-pulse"></span>
                <span className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-neutral-dark font-medium">Texas Financial Professional & NP</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-serif leading-[1.08] text-neutral-dark font-bold tracking-tight">
                  Helping Busy Professionals & Families Protect, Grow & Prepare for the Future
                </h1>
                <p className="text-gray-600 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
                  Personalized financial education and strategies designed to help individuals, families, and business owners build long-term financial confidence.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4" id="hero-ctas">
                <button
                  onClick={() => onNavigate(AppRoute.Book)}
                  className="bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark font-sans font-medium text-xs tracking-widest uppercase px-8 py-4.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-neutral-dark hover:border-primary-gold cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>
                
                <button
                  onClick={() => onNavigate(AppRoute.Services)}
                  className="bg-white hover:bg-neutral-dark/5 text-neutral-dark font-sans font-medium text-xs tracking-widest uppercase px-8 py-4.5 rounded-full border border-neutral-dark/15 hover:border-neutral-dark transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate(AppRoute.JoinTeam)}
                  className="text-gray-400 hover:text-primary-gold text-xs font-sans tracking-widest uppercase py-3 px-2 transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Join My Team</span>
                </button>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="lg:col-span-5 flex justify-center" id="hero-image-container">
              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[30px] overflow-hidden bg-gray-100 shadow-2xl border-4 border-white">
                <img 
                  src={maePortrait} 
                  alt="Mae Dungo - Financial Professional & Nurse Practitioner" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Visual Label Attachment */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-gray-100/50">
                  <h3 className="font-serif text-base font-bold text-neutral-dark mb-0.5">Mae Dungo, NP</h3>
                  <p className="text-[10px] font-sans text-gray-500 uppercase tracking-wider">Licensed Financial Professional</p>
                  <div className="w-full h-[1px] bg-gray-100 my-2.5"></div>
                  <div className="flex justify-between items-center text-[10px] text-primary-gold font-sans uppercase tracking-widest font-semibold">
                    <span>Houston, Texas</span>
                    <span>Ready To Advise</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. TRUST / CREDIBILITY SECTION */}
      <section className="py-24 bg-white border-t border-gray-50" id="trust-credibility">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
                <img 
                  src={clientDiscussion} 
                  alt="Personalized consultation and financial education in Houston Texas" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              
              {/* Overlapping Certifications / Core Focus Grid */}
              <div className="absolute -bottom-6 -right-6 bg-primary-gold-light p-6 rounded-2xl shadow-xl max-w-[240px] border border-primary-gold/20 hidden md:block">
                <h4 className="font-serif text-sm font-bold text-neutral-dark mb-2">Our Educational Mission</h4>
                <p className="text-[11px] text-gray-600 leading-normal">
                  No products sold aggressively. We focus on teaching the fundamental laws of protection and compound interest.
                </p>
              </div>
            </div>

            {/* Description & Mission Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex items-center space-x-2">
                <span className="w-10 h-[1px] bg-primary-gold"></span>
                <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-semibold">Caring & Competent Guidance</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-dark font-bold tracking-tight">
                Financial Education Made Simple
              </h2>

              <p className="text-gray-700 font-sans text-base leading-relaxed">
                Mae Dungo is a Licensed Financial Professional and Nurse Practitioner passionate about helping busy professionals, families, and business owners better understand financial protection, wealth strategies, and long-term planning through simple and personalized guidance.
              </p>

              <p className="text-gray-600 font-sans text-sm leading-relaxed border-l-2 border-primary-gold pl-5 italic my-2">
                "As a Family Nurse Practitioner, I observed how personal health is deeply intertwined with financial wellness. Moving into financial services allows me to prescribe economic protection and wealth-building techniques that cure financial stress before it damages family safety."
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 text-neutral-dark">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-semibold text-sm">Professional Licensing</h4>
                    <p className="text-xs text-gray-500">Fully licensed state financial lines of protection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-semibold text-sm">Medical Precision</h4>
                    <p className="text-xs text-gray-500">Diagnosing your financial health with absolute clarity.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. SERVICES GRID SECTION - 6 of the 7 services featured here */}
      <section className="py-24 bg-neutral-light border-y border-gray-100" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">Solutions Platform</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-dark font-bold tracking-tight">
              Financial Services & Education
            </h2>
            <div className="w-16 h-0.5 bg-primary-gold mx-auto"></div>
            <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
              Personalized educational strategies designed to help clients better understand protection, wealth building, and long-term financial planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="featured-services-cards">
            {featuredServices.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 hover:border-primary-gold/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    <div className="w-12 h-12 rounded-xl bg-primary-gold-light text-primary-gold flex items-center justify-center group-hover:bg-neutral-dark group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-neutral-dark group-hover:text-primary-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <button 
                    onClick={() => onNavigate(AppRoute.Services)}
                    className="mt-6 flex items-center text-xs font-sans font-semibold tracking-widest uppercase text-neutral-dark/80 group-hover:text-primary-gold hover:underline transition-all cursor-pointer align-bottom self-start"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 bg-white/40 p-6 rounded-2xl max-w-2xl mx-auto border border-gray-200/50">
            <p className="text-xs text-gray-500 font-sans">
              Looking for a comprehensive breakdown? We also offer <strong className="text-neutral-dark">Family & Legacy Planning</strong> plus specialized Texas corporate tax strategies. 
              <span onClick={() => onNavigate(AppRoute.Services)} className="text-primary-gold hover:underline font-semibold ml-1.5 cursor-pointer">
                View All 7 Core Programs →
              </span>
            </p>
          </div>

        </div>
      </section>


      {/* 4. WHO WE HELP SECTION */}
      <section className="py-24 bg-white" id="who-we-help">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">Client Focus</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-dark font-bold tracking-tight">
              Who We Help
            </h2>
            <div className="w-16 h-0.5 bg-primary-gold mx-auto"></div>
            <p className="text-gray-600 font-sans text-sm leading-relaxed">
              Personalized guidance designed for individuals, families, and professionals looking to build long-term financial confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="target-help-grid">
            {targetClients.map((client, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-sans tracking-widest font-semibold uppercase text-primary-gold mb-2">0{i+1}</div>
                  <h3 className="font-serif text-lg font-bold text-neutral-dark mb-3">{client.title}</h3>
                  <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">{client.desc}</p>
                </div>
                <div className="h-1 w-8 bg-gray-100 mt-6 group-hover:bg-primary-gold transition-colors"></div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. SIMPLE PROCESS SECTION (Minimalist layout, do not overdesign) */}
      <section className="py-24 bg-neutral-light border-t border-gray-100" id="three-step-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">How It Works</span>
            <h2 className="text-3xl font-serif text-neutral-dark font-bold tracking-tight">
              Simple & Personalized
            </h2>
            <p className="text-gray-500 font-sans text-sm">
              A straightforward process designed to help clients feel informed, comfortable, and confident.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative" id="process-steps">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4 px-4">
              <div className="w-16 h-16 rounded-full bg-white text-neutral-dark shadow-sm border border-gray-100 font-serif text-lg font-bold flex items-center justify-center relative">
                1
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-primary-gold text-[8px] text-neutral-dark rounded-full flex items-center justify-center font-bold font-sans">✓</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-dark">Schedule a Consultation</h3>
              <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
                Connect for a brief 15–30 minute, no-pressure discovery conversation online or in local Houston areas.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4 px-4 relative">
              <div className="w-16 h-16 rounded-full bg-white text-neutral-dark shadow-sm border border-gray-100 font-serif text-lg font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-dark">Discuss Your Goals</h3>
              <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
                We'll diagram your present income protection, tax vulnerabilities, assets, and future retirement timeline clearly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4 px-4">
              <div className="w-16 h-16 rounded-full bg-white text-neutral-dark shadow-sm border border-gray-100 font-serif text-lg font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-dark">Build a Personalized Strategy</h3>
              <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
                Receive an educational plan demonstrating options that capitalize on capital indexing, protection caps, and tax-friendliness.
              </p>
            </div>

          </div>

          <div className="flex justify-center mt-12">
            <button 
              onClick={() => onNavigate(AppRoute.Book)}
              className="bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark px-8 py-4.5 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 shadow-md cursor-pointer"
            >
              <span>Build My Financial Blueprint Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* 5.5 SOCIAL MEDIA CONNECT SECTION */}
      <section className="py-24 bg-white border-t border-gray-100" id="social-connect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">Stay Connected</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-neutral-dark font-bold tracking-tight">
              Follow Mae's Journey
            </h2>
            <div className="w-16 h-0.5 bg-primary-gold mx-auto"></div>
            <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
              Join Mae's growing community for financial tips, educational content, behind-the-scenes insights, and inspiration for building long-term financial confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="social-cards">
            
            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/MEVDlovesU/" 
              target="_blank" 
              rel="noreferrer"
              className="group bg-neutral-light p-8 rounded-2xl border border-gray-100 hover:border-primary-gold/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-5 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-gold-light text-primary-gold group-hover:bg-neutral-dark group-hover:text-white flex items-center justify-center transition-all duration-300">
                <Facebook className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-neutral-dark group-hover:text-primary-gold transition-colors">Facebook</h3>
                <p className="text-xs text-gray-500 font-sans">@MEVDlovesU</p>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  Community updates, live educational sessions, and client success stories from Mae's financial education practice.
                </p>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-sans font-semibold tracking-widest uppercase text-neutral-dark/70 group-hover:text-primary-gold transition-colors">
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/iammaedungo/" 
              target="_blank" 
              rel="noreferrer"
              className="group bg-neutral-light p-8 rounded-2xl border border-gray-100 hover:border-primary-gold/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-5 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-gold-light text-primary-gold group-hover:bg-neutral-dark group-hover:text-white flex items-center justify-center transition-all duration-300">
                <Instagram className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-neutral-dark group-hover:text-primary-gold transition-colors">Instagram</h3>
                <p className="text-xs text-gray-500 font-sans">@iammaedungo</p>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  Daily financial education tips, behind-the-scenes content, and inspiring stories about wealth protection and planning.
                </p>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-sans font-semibold tracking-widest uppercase text-neutral-dark/70 group-hover:text-primary-gold transition-colors">
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/maedungo/" 
              target="_blank" 
              rel="noreferrer"
              className="group bg-neutral-light p-8 rounded-2xl border border-gray-100 hover:border-primary-gold/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-5 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-gold-light text-primary-gold group-hover:bg-neutral-dark group-hover:text-white flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-neutral-dark group-hover:text-primary-gold transition-colors">LinkedIn</h3>
                <p className="text-xs text-gray-500 font-sans">Mae Dungo</p>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  Professional insights, career opportunities, industry articles, and team recruitment updates from Mae's practice.
                </p>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-sans font-semibold tracking-widest uppercase text-neutral-dark/70 group-hover:text-primary-gold transition-colors">
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

          </div>

        </div>
      </section>


      {/* 6. FINAL CTA SECTION (Clean background, minimal, heavy white space) */}
      <section className="py-28 bg-white" id="final-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-gold-light border-2 border-primary-gold/10 p-12 md:p-16 rounded-[40px] text-center space-y-8 shadow-sm">
            
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">Secure Your Tomorrow</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-dark font-bold leading-tight">
                Ready to Start Planning for the Future?
              </h2>
              <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                Schedule a personalized consultation to discuss your financial goals and planning needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => onNavigate(AppRoute.Book)}
                className="bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark w-full sm:w-auto font-sans font-medium text-xs tracking-widest uppercase px-10 py-5 rounded-full shadow-lg transition-all cursor-pointer"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => onNavigate(AppRoute.Connect)}
                className="bg-transparent hover:bg-neutral-dark/5 text-neutral-dark w-full sm:w-auto font-sans font-medium text-xs tracking-widest uppercase px-10 py-5 rounded-full border border-neutral-dark/15 hover:border-neutral-dark transition-all cursor-pointer"
              >
                Inquire & Send Message
              </button>
            </div>

            <p className="text-[10px] text-gray-400 font-sans">
              GoHighLevel CRM Integration Pre-Configured • Secure SSL Encrypted Data Entry Platforms
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}
