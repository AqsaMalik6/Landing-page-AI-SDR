'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Sparkles, Mail, Lock, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/dashboard');
    };

    return (
        <main className="min-h-screen bg-[#030712] flex overflow-hidden">
            {/* Left Side: Professional 3D Tech Image */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-transparent" />
                <img
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop"
                    alt="AI Technology"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                <div className="relative z-20 p-16 flex flex-col justify-between h-full w-full">
                    <div>
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter">AI<span className="text-blue-500">SDR</span></span>
                        </Link>
                    </div>

                    <div className="max-w-md">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            Automate your outbound with <span className="text-blue-500">AI Intelligence.</span>
                        </motion.h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Join over 2,000+ sales teams using AI SDR to book more meetings and close more deals.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-2xl">98%</span>
                            <span className="text-gray-500 text-sm italic">Accuracy Rate</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-2xl">24/7</span>
                            <span className="text-gray-500 text-sm italic">Autonomous SDR</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Professional Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 relative bg-[#030712]">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-lg z-10 p-8 md:p-10 bg-white/[0.1] border border-blue-500/60 rounded-[2.5rem] shadow-[0_0_100px_rgba(59,130,246,0.35)] backdrop-blur-2xl"
                >
                    <div className="mb-8 text-center lg:text-left">
                        <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Sign up</h1>
                        <p className="text-white/80 text-sm">Welcome to the AI SDR Platform. Register below.</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSignup}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">E-mail</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-4.5 w-4.5 text-blue-300 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="yourname@gmail.com"
                                    className="w-full bg-white/[0.1] border border-white/30 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/[0.15] outline-none transition-all text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-4.5 w-4.5 text-blue-300 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className="w-full bg-white/[0.1] border border-white/30 rounded-xl py-3 pl-11 pr-11 text-white placeholder:text-gray-400 focus:border-blue-400 focus:bg-white/[0.15] outline-none transition-all text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 ml-1">
                            <button
                                type="button"
                                onClick={() => setAgree(!agree)}
                                className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${agree ? 'bg-blue-600 border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'border-white/40 bg-transparent'}`}
                            >
                                {agree && <div className="w-2 h-2 bg-white rounded-sm" />}
                            </button>
                            <span className="text-[11px] text-white/70 font-medium">I agree to the terms of service</span>
                        </div>

                        <button className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white rounded-xl font-bold text-base shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]">
                            Sign Up
                        </button>

                        <div className="relative flex items-center justify-center py-1">
                            <div className="flex-grow border-t border-white/20"></div>
                            <span className="mx-4 text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">Or</span>
                            <div className="flex-grow border-t border-white/20"></div>
                        </div>

                        <button className="flex items-center justify-center gap-3 w-full py-3 bg-white/15 border border-white/20 rounded-xl text-white font-bold text-sm hover:bg-white/25 transition-all">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Gmail Account
                        </button>
                    </form>

                    <div className="mt-8 text-center pt-6 border-t border-white/20">
                        <p className="text-white/60 font-medium text-xs">
                            Already a member?{' '}
                            <Link href="/login" className="text-blue-400 font-bold hover:text-blue-300 transition-colors uppercase tracking-widest ml-1">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
