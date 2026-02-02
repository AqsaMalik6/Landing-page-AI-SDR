'use client';

import { motion } from 'framer-motion';
import { Brain, Database, Workflow, Bot, Shield, Gauge, Cpu } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Advanced LLM Engine',
    description: 'Proprietary models tuned for sales psychology and patterns.',
    side: 'left',
  },
  {
    icon: Workflow,
    title: 'Smart Orchestration',
    description: 'Agentic frameworks coordinate multi-step workflows.',
    side: 'left',
  },
  {
    icon: Database,
    title: 'Deep Enrichment',
    description: 'Real-time extraction of company signals and intent data.',
    side: 'left',
  },
  {
    icon: Bot,
    title: 'Agentic Reasoning',
    description: 'Autonomous agents that pivot and respond instantly.',
    side: 'right',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Enterprise-grade encryption and full GDPR compliance.',
    side: 'right',
  },
  {
    icon: Gauge,
    title: 'Predictive Analytics',
    description: 'Perfect time and channel identification for every prospect.',
    side: 'right',
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20">
        <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute inset-16 border border-indigo-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute inset-32 border border-blue-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest border border-white/10">
            <Cpu className="w-4 h-4" />
            <span>The Intelligence Core</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Next-Gen AI Plumbing
          </h2>
        </motion.div>

        {/* Orbital Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">

          {/* Left Side Points */}
          <div className="flex-1 space-y-12 lg:pr-24 order-2 lg:order-1 w-full lg:w-auto">
            {technologies.filter(t => t.side === 'left').map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group text-center lg:text-right lg:flex-row-reverse"
                >
                  <div className="relative flex-shrink-0 mx-auto lg:mx-0">
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-16 h-16 rounded-full bg-black border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-blue-400 transition-all">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{tech.title}</h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto lg:ml-auto">{tech.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-20 order-1 lg:order-2 px-4"
          >
            {/* Phone Frame */}
            <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden flex items-center justify-center mx-auto">
              <div className="absolute inset-0 bg-blue-600/5"></div>
              <div className="relative w-full h-full p-6 flex flex-col gap-4">
                <div className="w-full h-12 bg-white/5 rounded-xl animate-pulse"></div>
                <div className="w-2/3 h-4 bg-white/10 rounded-full mx-auto"></div>
                <div className="mt-8 space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-full h-2 bg-white/10 rounded-full"></div>
                        <div className="w-1/2 h-2 bg-white/5 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto w-full h-32 bg-blue-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-blue-400 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Orbiting Particles */}
            <div className="absolute inset-[-60px] pointer-events-none hidden lg:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-500/20 border border-indigo-500/50 rounded-full blur-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                <div className="absolute bottom-1/4 right-0 w-6 h-6 bg-blue-500/20 border border-blue-500/50 rounded-full blur-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side Points */}
          <div className="flex-1 space-y-12 lg:pl-24 order-3 lg:order-3 w-full lg:w-auto">
            {technologies.filter(t => t.side === 'right').map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group text-center lg:text-left"
                >
                  <div className="relative flex-shrink-0 mx-auto lg:mx-0">
                    <div className="absolute -inset-2 bg-indigo-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-16 h-16 rounded-full bg-black border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 transition-all">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{tech.title}</h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto lg:mr-auto">{tech.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
