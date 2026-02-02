'use client';

import { ArrowRight, Sparkles, Zap, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import RealTimeDashboard from './RealTimeDashboard';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-20">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-blue-400 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen Sales Intelligence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
            >
              Your AI SDR That <br />
              <span className="gradient-text">Never Sleeps.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Scale your outbound engine with an AI SDR that researches, prospects, and books meetings for you—24/7. Stop prospecting and start closing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16"
            >
              <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] flex items-center gap-2 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold text-lg backdrop-blur-md border border-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Zap className="w-5 h-5 text-blue-500 mb-2" />
                <div className="text-xl font-bold text-white">10x</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Faster Growth</div>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Users className="w-5 h-5 text-purple-500 mb-2" />
                <div className="text-xl font-bold text-white">40%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Cost Reduction</div>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <BarChart className="w-5 h-5 text-indigo-500 mb-2" />
                <div className="text-xl font-bold text-white">3.5x</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Pipeline Lift</div>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Sparkles className="w-5 h-5 text-pink-500 mb-2" />
                <div className="text-xl font-bold text-white">99%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Data Accuracy</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <RealTimeDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
