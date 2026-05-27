/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppRoute, TeamApplication } from '../types';
import { 
  Users, 
  Map, 
  Compass, 
  Clock, 
  Briefcase, 
  TrendingUp, 
  Award, 
  Building,
  CheckCircle,
  HelpCircle,
  Send,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Real photo from public/images
const teamMentorship = '/images/671558585_10233517281537125_4459711296456051773_n.jpg';

export default function JoinTeamView() {
  const [appForm, setAppForm] = useState<TeamApplication>({
    name: '',
    email: '',
    phone: '',
    background: 'Medical/Healthcare',
    motivation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const pillars = [
    {
      title: "Flexible Opportunity",
      desc: "Architect a professional corporate practice part-time or transition into a full-scale owner model at your own preferred cadence.",
      icon: Clock
    },
    {
      title: "Mentorship & Training",
      desc: "Receive dedicated, direct coaching from Mae Dungo and seasoned statewide entrepreneurs. No prior licensing experience required to initiate study.",
      icon: Users
    },
    {
      title: "Leadership Development",
      desc: "Learn to build, coordinate, and supervise local and online advisory groups while developing elite public presentation skillsets.",
      icon: Award
    },
    {
      title: "Remote Flexibility",
      desc: "Settle appointments, lead client workshops, and coordinate leadership exercises 100% online from anywhere in Texas or other states.",
      icon: Building
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const executeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setAppForm({
        name: '',
        email: '',
        phone: '',
        background: 'Medical/Healthcare',
        motivation: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div id="join-team-root" className="bg-white">
      
      {/* Page Title Row */}
      <section className="bg-gradient-to-b from-primary-gold-light/40 to-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white border border-primary-gold/30 px-3 py-1.5 rounded-full w-fit">
            <span className="text-[10px] font-sans tracking-widest uppercase text-primary-gold font-bold">Statewide Expansion</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-neutral-dark font-bold tracking-tight">
            Explore the Opportunity
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 text-xs sm:text-sm tracking-widest uppercase mb-1">
            For individuals interested in entrepreneurship, financial education, leadership development, and additional income opportunities.
          </p>
          <div className="max-w-2xl mx-auto text-gray-400 font-sans text-xs sm:text-sm leading-relaxed pt-2 border-t border-gray-100">
            Learn more about mentorship, financial education, leadership development, and flexible opportunities within the financial services industry.
          </div>
        </div>
      </section>

      {/* Main Pillars Showcase */}
      <section className="py-24" id="pillars-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story & Visual Column */}
            <div className="lg:col-span-5 space-y-8" id="opportunity-story-col">
              <div className="space-y-4">
                <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">Elite Business Framework</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark">A Dynamic Hybrid Framework</h2>
                <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
                  The financial services landscape is shifting. Families require clear, transparent education rather than fast product sales. To address this statewide, we are expanding our professional network, coaching leaders with integrity.
                </p>
              </div>

              {/* Team Culture Generated Image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-100 relative shadow-md group">
                <img 
                  src={teamMentorship} 
                  alt="Mae Dungo leadership corporate team collaboration Houston" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-dark/15 backdrop-brightness-95"></div>
              </div>

              <div className="p-6 bg-neutral-light border border-gray-100 rounded-2xl">
                <p className="text-[11px] font-sans text-gray-400 leading-normal">
                  "Our expanding Houston leadership group is composed of registered nurses, executive managers, and aspiring business operators who prioritize high ethical standards and collaborative teamwork."
                </p>
              </div>
            </div>

            {/* Core Pillars Grid: Right Side (subtle details) */}
            <div className="lg:col-span-7 space-y-12" id="opportunity-pillars-col">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" id="pillars-grid-four">
                {pillars.map((pillar, i) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div key={i} className="space-y-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-xs hover:border-primary-gold/30 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary-gold-light text-primary-gold flex items-center justify-center">
                        <PillarIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-base font-bold text-neutral-dark">{pillar.title}</h3>
                      <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SUBTLE CANDIDANCY FORM -> Kept elite and highly selective */}
      <section className="py-24 bg-neutral-light border-y border-gray-100" id="opportunity-candidate-flow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200/50 rounded-[32px] p-8 md:p-12 shadow-xs space-y-8">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">Selective Evaluation</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-dark">Request an Introductory Overview Call</h2>
              <p className="text-xs sm:text-sm text-gray-500 font-sans max-w-xl mx-auto leading-relaxed">
                Positions are limited and centered on high professional values. Submit your background below to lock in a private virtual introductory panel call.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 bg-primary-gold-light border border-primary-gold/30 text-neutral-dark rounded-2xl text-center space-y-2 font-sans"
                >
                  <p className="text-sm font-bold">Application Received Successfully!</p>
                  <p className="text-xs">
                    Thank you, <strong>{appForm.name}</strong>. Your professional background has been registered. Mae and our Texas operations team will review your motivations and coordinate an invitation to <strong>{appForm.email}</strong>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={executeSubmit} className="space-y-5" id="opportunity-candidate-inputs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={appForm.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        required
                        className="w-full bg-neutral-light border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Telephone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={appForm.phone}
                        onChange={handleInputChange}
                        placeholder="(214) 555-0180" 
                        required
                        className="w-full bg-neutral-light border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Primary Professional Field *</label>
                      <select
                        name="background"
                        value={appForm.background}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-neutral-light border border-gray-200 rounded-xl px-4 py-3 text-xs font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                      >
                        <option value="Medical/Healthcare">Medical, Nursing & Clinical Healthcare</option>
                        <option value="Corporate/Management">Corporate, Advisory & Operations Management</option>
                        <option value="Education/Teaching">Education, Academic & Classroom Teaching</option>
                        <option value="Sales/Realestate">Self-Employed, Sales & Real Estate Professionals</option>
                        <option value="Student/Other">Student, Entry Level or Other Fields</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Your Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={appForm.email}
                        onChange={handleInputChange}
                        placeholder="john@organization.com" 
                        required
                        className="w-full bg-neutral-light border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans">Why are you interested in financial leadership & advisory mentorship?</label>
                    <textarea 
                      name="motivation"
                      value={appForm.motivation}
                      onChange={handleInputChange}
                      placeholder="Briefly state your current goals, and if you are seeking a part-time additional income channel or looking to transition careers..." 
                      rows={4}
                      required
                      className="w-full bg-neutral-light border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                    ></textarea>
                  </div>

                  <div className="pt-2 text-center">
                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark transition-all duration-300 py-4 rounded-xl text-xs font-sans font-bold tracking-widest uppercase shadow-sm cursor-pointer border border-neutral-dark"
                    >
                      <Send className="w-4 h-4" />
                      <span>Deliver Selection Request</span>
                    </button>
                    <span className="text-[9px] text-gray-400 font-sans block mt-3">
                      GoHighLevel CRM Careers circular listing is fully encrypted. All inquiries evaluated strictly on candidate merits.
                    </span>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>

    </div>
  );
}
