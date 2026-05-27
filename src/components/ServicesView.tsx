/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppRoute } from '../types';
import { 
  Shield, 
  Compass, 
  TrendingUp, 
  Award, 
  Lightbulb, 
  Briefcase, 
  Users, 
  ChevronRight,
  Mail,
  Calendar,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesViewProps {
  onNavigate: (route: AppRoute) => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  
  const allServices = [
    {
      id: 'wealth-protection',
      title: "Wealth Protection",
      tagline: "Asset Safeguarding & Risk Mitigation",
      description: "Wealth protection is the foundational block of any resilient financial blueprint. We help individuals and families prepare for life's unexpected moments through protection-focused financial strategies, ensuring that your livelihood, dependents, and accumulated assets are shielded from catastrophic loss or capital drainage.",
      bulletPoints: [
        "Unearned disability & critical illness capital hedges",
        "Whole, Term & Universal life strategy design",
        "Personal risk profiling and current coverage audits",
        "Tax-advantaged asset isolation blueprints"
      ],
      icon: Shield,
      isHighlighted: true
    },
    {
      id: 'retirement-planning',
      title: "Retirement Planning",
      tagline: "Securing Stable, Lifetime Distribution Streams",
      description: "We orchestrate balanced strategies designed to help clients build long-term financial confidence and prepare for a rewarding retirement. By addressing sequence-of-returns risks and longevity parameters, we seek to generate predictable income that you cannot outlive.",
      bulletPoints: [
        "Consistent tax-favorable distribution planning",
        "Annuity structure evaluation and deployment",
        "Longevity protection and cost-of-living indexation",
        "Pension maximization and social security optimization"
      ],
      icon: Compass,
      isHighlighted: false
    },
    {
      id: 'indexed-strategies',
      title: "Indexed Strategies",
      tagline: "Growth Potential with Premium Downside Protection",
      description: "Learn how capital indexes can capture upward market trends while utilizing contract floors to shield your principal during market downswings. We provide financial education on protection-focused financial strategies designed for long-term growth potential.",
      bulletPoints: [
        "Zero-percent floors protecting against market losses",
        "Indexed Universal Life (IUL) allocation strategies",
        "Fixed Indexed Annuities (FIA) evaluation",
        "Compounded accumulation modeling with cap boundaries"
      ],
      icon: TrendingUp,
      isHighlighted: false
    },
    {
      id: 'final-expense',
      title: "Final Expense",
      tagline: "Dignified Legacy & Immediate Expense Capital",
      description: "Helping families prepare for future financial responsibilities and immediate final needs. We make sure that funeral costs, outstanding medical balances, and estate processing costs are fully funded ahead of time, insulating grieving relatives from operational burdens.",
      bulletPoints: [
        "Simplified issue policies with quick capital release",
        "Guaranteed-acceptance programs for elderly relatives",
        "Pre-arranged logistics budgeting checklists",
        "Insulating families from stressful crowd-funded requests"
      ],
      icon: Award,
      isHighlighted: false
    },
    {
      id: 'financial-education',
      title: "Financial Education",
      tagline: "Simplifying Complex Concepts for True Autonomy",
      description: "We are passionate about simplifying financial concepts through personalized educational conversations and guidance. True wealth is built on knowledge. Mae Dungo unpacks the rules of money, tax buckets, and compound growth math in plain, accessible language.",
      bulletPoints: [
        "Understanding the Rule of 72 & Compound Math",
        "Demystifying different standard tax categories (Tax-now, Tax-later, Tax-never)",
        "Budgeting frameworks designed for high-earning, busy nurses",
        "No obligation group educational workshops & events"
      ],
      icon: Lightbulb,
      isHighlighted: false
    },
    {
      id: 'business-planning',
      title: "Business Planning",
      tagline: "Tax-Efficient Enterprise & Transition Blueprints",
      description: "Educational strategies designed to help business owners, medical clinic operators, and startup entrepreneurs plan for long-term success. We assist in structuring executive compensation models and business continuation contracts.",
      bulletPoints: [
        "Key-Person insurance and executive benefit consulting",
        "Buy-Sell Agreement funding options",
        "Employee retention planning structures",
        "Business succession, liquidation, and retirement strategies"
      ],
      icon: Briefcase,
      isHighlighted: false
    },
    {
      id: 'family-legacy',
      title: "Family & Legacy Planning",
      tagline: "Preserving Wealth Across Generational Lines",
      description: "Helping families prepare for future generations through long-term planning strategies that survive beyond single lifetimes. We align insurance capital, educational trusts, and asset transfers to secure your descendants' economic launch pads.",
      bulletPoints: [
        "Aspirational wealth passing and tax-free legacy tools",
        "College funding blueprints (indexed and traditional alternative approaches)",
        "Trust coordination references and beneficiary alignment",
        "Charitable giving coordination frameworks"
      ],
      icon: Users,
      isHighlighted: true
    }
  ];

  return (
    <div id="services-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary-gold-light/40 to-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white border border-primary-gold/30 px-3 py-1.5 rounded-full w-fit">
            <span className="text-[10px] font-sans tracking-widest uppercase text-primary-gold font-bold">Solutions Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-neutral-dark font-bold tracking-tight">
            Financial Services & Education
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
            Personalized educational strategies designed to help clients better understand planning, protection, and long-term wealth building in a comfortable, jargon-free atmosphere.
          </p>
        </div>
      </section>

      {/* Services Comprehensive Cards List */}
      <section className="py-24" id="comprehensive-services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16" id="services-detailed-flow">
            {allServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  id={`service-${service.id}`}
                  className={`p-8 md:p-12 rounded-[32px] border transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    service.isHighlighted 
                      ? 'bg-neutral-light border-primary-gold/30 shadow-md ring-1 ring-primary-gold/5' 
                      : 'bg-white border-gray-100'
                  }`}
                >
                  {/* Service Core Info */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-neutral-dark text-white flex items-center justify-center shrink-0 border border-primary-gold/20">
                        <IconComponent className="w-5 h-5 text-primary-gold" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans tracking-widest uppercase text-primary-gold font-bold">Program 0{idx + 1}</span>
                        <h2 className="font-serif text-2xl font-bold text-neutral-dark">{service.title}</h2>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 font-sans text-xs uppercase tracking-widest font-semibold border-b border-gray-100 pb-2">
                      {service.tagline}
                    </p>

                    <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullet Core Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2" id="service-bullets">
                      {service.bulletPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm font-sans text-gray-500">
                          <Check className="w-4 h-4 text-primary-gold shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Engagement Column */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center pt-8 lg:pt-0 lg:border-l lg:border-gray-100 lg:pl-10 h-full">
                    <div className="text-center space-y-4 max-w-xs">
                      <p className="text-xs text-gray-400 font-sans">
                        Interested in looking at personalized calculators or protection structures for this specific solution?
                      </p>
                      
                      <button
                        onClick={() => onNavigate(AppRoute.Book)}
                        className="w-full flex items-center justify-center space-x-2 bg-neutral-dark hover:bg-primary-gold text-white hover:text-neutral-dark transition-all duration-300 py-3.5 px-6 rounded-xl text-xs font-sans font-medium tracking-widest uppercase shadow-xs cursor-pointer border border-neutral-dark"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Schedule Call</span>
                      </button>

                      <button
                        onClick={() => onNavigate(AppRoute.Connect)}
                        className="w-full text-xs font-sans text-gray-500 hover:text-neutral-dark underline tracking-widest uppercase transition-colors"
                      >
                        Ask a Question
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Localized FAQ/Core Disclosures Panel */}
      <section className="py-20 bg-neutral-light border-t border-gray-100" id="services-disability-footer">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-dark">
            Our Ethical Consultation Philosophy
          </h3>
          <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
            All meetings with Mae Dungo focus on clear, pressure-free financial education. We operate with strict regulatory alignment inside of Texas license parameters. As a practitioner of medical and fiscal diagnosis, Mae analyzes your situation objectively before proposing any specific indexed capital structures or term allocations.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate(AppRoute.Book)}
              className="bg-primary-gold hover:bg-primary-gold-hover text-neutral-dark px-8 py-4.5 rounded-full text-xs font-sans tracking-widest uppercase font-semibold shadow-md transition-all cursor-pointer"
            >
              Book My Education Review
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
