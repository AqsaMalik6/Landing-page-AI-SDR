'use client';

import { CheckCircle2, ShoppingCart, Mail, Users, Calendar, Phone, Settings, Zap, Eye, Rocket, Plus, Minus, ShieldCheck, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const floatingEmojis = [
    { icon: '📩', x: '5%', y: '10%', delay: 0 },
    { icon: '📈', x: '92%', y: '15%', delay: 1 },
    { icon: '📱', x: '8%', y: '45%', delay: 2 },
    { icon: '💰', x: '88%', y: '55%', delay: 1.5 },
    { icon: '🚀', x: '12%', y: '75%', delay: 3 },
    { icon: '🤝', x: '95%', y: '80%', delay: 0.5 },
];

const faqs = [
    {
        q: "How can AI SDR enhance my sales performance?",
        a: "Our AI SDR automates the top-of-funnel tasks—researching leads, personalizing initial outreach, and managing follow-ups. This allows your sales team to focus purely on high-value conversations and closing deals, typically increasing meeting volume by 3x-5x."
    },
    {
        q: "How does AI handle lead research specifically?",
        a: "It scans thousands of data points including LinkedIn profiles, company news, and recent SEC filings to find relevant 'triggers' for outreach, ensuring every message feels human and highly relevant."
    },
    {
        q: "Is the $29/mo price locked in?",
        a: "Yes, once you subscribe to a plan, your base price is locked. We believe in transparent, predictable pricing without hidden fees or surprise increases."
    },
    {
        q: "What is included in the seat license?",
        a: "Each license includes full access to the AI engine, CRM integrations (Salesforce/HubSpot), and our centralized dashboard for tracking campaign performance."
    },
    {
        q: "Can I upgrade or downgrade my plan?",
        a: "Absolutely. You can change your plan at any time through your dashboard settings. If you upgrade, the new features are available immediately."
    },
];

export default function PricingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-[#030712] relative overflow-hidden font-sans">
            <Navbar />

            {/* Floating Emojis */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
                {floatingEmojis.map((item, index) => (
                    <div
                        key={index}
                        className="absolute floating-icon text-3xl opacity-20 filter grayscale"
                        style={{
                            left: item.x,
                            top: `${index * 15 + 10}%`,
                            animationDelay: `${item.delay}s`,
                        }}
                    >
                        {item.icon}
                    </div>
                ))}
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 text-center relative z-10">
                <h1 className="text-3xl md:text-7xl font-bold text-white mb-6 tracking-tight max-w-fit mx-auto leading-[1.1]">
                    <span className="block">Pricing that respects your pipeline</span>
                    <span className="block text-white">goals and your budget</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Transparent monthly pricing with no surprises. <br />
                    Scale confidently with predictable costs and flexible terms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/signup" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:scale-105 active:scale-95">
                        GET STARTED
                    </Link>
                    <Link href="/book-demo" className="px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center">
                        Book a Demo
                    </Link>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-12">

                    {/* Standard Plan */}
                    <div className="pricing-card bg-white/[0.02] border border-white/10 p-10 flex flex-col relative group overflow-hidden rounded-[2.5rem]">
                        <div className="mb-8 text-center lg:text-left">
                            <h2 className="text-2xl font-bold text-purple-500 mb-6 uppercase tracking-widest">Standard</h2>
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-6xl font-black text-white">$29</span>
                                <span className="text-gray-500 font-bold text-sm uppercase">Per Month</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10 flex-grow">
                            {[
                                '1,200 lead search credits',
                                '1,200 AI messages/month',
                                'AI-researched emails & LinkedIn',
                                'AI prospecting with intent signals',
                                '24/7 Slack support',
                                'Monthly check-in'
                            ].map((f) => (
                                <div key={f} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span className="text-sm text-gray-300 font-medium">{f}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/signup" className="w-full py-4 border border-white/10 bg-white/5 text-white rounded-full font-black uppercase tracking-wider text-sm hover:bg-white/10 transition-all text-center">
                            CHOOSE STANDARD
                        </Link>
                    </div>

                    {/* Advanced Plan */}
                    <div className="pricing-card bg-indigo-600 border border-indigo-400 p-10 flex flex-col relative group scale-105 shadow-[0_0_60px_rgba(79,70,229,0.3)] rounded-[2.5rem] z-20">
                        <div className="absolute top-6 right-8"><Zap className="w-8 h-8 text-white/40" /></div>
                        <div className="mb-8 text-center lg:text-left">
                            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Advanced</h2>
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-6xl font-black text-white">$39</span>
                                <span className="text-indigo-100/60 font-bold text-sm uppercase">Per Month</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10 flex-grow">
                            {[
                                '4,500 lead search credits',
                                '4,500 AI messages/month',
                                'AI videos & voice notes',
                                'Deep CRM integration',
                                'Priority feature requests',
                                'Biweekly coaching'
                            ].map((f) => (
                                <div key={f} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                    <span className="text-sm text-white font-bold">{f}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/signup" className="w-full py-4 bg-white text-indigo-600 rounded-full font-black shadow-xl transition-all uppercase tracking-wider text-sm hover:scale-[1.02] active:scale-[0.98] text-center">
                            CHOOSE ADVANCED
                        </Link>
                    </div>

                    {/* Complete Plan */}
                    <div className="pricing-card bg-white/[0.02] border border-white/10 p-10 flex flex-col relative group overflow-hidden rounded-[2.5rem]">
                        <div className="mb-8 text-center lg:text-left">
                            <h2 className="text-2xl font-bold text-purple-500 mb-6 uppercase tracking-widest">Complete</h2>
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-6xl font-black text-white">$59</span>
                                <span className="text-gray-500 font-bold text-sm uppercase">Per Month</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-10 flex-grow">
                            {[
                                'Unlimited AI credits',
                                'Everything in Advanced',
                                'Website visitor tracking',
                                'Dedicated FTE for support',
                                'Custom security & compliance',
                                'Unlimited team seats'
                            ].map((f) => (
                                <div key={f} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span className="text-sm text-gray-300 font-medium">{f}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/signup" className="w-full py-4 border border-white/10 bg-white/5 text-white rounded-full font-black uppercase tracking-wider text-sm hover:bg-white/10 transition-all text-center">
                            CHOOSE COMPLETE
                        </Link>
                    </div>

                </div>
            </div>

            {/* 1 Week Launch Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From sign-up to launch in 1 week</h2>
                </div>

                <div className="relative mb-24 overflow-x-auto lg:overflow-visible no-scrollbar pb-8">
                    <div className="min-w-[800px] lg:min-w-0 flex justify-between relative">
                        <div className="absolute top-[35px] left-[5%] right-[5%] h-[2px] onboarding-step-line z-0" />

                        {[
                            { day: 'Day 1', label: 'Kick-off call + ICP definition', icon: <Phone className="w-6 h-6" /> },
                            { day: 'Day 2', label: 'AI persona config + mailbox setup', icon: <Settings className="w-6 h-6" /> },
                            { day: 'Day 3', label: 'Domain warmup begins', icon: <Zap className="w-6 h-6" /> },
                            { day: 'Day 4', label: 'Campaign preview & approval', icon: <Eye className="w-6 h-6" /> },
                            { day: 'Day 7', label: 'Launch + live monitoring', icon: <Rocket className="w-6 h-6" /> },
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center relative z-10 w-1/5">
                                <div className="w-[70px] h-[70px] rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 mb-4 bg-[#030712]">
                                    {step.icon}
                                </div>
                                <div className="text-sm font-bold text-white mb-2">{step.day}</div>
                                <p className="text-xs text-gray-500 max-w-[120px]">{step.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-indigo-600 rounded-[2.5rem] p-12 text-center relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="text-6xl md:text-7xl font-black text-white mb-4">90%</div>
                            <div className="text-2xl md:text-3xl font-bold text-indigo-100 italic">of clients launch within 7 days or less</div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 relative">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Valery" alt="Valery" className="w-10 h-10" />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white">Valery E.</div>
                                <div className="text-sm text-gray-500">Marketing Manager, Mid-Market Company</div>
                            </div>
                        </div>
                        <p className="text-gray-300 italic leading-relaxed relative">
                            <span className="text-6xl text-indigo-500/20 absolute -top-8 -left-2 tracking-tighter font-serif">"</span>
                            Setup was quick and the first campaign went live smoothly. Saved us 145 hours in week one.
                        </p>
                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                            <span>Verified Testimonial</span>
                            <ShieldCheck className="w-5 h-5 text-blue-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section - Revamped with Light Blue Background and More Spacing */}
            <section className="mt-32 py-32 bg-[#eef6ff] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Left Side: Question Image/Circle */}
                        <div className="lg:col-span-4 flex flex-col items-center lg:items-start lg:pl-8">
                            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-8 leading-none text-center lg:text-left">
                                CURIOUS <br /> <span className="text-blue-500/40 uppercase text-2xl md:text-3xl">HAVE A QUERY?</span>
                            </h2>
                            <div className="relative w-48 h-48 md:w-56 md:h-56">
                                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
                                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-500 rounded-[2.5rem] rotate-12 flex items-center justify-center shadow-xl overflow-hidden group hover:rotate-0 transition-all duration-500">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    <HelpCircle className="w-24 h-24 md:w-28 md:h-28 text-white relative z-10 drop-shadow-lg" />
                                </div>
                                {/* Decorative Dots */}
                                <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-yellow-400 rounded-xl -rotate-12 flex items-center justify-center font-black text-xl text-black shadow-md">?</div>
                                <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-2xl text-white shadow-md shadow-blue-500/20">?</div>
                            </div>
                        </div>

                        {/* Right Side: FAQ List */}
                        <div className="lg:col-span-8">
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className={`faq-item group ${openFaq === idx ? 'bg-white border-blue-200' : 'bg-white/50 border-blue-100/50 hover:border-blue-200'} border rounded-3xl transition-all duration-300 shadow-sm`}>
                                        <button
                                            onClick={() => setOpenFaq(idx)}
                                            className="w-full p-6 md:p-8 flex items-center justify-between text-left"
                                        >
                                            <span className={`text-lg md:text-xl font-bold transition-colors ${openFaq === idx ? 'text-blue-900' : 'text-blue-800/70 group-hover:text-blue-900'}`}>
                                                {faq.q}
                                            </span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-blue-600 rotate-180' : 'bg-blue-100 group-hover:bg-blue-200'}`}>
                                                <Plus className={`w-5 h-5 text-white transition-transform ${openFaq === idx ? 'hidden' : 'block'} group-hover:text-blue-600`} />
                                                <Minus className={`w-5 h-5 text-white transition-transform ${openFaq === idx ? 'block' : 'hidden'}`} />
                                            </div>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100 px-6 md:px-8 pb-8' : 'max-h-0 opacity-0'}`}>
                                            <div className="w-full h-px bg-blue-100 mb-6"></div>
                                            <p className="text-blue-800/80 text-base md:text-lg leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
