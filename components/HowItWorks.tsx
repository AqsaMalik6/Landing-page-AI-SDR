'use client';

import { motion } from 'framer-motion';
import { Search, Sparkles, Send, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Research',
    description: 'AI agents scan 40+ data sources to find prospects matching your ICP.',
  },
  {
    icon: Sparkles,
    title: 'Personalize',
    description: 'Hyper-personalized outreach based on real-time company signal data.',
  },
  {
    icon: Send,
    title: 'Engage',
    description: 'Autonomous follow-ups and objection handling on autopilot.',
  },
  {
    icon: TrendingUp,
    title: 'Convert',
    description: 'Hot leads qualified and booked directly into your sales calendar.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Flow Line */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "linear" }}
            d="M-50 400C200 600 400 200 600 400C800 600 1000 200 1200 400C1400 600 1600 200 1800 400"
            stroke="url(#flowGradient)"
            strokeWidth="8"
            strokeDasharray="20 20"
          />
          <defs>
            <linearGradient id="flowGradient" x1="0" y1="400" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-widest"
          >
            Our <span className="text-indigo-500">Autonomous</span> Pipeline
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center group"
              >
                {/* Node with Icon */}
                <div className="relative mb-8">
                  <div className="absolute -inset-2 bg-indigo-500/20 rounded-3xl blur-lg group-hover:bg-indigo-500/40 transition-all duration-500"></div>
                  <div className="relative w-20 h-20 bg-black border-2 border-indigo-500/30 rounded-3xl flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                    <Icon className="w-10 h-10" />
                  </div>
                  {/* Sequence Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-[#030712]">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>

                {/* Vertical dash for mobile flow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-indigo-500/50 to-transparent mt-8"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
