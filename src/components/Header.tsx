/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppRoute } from '../types';
import { Menu, X, Shield, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentRoute: AppRoute;
  onChangeRoute: (route: AppRoute) => void;
}

export default function Header({ currentRoute, onChangeRoute }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', route: AppRoute.Home },
    { label: 'Services', route: AppRoute.Services },
    { label: 'About Mae', route: AppRoute.About },
    { label: 'Resources', route: AppRoute.Resources },
    { label: 'Connect', route: AppRoute.Connect },
  ];

  const handleNavClick = (route: AppRoute) => {
    onChangeRoute(route);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Area */}
          <div 
            onClick={() => handleNavClick(AppRoute.Home)}
            className="flex items-center space-x-3 cursor-pointer group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-dark flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-primary-gold/30">
              <span className="text-white font-serif font-semibold text-lg tracking-wider">MD</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest text-neutral-dark uppercase group-hover:text-primary-gold transition-colors duration-300">
                Mae Dungo
              </span>
              <span className="text-[10px] font-sans tracking-widest uppercase text-gray-400">
                Licensed Financial Professional & NP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
            {menuItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-sm font-sans tracking-widest uppercase relative py-2 transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-neutral-dark font-medium' 
                      : 'text-gray-500 hover:text-neutral-dark'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-gold" 
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            
            {/* Secondary/Subtle Join My Team block */}
            <button
              onClick={() => handleNavClick(AppRoute.JoinTeam)}
              className={`text-xs font-sans tracking-widest uppercase py-2 border-b border-transparent transition-colors duration-200 cursor-pointer ${
                currentRoute === AppRoute.JoinTeam
                  ? 'text-primary-gold border-primary-gold font-medium'
                  : 'text-gray-400 hover:text-primary-gold'
              }`}
            >
              Join My Team
            </button>

            {/* Primary highlighted CTA in menu */}
            <button
              onClick={() => handleNavClick(AppRoute.Book)}
              className="flex items-center space-x-2 bg-neutral-dark text-white hover:bg-primary-gold transition-all duration-300 px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-widest uppercase border border-neutral-dark hover:border-primary-gold shadow-sm hover:shadow-md cursor-pointer"
              id="cta-book"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-4">
            <button
              onClick={() => handleNavClick(AppRoute.Book)}
              className="bg-neutral-dark text-white p-2.5 rounded-full text-xs font-sans uppercase tracking-widest flex items-center justify-center border border-neutral-dark"
              title="Book Appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-dark hover:text-primary-gold p-2 cursor-pointer transition-colors"
              id="mobile-menu-toggle"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {menuItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-sans tracking-widest uppercase transition-colors ${
                      isActive 
                        ? 'bg-primary-gold-light text-neutral-dark font-semibold border-l-4 border-primary-gold' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-neutral-dark'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => handleNavClick(AppRoute.JoinTeam)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-xs font-sans tracking-widest uppercase transition-colors ${
                  currentRoute === AppRoute.JoinTeam
                    ? 'bg-primary-gold-light text-primary-gold font-semibold border-l-4 border-primary-gold'
                    : 'text-gray-400 hover:bg-gray-50 hover:text-primary-gold'
                }`}
              >
                Join My Team (Opportunity)
              </button>

              <div className="pt-4 border-t border-gray-100 px-4">
                <button
                  onClick={() => handleNavClick(AppRoute.Book)}
                  className="w-full flex items-center justify-center space-x-2 bg-neutral-dark text-white hover:bg-primary-gold transition-colors py-3.5 rounded-xl text-xs font-sans font-medium tracking-widest uppercase shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
