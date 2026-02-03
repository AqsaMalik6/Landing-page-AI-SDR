'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Mail, User, MessageSquare, ChevronLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function BookDemoPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        requirements: '',
        date: '',
        time: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3); // Success state
    };

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

    return (
        <main className="min-h-screen bg-[#030712] text-white overflow-hidden relative">
            <Navbar />

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 overflow-hidden relative group">
                                <Sparkles className="w-4 h-4" />
                                <span>SCHEDULE A PERSONALIZED TOUR</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
                                See your AI SDR <br />
                                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">in action.</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                                Experience how our AI agents research, personalize, and launch high-converting campaigns automatically.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                'Live demo of the AI research engine',
                                'Overview of dashboard & data security',
                                'Custom pricing for your volume',
                                'Campaign strategy consultation'
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-sm max-w-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" className="w-12 h-12 rounded-full border border-blue-500/30" alt="" />
                                <div>
                                    <div className="font-bold">Alex Rivera</div>
                                    <div className="text-xs text-gray-500">Head of Growth @ TechScale</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 italic">"The demo completely changed our view of AI SDRs. We launched in 3 days."</p>
                        </div>
                    </motion.div>

                    {/* Right Side: Form / Multi-step */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden"
                    >
                        {/* Shining border effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] -mr-16 -mt-16" />

                        {step === 1 && (
                            <form className="space-y-6 relative z-10">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-black mb-2">Basic Information</h2>
                                    <p className="text-gray-500 text-sm">Fill in your details to get started.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User className="h-5 w-5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Requirement (Optional)</label>
                                        <div className="relative group">
                                            <div className="absolute top-4 left-4 flex items-center pointer-events-none">
                                                <MessageSquare className="h-5 w-5 text-gray-600 group-focus-within:text-blue-500 transition-colors" />
                                            </div>
                                            <textarea
                                                placeholder="Tell us what you're looking for..."
                                                rows={4}
                                                value={formData.requirements}
                                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-blue-500/50 transition-all font-medium resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 group"
                                >
                                    Next: Select Time
                                </button>
                            </form>
                        )}

                        {step === 2 && (
                            <div className="space-y-8 relative z-10">
                                <button onClick={() => setStep(1)} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold">
                                    <ChevronLeft className="w-4 h-4" />
                                    BACK
                                </button>

                                <div>
                                    <h2 className="text-2xl font-black mb-2 text-white">Select a Date & Time</h2>
                                    <p className="text-gray-500 text-sm">Pick a slot that works best for you.</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-5 gap-2">
                                        {days.map((day) => (
                                            <button
                                                key={day}
                                                onClick={() => setFormData({ ...formData, date: day })}
                                                className={`py-3 rounded-xl border text-xs font-bold transition-all ${formData.date === day ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/30'}`}
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        {times.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setFormData({ ...formData, time })}
                                                className={`py-4 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${formData.time === time ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'}`}
                                            >
                                                <Clock className="w-4 h-4" />
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg transition-all hover:scale-[1.02] shadow-xl shadow-white/10"
                                >
                                    Confirm Demo
                                </button>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 relative z-10">
                                <div className="w-24 h-24 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center relative">
                                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                                    <div className="absolute inset-0 bg-green-500/20 blur-[20px] rounded-full" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black mb-2">Awesome, {formData.name.split(' ')[0]}!</h2>
                                    <p className="text-gray-400 leading-relaxed">
                                        Your demo is scheduled for <span className="text-white font-bold">{formData.date}</span> at <span className="text-white font-bold">{formData.time}</span>.<br />
                                        We've sent the meeting invite to <span className="text-blue-400">{formData.email}</span>.
                                    </p>
                                </div>
                                <Link
                                    href="/"
                                    className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold hover:bg-white/10 transition-all"
                                >
                                    Return Home
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
