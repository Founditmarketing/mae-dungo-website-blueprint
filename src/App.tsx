/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppRoute } from './types';
import Header from './components/Header';
import Footer from './components/Footer';

// Core View Components
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import ResourcesView from './components/ResourcesView';
import ConnectView from './components/ConnectView';
import BookView from './components/BookView';
import JoinTeamView from './components/JoinTeamView';

import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.Home);

  // Sync state with Window hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      const validRoutes = Object.values(AppRoute) as string[];
      
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash as AppRoute);
      } else {
        // Fallback or default
        setCurrentRoute(AppRoute.Home);
        window.location.hash = '#/';
      }
    };

    // Load initial hash on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleChangeRoute = (route: AppRoute) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;
  };

  // Select target render view
  const renderActiveView = () => {
    switch (currentRoute) {
      case AppRoute.Home:
        return <HomeView onNavigate={handleChangeRoute} />;
      case AppRoute.Services:
        return <ServicesView onNavigate={handleChangeRoute} />;
      case AppRoute.About:
        return <AboutView onNavigate={handleChangeRoute} />;
      case AppRoute.Resources:
        return <ResourcesView onNavigate={handleChangeRoute} />;
      case AppRoute.Connect:
        return <ConnectView onNavigate={handleChangeRoute} />;
      case AppRoute.Book:
        return <BookView />;
      case AppRoute.JoinTeam:
        return <JoinTeamView />;
      default:
        return <HomeView onNavigate={handleChangeRoute} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-dark selection:bg-primary-gold/30 selection:text-neutral-dark">
      
      {/* Structural Global Header */}
      <Header currentRoute={currentRoute} onChangeRoute={handleChangeRoute} />

      {/* Main Transitions Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Semantic SEO-boosted Footer */}
      <Footer onChangeRoute={handleChangeRoute} />

    </div>
  );
}
