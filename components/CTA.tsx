'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
        >
          {/* Animated rings */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] border border-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8 border border-white/20"
            >
              <Rocket className="w-4 h-4" />
              <span>Ready to scale?</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Start Booking Meetings <br />
              <span className="text-blue-200">On Autopilot Today.</span>
            </h2>

            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ high-growth companies using AI SDRs to automate their outbound and hit their pipeline targets every single month.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button className="group px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                Get Started for Free
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-transparent text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
                Book a Strategy Call
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-200" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-200" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-200" />
                <span>Setup in 10 Minutes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
