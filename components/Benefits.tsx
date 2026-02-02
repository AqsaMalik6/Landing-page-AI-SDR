'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Time Saved',
    description: "AI handles the grunt work so you can focus on building relationships.",
    stat: '40hrs',
    label: 'Saved Weekly',
  },
  {
    icon: DollarSign,
    title: 'Lower Costs',
    description: 'Achieve massive reach at a fraction of the cost of traditional SDRs.',
    stat: '-70%',
    label: 'Cost reduction',
  },
  {
    icon: TrendingUp,
    title: 'More Pipeline',
    description: 'Launch thousands of sequences to drive consistent pipeline growth.',
    stat: '500%',
    label: 'Pipeline Lift',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background visual graph decorative element */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0 450C150 450 300 150 450 150C600 150 750 350 900 350C1050 350 1200 50 1440 50"
            stroke="#3b82f6"
            strokeWidth="4"
          />
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d="M0 450C150 450 300 150 450 150C600 150 750 350 900 350C1050 350 1200 50 1440 50V600H0V450Z"
            fill="url(#gradient-benefits)"
          />
          <defs>
            <linearGradient id="gradient-benefits" x1="720" y1="50" x2="720" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
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
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Maximize Your <span className="text-blue-500">ROI Capacity</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Experience the visual impact of AI-driven sales development.
          </p>
        </div>

        <div className="relative h-[400px] flex items-center justify-between px-4 sm:px-20 lg:px-40">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            // Position heights based on the mock graph line
            const yOffset = index === 0 ? 'translate-y-20' : index === 1 ? '-translate-y-20' : 'translate-y-0';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center ${yOffset}`}
              >
                <div className="relative group mb-6">
                  {/* Circle Backdrop */}
                  <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#030712] border-2 border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:border-blue-400 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                </div>

                <div className="text-center max-w-[150px] sm:max-w-[200px]">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">{benefit.stat}</div>
                  <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">{benefit.label}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-xs text-gray-500 hidden sm:block">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <button className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-all group">
            Detailed Analysis Report <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
