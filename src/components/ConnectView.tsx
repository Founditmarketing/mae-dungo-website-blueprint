/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppRoute, ContactMessage } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle, 
  Instagram, 

  Facebook, 
  Linkedin,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

// Use the generated client discussion / office image
const clientDiscussion = '/images/1000051446.jpg';

interface ConnectViewProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ConnectView({ onNavigate }: ConnectViewProps) {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Financial Education Inquiry',
    message: ''
  });
  
  const [isSent, setIsSent] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreePolicy) return;
    
    // Simulate API delivery to a GoHighLevel webhook and show success notice
    setIsSent(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Financial Education Inquiry',
        message: ''
      });
      setIsSent(false);
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="connect-page-root" className="bg-white">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-gold-light/40 to-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white border border-primary-gold/30 px-3 py-1.5 rounded-full w-fit">
            <span className="text-[10px] font-sans tracking-widest uppercase text-primary-gold font-bold">Texas Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-neutral-dark font-bold tracking-tight">
            Connect With Mae
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
            Stay connected through social media, educational content, and personalized financial conversations.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-24" id="connect-grid-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Column 1: Contact Coordinates & Office Picture */}
            <div className="lg:col-span-5 space-y-10" id="connect-details-column">
              
              <div className="space-y-4">
                <span className="text-xs font-sans tracking-widest uppercase text-primary-gold font-bold">Direct Channels</span>
                <h2 className="text-2xl font-serif font-bold text-neutral-dark">Get in Touch Directly</h2>
                <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
                  Have questions about compound equations, capital indexing, or Texas life coverage guidelines? Leave a note or schedule a time to talk.
                </p>
              </div>

              {/* Action Coordinates Card List */}
              <div className="space-y-6" id="connect-cards-list">
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary-gold/10 text-primary-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-neutral-dark uppercase tracking-wider mb-1">Statewide Advisory Workspace</h3>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      Physical Meetings in Houston, Texas.<br />
                      Authorized to provide financial education services across Texas and compliant States online.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary-gold/10 text-primary-gold flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-neutral-dark uppercase tracking-wider mb-1">Electronic Mailbox</h3>
                    <a href="mailto:info@maedungofinancial.com" className="text-xs text-gray-700 font-sans font-semibold hover:text-primary-gold transition-colors block">
                      info@maedungofinancial.com
                    </a>
                    <p className="text-[10px] text-gray-400 font-sans">Replying to professional inquires within 24 business hours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary-gold/10 text-primary-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-neutral-dark uppercase tracking-wider mb-1">Telephone Line</h3>
                    <a href="tel:+18325550190" className="text-xs text-gray-700 font-sans font-semibold hover:text-primary-gold transition-colors block">
                      (832) 555-0190
                    </a>
                    <p className="text-[10px] text-gray-400 font-sans">Text-message and voicemail integrated communication.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary-gold/10 text-primary-gold flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-neutral-dark uppercase tracking-wider mb-1">Advisory Schedule</h3>
                    <p className="text-xs text-gray-500 font-sans">
                      Monday – Friday: 8:00 AM – 6:00 PM CST<br />
                      Saturday: By Prior Appointment Only
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels Mini-Tray */}
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
                <span className="text-[10px] uppercase font-sans tracking-widest font-semibold text-gray-400">Follow Mae on Social Media</span>
                <div className="flex items-center space-x-3">
                  <a href="https://www.facebook.com/MEVDlovesU/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-neutral-light hover:bg-primary-gold/15 text-neutral-dark hover:text-primary-gold transition-colors flex items-center justify-center border border-gray-100" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/iammaedungo/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-neutral-light hover:bg-primary-gold/15 text-neutral-dark hover:text-primary-gold transition-colors flex items-center justify-center border border-gray-100" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/maedungo/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-neutral-light hover:bg-primary-gold/15 text-neutral-dark hover:text-primary-gold transition-colors flex items-center justify-center border border-gray-100" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Physical Office Aesthetic Card Graphic */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100 border border-gray-100 relative group shadow-sm">
                <img 
                  src={clientDiscussion} 
                  alt="Houston client meeting consulting office setting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-[10px] text-white font-sans uppercase tracking-widest leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-primary-gold inline mr-1 mb-0.5" />
                    Downtown Houston, Texas Meeting Workspace
                  </p>
                </div>
              </div>

            </div>

            {/* Column 2: GoHighLevel Optimized CAPTURE FORM */}
            <div className="lg:col-span-7 bg-neutral-light p-8 md:p-12 rounded-[32px] border border-gray-100/50 shadow-xs" id="lead-form-outer">
              <div className="space-y-6 mb-8 text-center sm:text-left">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-dark">Submit a Direct Inquiry</h3>
                <p className="text-xs text-gray-500 font-sans">
                  Use this secure form to capture initial credentials. Integrating with GoHighLevel allows automatic scheduling, calendar invitations, and educational newsletters.
                </p>
              </div>

              {/* Feedback Alert Row */}
              {isSent && (
                <div className="mb-6 p-4 bg-primary-gold-light border border-primary-gold/30 text-neutral-dark rounded-xl space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold font-sans">
                    <CheckCircle className="w-4 h-4 text-primary-gold" />
                    <span>Inquiry Registered Successfully!</span>
                  </div>
                  <p className="text-[11px] font-sans text-neutral-dark/70">
                    Thank you, <strong>{formData.name}</strong>. Mae Dungo's workspace has been dispatched with your inquiry details. An automated validation email has been sent to <strong>{formData.email}</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" id="ghl-capture-inputs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe" 
                      required
                      disabled={isSent}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Telephone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(832) 555-0190" 
                      required
                      disabled={isSent}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Electronic Mail Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@organization.com" 
                      required
                      disabled={isSent}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Subject Matter *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSent}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                    >
                      <option value="General Financial Education Inquiry">General Financial Education</option>
                      <option value="Wealth Protection Advice">Wealth Protection</option>
                      <option value="Retirement Transition Check">Retirement Planning</option>
                      <option value="Indexed Growth Floors">Indexed Strategies</option>
                      <option value="Business Succession Planning">Business Planning</option>
                      <option value="Family Legacy Transfer">Family & Legacy Planning</option>
                      <option value="Final Expense Programs">Final Expense Programs</option>
                      <option value="Career & Leadership Opportunities">Join My Team (Opportunity)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Write Your Message / Consultation Goals *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your current status, planning goals, and what you wish to verify..." 
                    rows={4}
                    required
                    disabled={isSent}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                  ></textarea>
                </div>

                {/* GHL Essential Compliance SMS Opt-in text */}
                <div className="flex items-start space-x-3 pt-2 text-[10px] text-gray-500 font-sans leading-relaxed">
                  <input 
                    type="checkbox" 
                    id="compliance-agree" 
                    checked={agreePolicy}
                    onChange={(e) => setAgreePolicy(e.target.checked)}
                    required
                    disabled={isSent}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-primary-gold focus:ring-primary-gold shrink-0 cursor-pointer"
                  />
                  <label htmlFor="compliance-agree" className="cursor-pointer select-none">
                    By submitting this form, you authorize Mae Dungo's licensed advisor workspace to contact you via telephone call or programmatic conversational text messages (standard SMS limits apply) regarding financial education updates. Your information remains clean and secure; no data sold to third parties.
                  </label>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isSent || !agreePolicy}
                    className="w-full flex items-center justify-center space-x-2 bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark transition-all duration-300 py-4 rounded-xl text-xs font-sans font-semibold tracking-widest uppercase shadow-sm cursor-pointer disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-transparent border border-neutral-dark"
                  >
                    <Send className="w-4 h-4" />
                    <span>Deliver Secure Message</span>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Calendar Intercept bar */}
      <section className="py-20 bg-neutral-light border-t border-gray-100 text-center space-y-6">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-dark">
          Prefer Real-Time Slot Reservations?
        </h3>
        <p className="text-gray-500 font-sans text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Skip form entry entirely. Browse live availability instantly on our scheduling panel and choose a time that fits your busy Texas medical, business, or household calendar.
        </p>
        <button
          onClick={() => onNavigate(AppRoute.Book)}
          className="bg-primary-gold hover:bg-primary-gold-hover text-neutral-dark px-8 py-4 px-6 rounded-full text-xs font-sans font-semibold tracking-widest uppercase transition-all shadow-md cursor-pointer"
        >
          Open Booking Calendar
        </button>
      </section>

    </div>
  );
}
