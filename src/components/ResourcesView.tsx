/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppRoute } from '../types';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Linkedin, 
  ArrowUpRight, 
  FileText, 
  Layers, 
  Video, 
  FileSpreadsheet, 
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface ResourcesViewProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ResourcesView({ onNavigate }: ResourcesViewProps) {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const socialLinks = [
    {
      name: "Instagram",
      desc: "@maedungofinancial",
      details: "Educational reels & short diagrams breaking down compound growth & Texas protective policies daily.",
      url: "https://www.instagram.com/",
      icon: Instagram,
      color: "hover:text-[#E1306C] hover:border-[#E1306C]/30"
    },
    {
      name: "YouTube",
      desc: "Mae Dungo Financial",
      details: "In-depth tutorials explaining tax buckets, index compounding floors, and Medicare/term insurance comparisons.",
      url: "https://www.youtube.com/",
      icon: Youtube,
      color: "hover:text-[#FF0000] hover:border-[#FF0000]/30"
    },
    {
      name: "Facebook",
      desc: "Mae Dungo Licensed Professional",
      details: "Local Houston community seminars schedules, event photos, live Q&A, and client success milestones page.",
      url: "https://www.facebook.com/",
      icon: Facebook,
      color: "hover:text-[#1877F2] hover:border-[#1877F2]/30"
    },
    {
      name: "LinkedIn",
      desc: "Mae Dungo, NP",
      details: "Professional medical-financial corporate networking, business succession models, and executive planning advice.",
      url: "https://www.linkedin.com/",
      icon: Linkedin,
      color: "hover:text-[#0077B5] hover:border-[#0077B5]/30"
    }
  ];

  const conceptualGuides = [
    {
      id: "tax-bucket",
      title: "The Three Tax Buckets Guide",
      category: "Tax Efficiency",
      readingTime: "5 min read",
      desc: "A simplified breakdown illustrating tax-now, tax-later, and tax-never vehicles. Includes examples on how to transition assets into growth-friendly tax-sheltered buckets.",
      type: "PDF Document"
    },
    {
      id: "rule-72",
      title: "The Rule of 72 & Compound Math",
      category: "Growth Basics",
      readingTime: "4 min read",
      desc: "Learn how to easily calculate the exact timeframe your current capital assets take to double based on different index growth rates. Perfect for nursing practitioners and self-employed professionals.",
      type: "Cheat Sheet"
    },
    {
      id: "indexing-explain",
      title: "How Indexed Universal Life Protection (IUL) Works",
      category: "Wealth Protection",
      readingTime: "7 min read",
      desc: "We look behind the scenes of contract caps and zero-percent floors. See exactly how cash value is insulated during stock crashes while benefiting from upward trends.",
      type: "Whitepaper"
    },
    {
      id: "business-trust",
      title: "Business Succession & Trust Essentials",
      category: "Business Planning",
      readingTime: "8 min read",
      desc: "A brief checklist for Texas business operators outlining key-man structures, buying out partners tax-efficiently, and securing estate legacies.",
      type: "Checklist"
    }
  ];

  const handleDownloadClick = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4500);
  };

  return (
    <div id="resources-page-root" className="bg-white">
      
      {/* Page Title Header */}
      <section className="bg-gradient-to-b from-primary-gold-light/40 to-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white border border-primary-gold/30 px-3 py-1.5 rounded-full w-fit">
            <span className="text-[10px] font-sans tracking-widest uppercase text-primary-gold font-bold">Knowledge Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-neutral-dark font-bold tracking-tight">
            Resources & Financial Education
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
            Explore educational content, planning insights, financial tips, and protection strategies through Mae Dungo's social media platforms and financial education resources.
          </p>
        </div>
      </section>

      {/* Social Platforms Highlight Blocks – CRITICAL SPEC */}
      <section className="py-20" id="social-socials-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl font-serif font-bold text-neutral-dark">Stay Connected & Learn Daily</h2>
            <p className="text-xs sm:text-sm text-gray-500 font-sans">
              Access byte-sized instructional concepts directly where you spend your time. Explore specialized channels of professional support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="social-links-grid">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-xs transition-all duration-300 flex flex-col justify-between group ${social.color}`}
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-light flex items-center justify-center text-gray-500 group-hover:bg-neutral-dark group-hover:text-white transition-all">
                      <SocialIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-neutral-dark group-hover:text-primary-gold transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-xs text-primary-gold font-sans font-medium">{social.desc}</p>
                    </div>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      {social.details}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] font-sans font-semibold uppercase tracking-widest text-neutral-dark">
                    <span>Visit Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* Conceptual Guide Sheets – Performance Optimized */}
      <section className="py-24 bg-neutral-light border-y border-gray-100" id="conceptual-checklists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-semibold">Educational Download Center</span>
              <h2 className="text-3xl font-serif text-neutral-dark font-bold">Concept Sheets & Planners</h2>
              <p className="text-gray-500 font-sans text-xs sm:text-sm">
                No slow video loops or loading bars. Download immediate, lightweight summaries of Mae Dungo's financial philosophies.
              </p>
            </div>
            
            <button
              onClick={() => onNavigate(AppRoute.Book)}
              className="bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark font-sans font-medium text-xs tracking-widest uppercase px-6 py-3.5 rounded-full border border-neutral-dark transition-all self-start md:self-end cursor-pointer"
            >
              Get Custom Assessment
            </button>
          </div>

          {/* Feedback download simulation card */}
          {downloadSuccess && (
            <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center text-xs font-medium font-sans">
              ✓ "<strong>{downloadSuccess}</strong>" packet initialized. To customize these structures for your Houston household budget, we recommend booking a short 15-minute verification call.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="documents-grid">
            {conceptualGuides.map((guide) => (
              <div 
                key={guide.id}
                className="bg-white p-8 rounded-2xl border border-gray-200/50 hover:border-primary-gold/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="bg-primary-gold-light/60 text-neutral-dark font-sans text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                      {guide.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">{guide.readingTime}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-dark leading-tight">{guide.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-sans leading-relaxed">{guide.desc}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-sans uppercase tracking-wider">
                    <FileText className="w-4 h-4 text-primary-gold" />
                    <span>{guide.type}</span>
                  </div>
                  
                  <button
                    onClick={() => handleDownloadClick(guide.title)}
                    className="text-xs font-sans font-bold text-neutral-dark hover:text-primary-gold hover:underline tracking-widest uppercase transition-colors flex items-center"
                  >
                    <span>Request Copy</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to GHL Registration hook */}
      <section className="py-20 bg-white" id="resources-newsletter-cta">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <BookOpen className="w-12 h-12 text-primary-gold mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-neutral-dark">Get Notified of Upcoming Dallas & Houston Workshops</h3>
          <p className="text-gray-500 font-sans text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Mae Dungo regularly hosts local financial education sessions and corporate wellness educational panels. Input your credentials to join the notification circular list. (Directly compatible with CRM triggers).
          </p>
          
          <div className="max-w-md mx-auto pt-2" id="resource-sign-form">
            <form onSubmit={(e) => { e.preventDefault(); handleDownloadClick("Circular Listing Registration"); }} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter email address..." 
                required
                className="bg-neutral-light border border-gray-200 rounded-xl px-4 py-3 text-xs font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold w-full text-center sm:text-left"
              />
              <button 
                type="submit"
                className="bg-neutral-dark hover:bg-primary-gold hover:text-neutral-dark text-white text-xs font-sans font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-all shrink-0 cursor-pointer"
              >
                  Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
