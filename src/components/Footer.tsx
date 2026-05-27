/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppRoute } from '../types';
import { Mail, Phone, MapPin, Shield, HelpCircle, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onChangeRoute: (route: AppRoute) => void;
}

export default function Footer({ onChangeRoute }: FooterProps) {
  const handleNavClick = (route: AppRoute) => {
    onChangeRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-dark text-white pt-20 pb-12 border-t border-gray-800" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-gray-800">
          
          {/* Column 1: Brand & Professional Profile Summary */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white text-neutral-dark flex items-center justify-center">
                <span className="font-serif font-semibold text-sm">MD</span>
              </div>
              <span className="font-serif text-lg tracking-wider font-bold">MAE DUNGO</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
              Mae Dungo is a Licensed Financial Professional and Family Nurse Practitioner, integrating professional health advocacy with strategic wealth safeguarding principles.
            </p>
            <div className="flex flex-col space-y-2.5 pt-2 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-primary-gold" />
                <span>Houston, Texas & Statewide Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-primary-gold" />
                <a href="mailto:info@maedungofinancial.com" className="hover:text-primary-gold transition-colors">info@maedungofinancial.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-primary-gold" />
                <a href="tel:+18325550190" className="hover:text-primary-gold transition-colors">(832) 555-0190</a>
              </div>
            </div>
            <div className="flex items-center space-x-3 pt-4">
              <a href="https://www.facebook.com/MEVDlovesU/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary-gold/20 text-gray-400 hover:text-primary-gold transition-all flex items-center justify-center border border-gray-700 hover:border-primary-gold/40" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/iammaedungo/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary-gold/20 text-gray-400 hover:text-primary-gold transition-all flex items-center justify-center border border-gray-700 hover:border-primary-gold/40" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.linkedin.com/in/maedungo/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary-gold/20 text-gray-400 hover:text-primary-gold transition-all flex items-center justify-center border border-gray-700 hover:border-primary-gold/40" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Elegant Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-xs md:text-sm font-semibold uppercase tracking-widest text-[#d8caaa]">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-sm font-sans">
              <button onClick={() => handleNavClick(AppRoute.Home)} className="text-gray-400 hover:text-[#d8caaa] text-left transition-colors cursor-pointer text-xs uppercase tracking-widest">
                Home
              </button>
              <button onClick={() => handleNavClick(AppRoute.Services)} className="text-gray-400 hover:text-[#d8caaa] text-left transition-colors cursor-pointer text-xs uppercase tracking-widest">
                Services
              </button>
              <button onClick={() => handleNavClick(AppRoute.About)} className="text-gray-400 hover:text-[#d8caaa] text-left transition-colors cursor-pointer text-xs uppercase tracking-widest">
                About Mae
              </button>
              <button onClick={() => handleNavClick(AppRoute.Resources)} className="text-gray-400 hover:text-[#d8caaa] text-left transition-colors cursor-pointer text-xs uppercase tracking-widest">
                Resources
              </button>
              <button onClick={() => handleNavClick(AppRoute.Connect)} className="text-gray-400 hover:text-[#d8caaa] text-left transition-colors cursor-pointer text-xs uppercase tracking-widest">
                Connect
              </button>
              <button onClick={() => handleNavClick(AppRoute.JoinTeam)} className="text-gray-400 hover:text-primary-gold text-left transition-colors cursor-pointer text-xs uppercase tracking-widest font-medium">
                Join My Team
              </button>
            </div>
          </div>

          {/* Column 3: Services Summary Checklist */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-xs md:text-sm font-semibold uppercase tracking-widest text-[#d8caaa]">
              Core Offerings
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
              <li className="hover:text-[#d1b994] transition-colors cursor-pointer" onClick={() => handleNavClick(AppRoute.Services)}>• Retirement Planning & Growth</li>
              <li className="hover:text-[#d1b994] transition-colors cursor-pointer" onClick={() => handleNavClick(AppRoute.Services)}>• Wealth Protection Strategies</li>
              <li className="hover:text-[#d1b994] transition-colors cursor-pointer" onClick={() => handleNavClick(AppRoute.Services)}>• Indexed Life Insurance Plans</li>
              <li className="hover:text-[#d1b994] transition-colors cursor-pointer" onClick={() => handleNavClick(AppRoute.Services)}>• Final Expense & Family Trust</li>
              <li className="hover:text-[#d1b994] transition-colors cursor-pointer" onClick={() => handleNavClick(AppRoute.Services)}>• College Funding & Wealth Growth</li>
              <li className="hover:text-[#d1b994] transition-colors cursor-pointer" onClick={() => handleNavClick(AppRoute.Services)}>• Small Business Financial Succession</li>
            </ul>
          </div>

          {/* Column 4: CRM Integration & High Value Consultation Callout */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-xs md:text-sm font-semibold uppercase tracking-widest text-[#d8caaa]">
              Join the Blueprint
            </h4>
            <p className="text-gray-400 text-xs font-sans leading-relaxed">
              Ready to construct your retirement framework? Access automated booking integrated directly with our client management workflows for simple, no-pressure guidance.
            </p>
            <button
              onClick={() => handleNavClick(AppRoute.Book)}
              className="mt-2 w-full flex items-center justify-between bg-primary-gold hover:bg-primary-gold-hover text-neutral-dark font-sans font-medium hover:scale-[1.02] text-xs tracking-widest uppercase transition-all py-3 px-4 rounded-xl shadow-sm"
            >
              <span>Schedule Initial Call</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>

        {/* SEO Strategic Paragraph Block (Incorporates required keywords organically without stuffing) */}
        <div className="py-10 text-xs text-gray-500 font-sans border-b border-gray-800 leading-relaxed">
          <p className="text-justify">
            <strong>Texas Geographic & Professional SEO Context:</strong> As a licensed{' '} 
            <span className="text-gray-400">financial professional</span> specializing in comprehensive{' '}
            <span className="text-gray-400">financial services</span> and client-focused{' '}
            <span className="text-gray-400">financial education</span>, Mae Dungo assists{' '}
            <span className="text-gray-400">busy professionals</span>, growing{' '}
            <span className="text-gray-400">families</span>, and thriving{' '}
            <span className="text-gray-400">business owners</span> to create resilient blueprints. 
            Whether you require simplified{' '}
            <span className="text-gray-400">retirement planning in Houston</span>, secure{' '}
            <span className="text-gray-400">wealth protection</span> strategies, structured plans for{' '}
            <span className="text-gray-400">financial planning in Texas</span>, or educational guidance on{' '}
            <span className="text-gray-400">indexed strategies</span>, Mae is dedicated to demystifying the path. 
            By bridging healthcare empathy and licensed advisory analytics, she provides personalized{' '}
            <span className="text-gray-400">long-term financial planning</span> to clients. Consult a leading{' '}
            <span className="text-gray-400">Houston financial professional</span> with professional credentials 
            designed to help you navigate retirement risk, legacy transfers, and{' '}
            <span className="text-gray-400">financial education in Houston</span> with true assurance.
          </p>
        </div>

        {/* Footnotes & Disclaimers block */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 space-y-4 md:space-y-0">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} Mae Dungo Website Blueprint. All Rights Reserved.</p>
            <p>GoHighLevel CRM & Agency Integration Ready. Code structured for automated workflow and funnel hooks.</p>
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Licensing & Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
