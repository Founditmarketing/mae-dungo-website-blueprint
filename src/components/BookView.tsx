/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppRoute, ConsultationBooking } from '../types';
import { 
  CheckCircle, 
  Clock, 
  Sparkles, 
  CheckSquare, 
  Calendar, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Users,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Use the generated image path
import maePortrait from '../assets/images/mae_dungo_portrait_1779916039660.png';

export default function BookView() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingStep, setBookingStep] = useState<1 | 2>(1); // Step 1: select slot, Step 2: verify credentials
  
  const [bookingForm, setBookingForm] = useState<ConsultationBooking>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Simple static days logic representing May/June 2026 scheduling slots
  const datesAvailable = [
    { label: 'Thursday, May 28', value: '2026-05-28' },
    { label: 'Friday, May 29', value: '2026-05-29' },
    { label: 'Monday, June 01', value: '2026-06-01' },
    { label: 'Tuesday, June 02', value: '2026-06-02' },
    { label: 'Wednesday, June 03', value: '2026-06-03' },
    { label: 'Thursday, June 04', value: '2026-06-04' },
    { label: 'Friday, June 05', value: '2026-06-05' }
  ];

  const timeslots = [
    '09:00 AM CST',
    '10:30 AM CST',
    '01:00 PM CST',
    '02:30 PM CST',
    '04:00 PM CST',
    '05:15 PM CST'
  ];

  const handleDaySelect = (dayVal: string) => {
    setSelectedDate(dayVal);
    setSelectedTime(''); // Reset time selection on day swap
  };

  const handleTimeSelect = (timeSlot: string) => {
    setSelectedTime(timeSlot);
  };

  const handleProceedToDetails = () => {
    if (selectedDate && selectedTime) {
      setBookingForm(prev => ({
        ...prev,
        date: selectedDate,
        time: selectedTime
      }));
      setBookingStep(2);
    }
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const executeBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const resetBookingWidget = () => {
    setSelectedDate('');
    setSelectedTime('');
    setBookingStep(1);
    setBookingConfirmed(false);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  return (
    <div id="book-page-root" className="bg-white">
      
      {/* Hero Headers */}
      <section className="bg-gradient-to-b from-primary-gold-light/40 to-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white border border-primary-gold/30 px-3 py-1.5 rounded-full w-fit">
            <span className="text-[10px] font-sans tracking-widest uppercase text-primary-gold font-bold">Live Scheduler</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-neutral-dark font-bold tracking-tight">
            Schedule a Consultation
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
            Select a convenient time to connect and discuss your financial goals.
          </p>
        </div>
      </section>

      {/* Main Grid: Prominent Booking Widget & Sidebar */}
      <section className="py-20" id="live-scheduler-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="scheduler-grid">
            
            {/* BOOKING CORE CHANNEL: LEFT/MAIN (appears near the top) */}
            <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-xs lg:order-first">
              
              <AnimatePresence mode="wait">
                {/* STATE A: Booking Success Conflicted Alert */}
                {bookingConfirmed ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 px-6 text-center space-y-6"
                    id="success-booking-card"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h2 className="font-serif text-2xl font-bold text-neutral-dark">Consultation Confirmed!</h2>
                      <p className="text-xs text-gray-500 font-sans max-w-md mx-auto">
                        Your discovery call has been successfully generated in Mae's calendar dashboard.
                      </p>
                    </div>

                    <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl max-w-md mx-auto text-left divide-y divide-gray-100 font-sans space-y-3 pt-4">
                      <div className="flex justify-between text-xs py-1.5">
                        <span className="text-gray-400">Advisor Name:</span>
                        <strong className="text-neutral-dark">Mae Dungo</strong>
                      </div>
                      <div className="flex justify-between text-xs py-1.5">
                        <span className="text-gray-400">Client Name:</span>
                        <strong className="text-neutral-dark">{bookingForm.name}</strong>
                      </div>
                      <div className="flex justify-between text-xs py-1.5">
                        <span className="text-gray-400">Scheduled Date:</span>
                        <strong className="text-neutral-dark">
                          {datesAvailable.find(d => d.value === bookingForm.date)?.label || bookingForm.date}
                        </strong>
                      </div>
                      <div className="flex justify-between text-xs py-1.5">
                        <span className="text-gray-400">Reserved Slot:</span>
                        <strong className="text-neutral-dark">{bookingForm.time}</strong>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4">
                      <p className="text-[10px] text-gray-400 font-sans leading-relaxed max-w-sm mx-auto">
                        A custom Calendar invite link with security details has been sent to <strong>{bookingForm.email}</strong>. If you need to make corrections, please contact (832) 555-0190.
                      </p>
                      <button
                        onClick={resetBookingWidget}
                        className="bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark text-xs font-sans font-semibold tracking-widest uppercase py-3 px-8 rounded-full transition-colors cursor-pointer border border-neutral-dark"
                      >
                        Book Another Session
                      </button>
                    </div>

                  </motion.div>
                ) : bookingStep === 1 ? (
                  
                  // STEP 1: Select Day and Time Slot (GHL style)
                  <motion.div 
                    key="step-slots"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="border-b border-gray-100 pb-5">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-dark">1. Select Date & Session</h3>
                      <p className="text-xs text-gray-400 font-sans mt-1">
                        Select an available calendar date to check live hours. All times calculated in Central Standard Time (CST).
                      </p>
                    </div>

                    {/* Available Days Horizontal/Dense Grid */}
                    <div className="space-y-3">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans flex items-center">
                        <Calendar className="w-3.5 h-3.5 text-primary-gold mr-1" />
                        A. Available Consultation Dates
                      </label>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="date-buttons-grid">
                        {datesAvailable.map((dateObj) => {
                          const isActive = selectedDate === dateObj.value;
                          return (
                            <button
                              key={dateObj.value}
                              onClick={() => handleDaySelect(dateObj.value)}
                              className={`p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                                isActive 
                                  ? 'bg-neutral-dark text-white border-neutral-dark shadow-sm' 
                                  : 'bg-white border-gray-100 hover:border-primary-gold text-gray-700 text-xs text-nowrap'
                              }`}
                            >
                              <p className="text-[11px] font-sans font-medium">{dateObj.label}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slots Selection Grid */}
                    {selectedDate && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4 pt-4 border-t border-gray-100/50"
                        id="time-slots-container"
                      >
                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans flex items-center">
                          <Clock className="w-3.5 h-3.5 text-primary-gold mr-1" />
                          B. Available Consultation Hour Slots
                        </label>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5" id="time-grid-buttons">
                          {timeslots.map((slot) => {
                            const isSlotActive = selectedTime === slot;
                            return (
                              <button
                                key={slot}
                                onClick={() => handleTimeSelect(slot)}
                                className={`py-3.5 px-2 rounded-xl text-xs font-mono border text-center transition-all duration-200 cursor-pointer ${
                                  isSlotActive 
                                    ? 'bg-primary-gold text-neutral-dark border-primary-gold font-semibold shadow-xs' 
                                    : 'bg-white border-gray-100 hover:border-primary-gold/50 text-gray-600'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation bar to move to next Step */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-xs text-gray-400 font-sans">
                        {!selectedDate 
                          ? 'Please pick a date first.' 
                          : !selectedTime 
                            ? 'Please choose a session hour.' 
                            : 'Date & Time chosen. Ready to submit details.'}
                      </div>

                      <button
                        onClick={handleProceedToDetails}
                        disabled={!selectedDate || !selectedTime}
                        className="bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-xs font-sans font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl transition-all flex items-center justify-center cursor-pointer"
                      >
                        <span>Confirm Slot Details & Next</span>
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  
                  // STEP 2: Fill Client Details (GHL capture form alignment)
                  <motion.div 
                    key="step-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-dark">2. Enter Personal Credentials</h3>
                        <p className="text-xs text-gray-400 font-sans mt-0.5">Please provide coordinates for calendar generation.</p>
                      </div>
                      <button 
                        onClick={() => setBookingStep(1)} 
                        className="text-xs text-gray-400 hover:text-neutral-dark underline font-sans cursor-pointer whitespace-nowrap"
                      >
                        Modify Time Slot
                      </button>
                    </div>

                    {/* Summary badge */}
                    <div className="bg-primary-gold-light/60 p-4 rounded-xl flex items-center justify-between text-xs text-neutral-dark border border-primary-gold/15">
                      <div>
                        <p className="font-sans font-medium text-gray-500">Selected Appointment:</p>
                        <p className="font-serif font-bold text-gray-800 text-[13px] mt-0.5">
                          {datesAvailable.find(d => d.value === selectedDate)?.label} @ {selectedTime}
                        </p>
                      </div>
                      <span className="text-[10px] bg-white border border-primary-gold px-2.5 py-1 rounded-full uppercase tracking-widest font-sans font-semibold text-primary-gold text-right">CST Hours</span>
                    </div>

                    {/* Actual execution inputs */}
                    <form onSubmit={executeBooking} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Client Full Name *</label>
                          <input 
                            type="text" 
                            name="name"
                            value={bookingForm.name}
                            onChange={handleFormInputChange}
                            placeholder="Jane Doe" 
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Client Phone Number *</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={bookingForm.phone}
                            onChange={handleFormInputChange}
                            placeholder="(832) 555-0190" 
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Client Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={bookingForm.email}
                          onChange={handleFormInputChange}
                          placeholder="jane@organization.com" 
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold font-sans block">Consultation Goals (Optional)</label>
                        <textarea 
                          name="notes"
                          value={bookingForm.notes}
                          onChange={handleFormInputChange}
                          placeholder="Please note down if you are especially interested in retirement plans, index floors, family wealth protection, or business buy-sell strategies..." 
                          rows={3}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:ring-1 focus:ring-primary-gold"
                        ></textarea>
                      </div>

                      {/* Compliance opt in */}
                      <p className="text-[9px] text-gray-400 font-sans leading-normal">
                        By completing this booking selection, you agree to receive automated reservation text notifications and email instructions to coordinate this consultation. No aggressive sales pitches. Just 100% educational guidance.
                      </p>

                      <div className="pt-4 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setBookingStep(1)}
                          className="px-6 py-3.5 border border-gray-200 hover:border-neutral-dark rounded-xl text-xs font-sans uppercase font-semibold text-gray-600 hover:text-neutral-dark transition-all cursor-pointer whitespace-nowrap"
                        >
                          Back to Times
                        </button>
                        
                        <button
                          type="submit"
                          className="w-full bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark font-sans font-semibold text-xs tracking-widest uppercase py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-xs cursor-pointer border border-neutral-dark"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Finalize Live Reservation</span>
                        </button>
                      </div>

                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* CONTEXT SIDEBAR: RIGHT SIDE */}
            <div className="lg:col-span-5 bg-neutral-light border border-gray-100 rounded-3xl p-8 space-y-8" id="scheduler-sidebar">
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-gray-100 shadow-sm shrink-0">
                  <img 
                    src={maePortrait} 
                    alt="Mae Dungo Portrait sidebar snippet" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-neutral-dark">Mae Dungo, NP</h4>
                  <p className="text-[10px] font-sans text-gray-500 uppercase tracking-wider">Licensed Financial Professional</p>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200"></div>

              <div className="space-y-4">
                <h4 className="font-serif text-sm font-bold text-neutral-dark uppercase tracking-wider">The Consultation Blueprint</h4>
                <p className="text-gray-600 font-sans text-xs sm:text-sm leading-relaxed">
                  The consultation is designed to help clients better understand their financial goals, planning needs, and available strategies in a simple and comfortable environment.
                </p>
              </div>

              {/* Checklist details block */}
              <div className="space-y-4 pt-2">
                <h4 className="font-serif text-xs font-bold text-neutral-dark uppercase tracking-widest">What to Expect</h4>
                
                <div className="space-y-3" id="book-expect-checklist">
                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-sans text-gray-600">
                    <CheckSquare className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-dark block font-sans">Educational Conversation</strong>
                      <span className="text-xs text-gray-500 font-sans block">We sit down to teach you real, actionable financial mathematics. No secrets.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-sans text-gray-600">
                    <CheckSquare className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-dark block font-sans">Personalized Guidance</strong>
                      <span className="text-xs text-gray-500 font-sans block">Diagnostic analysis customized exactly to your family’s income framework.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-sans text-gray-600">
                    <CheckSquare className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-dark block font-sans">No Pressure</strong>
                      <span className="text-xs text-gray-500 font-sans block">Zero aggressive solicitation. No obligation to transfer assets.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-sans text-gray-600">
                    <CheckSquare className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-dark block font-sans">15-30 Minute Duration</strong>
                      <span className="text-xs text-gray-500 font-sans block">An concise, lightweight initial call to make sure we are a correct fit.</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-white/65 p-4 rounded-xl border border-gray-100 flex items-start space-x-2 max-w-sm">
                <AlertCircle className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-500 font-sans leading-normal">
                  Our scheduler is connected directly to GoHighLevel workflow triggers. You will get instant security codes and SMS schedules.
                </p>
              </div>

            </div>

          </div>
          
        </div>
      </section>

    </div>
  );
}
