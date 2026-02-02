'use client';

import { Search, Mail, Target, Database, Zap, Shield, Sparkles } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

const features = [
  {
    icon: Search,
    title: 'Precision Prospecting',
    description: 'Our AI agents scour 40+ data sources to find high-intent prospects that match your ICP perfectly.',
    color: 'blue',
  },
  {
    icon: Mail,
    title: 'Hyper-Personalization',
    description: 'Every message is crafted using real-time prospect data, company news, and personal achievements.',
    color: 'purple',
  },
  {
    icon: Target,
    title: 'Autonomous Qualification',
    description: 'AI SDRs handle initial responses and qualify leads based on your specific criteria before booking a demo.',
    color: 'indigo',
  },
  {
    icon: Database,
    title: 'Real-time Enrichment',
    description: 'Automatically pull 30+ data points for every lead to ensure your sales team has full context.',
    color: 'cyan',
  },
  {
    icon: Zap,
    title: 'Adaptive Sequences',
    description: 'Outbound flows that pivot based on prospect engagement, sentiment, and intent signals.',
    color: 'rose',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and full compliance with GDPR/SOC2. Your data is always protected.',
    color: 'emerald',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-colors duration-500 overflow-hidden"
    >
      {/* Interactive Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Shimmer Border */}
      <div className="absolute inset-0 rounded-3xl [mask-image:linear-gradient(white,transparent)] group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
      </div>

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center mb-6 border border-${feature.color}-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300`}>
          <Icon className={`w-7 h-7 text-${feature.color}-400`} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-xs font-semibold mb-4 uppercase tracking-widest border border-blue-500/20">
            <Sparkles className="w-3 h-3" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for High-Growth Teams
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-balance">
            Unleash an automated outbound engine that works while you sleep,
            filling your calendar with high-quality meetings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
