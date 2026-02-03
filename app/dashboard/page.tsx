'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Users,
    Settings,
    Rocket,
    Zap,
    CheckCircle2,
    Circle,
    ChevronRight,
    Search,
    Bell,
    CreditCard,
    Plus,
    BarChart3,
    ArrowUpRight,
    MoreHorizontal,
    Mail,
    MessageSquare,
    ShieldCheck,
    Globe,
    CheckCircle,
    UserCircle,
    Inbox,
    Target,
    Activity,
    Calendar,
    Clock,
    TrendingUp,
    DollarSign,
    LogOut,
    Check
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function OnboardingDashboard() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('onboarding');
    const [step, setStep] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState('Advanced Plan');
    const [selectedStyle, setSelectedStyle] = useState('Professional');

    const handleLogout = () => {
        router.push('/');
    };

    const steps = [
        { id: 1, name: 'Profile Setup', icon: <Users className="w-5 h-5" /> },
        { id: 2, name: 'AI Character', icon: <Zap className="w-5 h-5" /> },
        { id: 3, name: 'Plan Selection', icon: <CreditCard className="w-5 h-5" /> },
        { id: 4, name: 'Launch!', icon: <Rocket className="w-5 h-5" /> },
    ];

    const stats = [
        { label: 'Total Leads', value: '1,248', change: '+12%', icon: <Users className="w-5 h-5 text-blue-500" /> },
        { label: 'Meetings Booked', value: '42', change: '+5%', icon: <BarChart3 className="w-5 h-5 text-purple-500" /> },
        { label: 'Response Rate', value: '18.4%', change: '+2.1%', icon: <Zap className="w-5 h-5 text-amber-500" /> },
    ];

    return (
        <div className="min-h-screen bg-[#030712] text-white flex">

            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-black/20 p-6 flex flex-col hidden lg:flex">
                <Link href="/" className="flex items-center gap-2 mb-10 px-2 transition-transform hover:scale-105">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white fill-white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter">AI<span className="text-blue-500">SDR</span></span>
                </Link>

                <nav className="space-y-2 flex-grow">
                    {[
                        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
                        { id: 'onboarding', label: 'Onboarding', icon: <Rocket className="w-5 h-5 text-blue-500" /> },
                        { id: 'leads', label: 'Leads', icon: <Users className="w-5 h-5" /> },
                        { id: 'campaigns', label: 'Campaigns', icon: <Target className="w-5 h-5" /> },
                        { id: 'inbox', label: 'Inbox', icon: <Inbox className="w-5 h-5" /> },
                        { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === item.id ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]' : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'}`}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-500/10 border border-transparent transition-all mt-4"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </nav>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[1px]">
                            <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" alt="avatar" />
                            </div>
                        </div>
                        <div>
                            <div className="text-sm font-bold">New Prospect</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Trial Account</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow flex flex-col min-w-0">

                {/* Header */}
                <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between bg-black/10 backdrop-blur-md sticky top-0 z-50">
                    <div className="relative w-96 max-w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input
                            type="text"
                            placeholder="Search campaigns, leads..."
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm outline-none focus:border-blue-500/30 transition-all font-medium"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                            <Bell className="w-5 h-5" />
                            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full" />
                        </button>
                        <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/10 active:scale-95">
                            New Campaign
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <div className="p-8 overflow-y-auto">
                    {activeTab === 'onboarding' ? (
                        <>
                            {/* Onboarding Header */}
                            <div className="mb-12">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h1 className="text-3xl font-black mb-2">Welcome to AI SDR Dashboard</h1>
                                        <p className="text-gray-500">Complete these simple steps to launch your first AI autopilot campaign.</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-blue-400 mb-1">Step {step} of 4</div>
                                        <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                            <motion.div
                                                className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(step / 4) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Steps Navigator */}
                                <div className="grid grid-cols-4 gap-4">
                                    {steps.map((s, idx) => (
                                        <div
                                            key={s.id}
                                            className={`relative p-6 rounded-3xl border transition-all ${step === s.id ? 'bg-blue-600/10 border-blue-500/50 shadow-xl' : step > s.id ? 'bg-white/[0.02] border-green-500/30' : 'bg-white/[0.02] border-white/5 opacity-50'}`}
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step >= s.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-gray-600'}`}>
                                                    {s.icon}
                                                </div>
                                                {step > s.id && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                            </div>
                                            <div className={`text-sm font-black uppercase tracking-widest ${step >= s.id ? 'text-white' : 'text-gray-600'}`}>{s.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Interactive Section */}
                                <div className="lg:col-span-2 space-y-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={step}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -mr-32 -mt-32" />

                                            {step === 1 && (
                                                <div className="space-y-6 relative z-10">
                                                    <h2 className="text-2xl font-black">1. Define Your Profile</h2>
                                                    <p className="text-gray-400">Tell us a bit about yourself and your company.</p>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Company Name</label>
                                                            <input type="text" placeholder="e.g. Acme Inc" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-blue-500/50 outline-none" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Website</label>
                                                            <input type="text" placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-blue-500/50 outline-none" />
                                                        </div>
                                                    </div>
                                                    <button onClick={() => setStep(2)} className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
                                                        CONTINUE
                                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            )}

                                            {step === 2 && (
                                                <div className="space-y-6 relative z-10">
                                                    <h2 className="text-2xl font-black">2. Configure AI Persona</h2>
                                                    <p className="text-gray-400">How should your AI agent communicate?</p>
                                                    <div className="grid grid-cols-3 gap-3">
                                                        {['Professional', 'Casual', 'Hard Seller'].map(style => (
                                                            <button
                                                                key={style}
                                                                onClick={() => setSelectedStyle(style)}
                                                                className={`p-4 rounded-2xl border transition-all text-xs font-bold ${selectedStyle === style ? 'bg-blue-600 border-blue-500 shadow-lg' : 'bg-white/5 border-white/10 hover:bg-blue-600/10 hover:border-blue-500/30'}`}
                                                            >
                                                                {style}
                                                            </button>
                                                        ))}
                                                    </div>
                                                    <button onClick={() => setStep(3)} className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black uppercase tracking-widest transition-all">NEXT: CHOOSE PLAN</button>
                                                </div>
                                            )}

                                            {step === 3 && (
                                                <div className="space-y-6 relative z-10">
                                                    <h2 className="text-2xl font-black">3. Plan Selection</h2>
                                                    <p className="text-gray-400">Confirm your subscription to activate credits.</p>
                                                    <div className="space-y-3">
                                                        {['Standard Plan', 'Advanced Plan', 'Complete Plan'].map((p) => (
                                                            <button
                                                                key={p}
                                                                onClick={() => setSelectedPlan(p)}
                                                                className={`w-full p-6 rounded-3xl border flex items-center justify-between transition-all ${selectedPlan === p ? 'bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10'}`}
                                                            >
                                                                <div className="text-left">
                                                                    <div className="text-lg font-black">{p}</div>
                                                                    <div className="text-sm text-blue-400">{p === 'Standard Plan' ? '$19.00' : p === 'Advanced Plan' ? '$39.00' : '$99.00'} / month</div>
                                                                </div>
                                                                {selectedPlan === p && <Check className="w-6 h-6 text-blue-500" />}
                                                            </button>
                                                        ))}
                                                    </div>
                                                    <button onClick={() => setStep(4)} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]">FINALIZE SETUP</button>
                                                </div>
                                            )}

                                            {step === 4 && (
                                                <div className="flex flex-col items-center justify-center py-6 text-center space-y-6 relative z-10">
                                                    <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center animate-bounce shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                                                        <Rocket className="w-10 h-10 text-white" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-3xl font-black pb-2">You're All Set!</h2>
                                                        <p className="text-gray-500 max-w-sm">The engine is warming up. Your AI SDR will start research in 24 hours.</p>
                                                    </div>
                                                    <button onClick={() => setActiveTab('dashboard')} className="px-10 py-4 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-110 transition-all">GO TO DASHBOARD</button>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="grid grid-cols-3 gap-4">
                                        {stats.map((stat, i) => (
                                            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 transition-all hover:bg-white/[0.04]">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">{stat.icon}</div>
                                                    <div className="flex items-center text-[10px] font-bold text-green-500">
                                                        <ArrowUpRight className="w-3 h-3" />
                                                        {stat.change}
                                                    </div>
                                                </div>
                                                <div className="text-2xl font-black mb-1">{stat.value}</div>
                                                <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8">
                                        <h3 className="text-lg font-black mb-6">Setup Checklist</h3>
                                        <div className="space-y-6">
                                            {[
                                                { label: 'Register Account', done: true },
                                                { label: 'Email Domain Setup', done: false, time: '3m' },
                                                { label: 'ICP Profile Creation', done: false, time: '5m' },
                                                { label: 'AI Voice Selection', done: false, time: '2m' },
                                                { label: 'First Launch', done: false },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center justify-between group cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        {item.done ? (
                                                            <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                                            </div>
                                                        ) : (
                                                            <Circle className="w-5 h-5 text-gray-700 group-hover:text-blue-500 transition-colors" />
                                                        )}
                                                        <span className={`text-sm font-bold ${item.done ? 'text-gray-500 line-through' : 'text-gray-300'}`}>{item.label}</span>
                                                    </div>
                                                    {item.time && <span className="text-[10px] text-gray-600 font-black">{item.time}</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : activeTab === 'leads' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-black mb-2">Leads Explorer</h1>
                                    <p className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Enriched data from Apollo & Clearbit</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all">Import CSV</button>
                                    <button className="px-6 py-3 bg-blue-600 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">Find New Leads</button>
                                </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-white/5 bg-white/[0.02]">
                                            <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Prospect</th>
                                            <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Company</th>
                                            <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Email Status</th>
                                            <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">AI Hook</th>
                                            <th className="p-6"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {[
                                            { name: 'Sarah Chen', role: 'VP Growth', company: 'CloudScale', email: 'sarah.c@cloudscale.io', status: 'verified', hook: 'Recent Series C Funding ($45M)' },
                                            { name: 'Marcus Wright', role: 'Head of Sales', company: 'NitroFlow', email: 'marcus@nitro.com', status: 'risky', hook: 'Opening new office in London' },
                                            { name: 'Elena Rodriguez', role: 'CEO', company: 'SwiftPay', email: 'elena@swiftpay.ai', status: 'verified', hook: 'Awarded Top 50 FinTech 2024' },
                                            { name: 'James Wilson', role: 'Operations', company: 'LogiCore', email: 'j.wilson@logicore.com', status: 'verified', hook: 'Hiring 15+ new SDRs' },
                                        ].map((lead, i) => (
                                            <tr key={i} className="hover:bg-white/[0.02] transition-all group">
                                                <td className="p-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px]">
                                                            <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center text-[10px] font-bold uppercase">{lead.name.split(' ').map(n => n[0]).join('')}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-white">{lead.name}</div>
                                                            <div className="text-[10px] text-gray-500 font-bold">{lead.role}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-6">
                                                    <div className="flex items-center gap-2">
                                                        <Globe className="w-3 h-3 text-gray-600" />
                                                        <span className="text-sm font-medium text-gray-400">{lead.company}</span>
                                                    </div>
                                                </td>
                                                <td className="p-6">
                                                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${lead.status === 'verified' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}`}>
                                                        <div className={`w-1 h-1 rounded-full ${lead.status === 'verified' ? 'bg-green-500' : 'bg-amber-500'}`} />
                                                        {lead.status}
                                                    </div>
                                                </td>
                                                <td className="p-6">
                                                    <div className="flex items-center gap-2 max-w-[200px]">
                                                        <Zap className="w-3 h-3 text-blue-500 shrink-0" />
                                                        <span className="text-xs text-gray-300 italic truncate italic">{lead.hook}</span>
                                                    </div>
                                                </td>
                                                <td className="p-6 text-right">
                                                    <button className="text-gray-600 hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    ) : activeTab === 'campaigns' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-black mb-2">Campaign Drafts</h1>
                                    <p className="text-gray-500 uppercase text-[10px] font-black tracking-widest">AI Copywriter Suite - Review & Approve</p>
                                </div>
                                <button className="px-6 py-3 bg-blue-600 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">New Sequence</button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    { title: 'Series C Fintech Hook', leads: 45, status: 'Drafting', steps: 3 },
                                    { title: 'New Sales Hire Followup', leads: 12, status: 'Reviewing', steps: 4 },
                                ].map((campaign, i) => (
                                    <div key={i} className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="p-3 bg-blue-600/10 rounded-2xl border border-blue-500/20"><Mail className="w-6 h-6 text-blue-500" /></div>
                                            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black uppercase text-gray-500 tracking-widest">{campaign.status}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-black mb-1">{campaign.title}</h3>
                                            <div className="flex gap-4 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                                                <span>{campaign.leads} Leads</span>
                                                <span className="w-1 h-1 bg-white/10 rounded-full mt-1.5" />
                                                <span>{campaign.steps} Steps</span>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Step 1: Hyper-Personalized Intro</span>
                                            </div>
                                            <p className="text-xs text-gray-400 italic leading-relaxed">"Hi Sarah, I noticed CloudScale just closed their Series C. Given your role in Growth, I thought..."</p>
                                        </div>
                                        <div className="flex gap-3 pt-2">
                                            <button className="flex-grow py-3 border border-white/10 bg-white/5 rounded-xl text-xs font-bold hover:bg-white/10 transition-all">Edit Draft</button>
                                            <button className="flex-grow py-3 bg-blue-600 rounded-xl text-xs font-black uppercase tracking-widest">Approve & Send</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : activeTab === 'inbox' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-black mb-2">AI Inbox</h1>
                                    <p className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Automated Sentiment Analysis</p>
                                </div>
                                <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                                    <button className="px-4 py-2 bg-blue-600 rounded-lg text-xs font-black uppercase tracking-widest">Hot Leads</button>
                                    <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-white transition-all">Archive</button>
                                </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden">
                                {[
                                    { from: 'Sarah Chen', comment: 'This sounds interesting, do you have time tomorrow?', sentiment: 'Positive', time: '2h ago' },
                                    { from: 'Elena Rodriguez', comment: 'Please send over the pricing deck.', sentiment: 'Neutral', time: '5h ago' },
                                    { from: 'Marcus Wright', comment: 'Not at this time, but thanks for reaching out.', sentiment: 'Neutral', time: '1d ago' },
                                ].map((chat, i) => (
                                    <div key={i} className="p-6 border-b border-white/5 hover:bg-white/[0.02] transition-all flex items-center justify-between cursor-pointer group">
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-600 group-hover:text-blue-500 transition-colors"><MessageSquare className="w-6 h-6" /></div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-bold">{chat.from}</span>
                                                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${chat.sentiment === 'Positive' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-gray-500/10 text-gray-500 border border-gray-500/20'}`}>{chat.sentiment}</span>
                                                </div>
                                                <p className="text-sm text-gray-400">{chat.comment}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2">{chat.time}</div>
                                            <button className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-lg text-[10px] font-black uppercase text-blue-400 tracking-widest hover:bg-blue-600 hover:text-white transition-all">Jump In</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : activeTab === 'settings' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <h1 className="text-3xl font-black mb-2">Technical Engine</h1>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Domain Health */}
                                <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 space-y-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-black">Domain Health</h3>
                                        <ShieldCheck className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { label: 'SPF Records', status: 'Healthy' },
                                            { label: 'DKIM Signature', status: 'Healthy' },
                                            { label: 'DMARC Policy', status: 'Warning' },
                                            { label: 'Daily Volume', status: '24/100' },
                                        ].map((record, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                                <span className="text-xs font-bold text-gray-400">{record.label}</span>
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${record.status === 'Healthy' ? 'text-green-500' : record.status === 'Warning' ? 'text-amber-500' : 'text-blue-500'}`}>{record.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CRMs */}
                                <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 space-y-6">
                                    <h3 className="text-lg font-black mb-2">Integrations</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { name: 'HubSpot', desc: 'Sync leads & deals', icon: 'H', connected: true },
                                            { name: 'Salesforce', desc: 'Enterprise sync', icon: 'S', connected: false },
                                            { name: 'Slack', desc: 'Instant alerts', icon: 'S', connected: true },
                                            { name: 'Apollo', desc: 'Data enrichment', icon: 'A', connected: true },
                                        ].map((tool, i) => (
                                            <div key={i} className={`p-6 rounded-3xl border transition-all ${tool.connected ? 'bg-blue-600/10 border-blue-500/30' : 'bg-white/5 border-white/10 opacity-60'}`}>
                                                <div className="flex justify-between mb-4">
                                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-black">{tool.icon}</div>
                                                    {tool.connected && <CheckCircle className="w-4 h-4 text-blue-500" />}
                                                </div>
                                                <div className="text-sm font-black mb-1">{tool.name}</div>
                                                <div className="text-[10px] text-gray-500 font-bold leading-tight">{tool.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : activeTab === 'dashboard' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-black mb-2">My SDR Command Center</h1>
                                    <p className="text-gray-500 uppercase text-[10px] font-black tracking-widest">Active Services & Real-time Progress</p>
                                </div>
                                <div className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-xl">
                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Current Plan: </span>
                                    <span className="text-xs font-bold text-white uppercase">{selectedPlan}</span>
                                </div>
                            </div>

                            {/* User Metric Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { label: 'Work-flows Active', value: '3', icon: <Activity className="text-emerald-500" />, sub: 'Out of 5 slots' },
                                    { label: 'Credits Used', value: '450', icon: <Zap className="text-blue-500" />, sub: '/ 1,000 credits' },
                                    { label: 'Demos Scheduled', value: '12', icon: <Calendar className="text-purple-500" />, sub: 'For next 7 days' },
                                    { label: 'AI Health', value: 'Optimum', icon: <ShieldCheck className="text-amber-500" />, sub: selectedStyle + ' Persona' },
                                ].map((m, i) => (
                                    <div key={i} className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 transition-all hover:bg-white/[0.04]">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl">{m.icon}</div>
                                        </div>
                                        <div className="text-3xl font-black mb-1">{m.value}</div>
                                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{m.label}</div>
                                        <div className="text-[10px] text-blue-400 font-medium">{m.sub}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Services Active */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8">
                                        <h3 className="text-lg font-black mb-8">My Active Services</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { service: 'Lead Enrichment', status: 'Active', icon: <Search className="w-5 h-5" /> },
                                                { service: 'Email Automation', status: 'Active', icon: <Mail className="w-5 h-5" /> },
                                                { service: 'Calendar Sync', status: 'Waiting', icon: <Calendar className="w-5 h-5" /> },
                                                { service: 'CRM Integration', status: 'Setup Required', icon: <Globe className="w-5 h-5" /> },
                                            ].map((s, i) => (
                                                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-500">{s.icon}</div>
                                                    <div>
                                                        <div className="text-sm font-bold">{s.service}</div>
                                                        <div className={`text-[10px] font-black uppercase tracking-widest ${s.status === 'Active' ? 'text-green-500' : 'text-gray-500'}`}>{s.status}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Demo Status */}
                                    <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8">
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-lg font-black">My Booked Demos</h3>
                                            <button onClick={() => setActiveTab('inbox')} className="text-xs font-black text-blue-500 uppercase tracking-widest">Inbox</button>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { name: 'Sarah Miller', type: 'Platform Review', time: 'Tomorrow 2PM' },
                                            ].map((d, i) => (
                                                <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center font-bold text-blue-500">S</div>
                                                        <div>
                                                            <div className="text-sm font-bold">{d.name}</div>
                                                            <div className="text-[10px] text-gray-500">{d.type}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-[10px] font-black text-blue-400 p-2 bg-blue-600/10 rounded-lg">{d.time}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Progress */}
                                <div className="space-y-6">
                                    <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8">
                                        <h3 className="text-lg font-black mb-8 text-indigo-400">Project Deadline</h3>
                                        <div className="space-y-6">
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-end">
                                                    <div className="text-sm font-black">Launch Campaign</div>
                                                    <div className="text-[10px] font-black text-gray-500 uppercase">Feb 15</div>
                                                </div>
                                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full w-2/3 bg-indigo-500 " />
                                                </div>
                                                <div className="text-[10px] text-gray-600 font-bold">66% Complete</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 text-white">
                                        <h3 className="text-lg font-black mb-2">Need a Boost?</h3>
                                        <p className="text-white/70 text-[10px] mb-6 leading-relaxed">Upgrade to Complete Plan for unlimited lead scraping.</p>
                                        <button onClick={() => setStep(3)} className="w-full py-3 bg-white text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest">UPGRADE NOW</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center opacity-30 select-none">
                            <BarChart3 className="w-20 h-20 mb-6" />
                            <h2 className="text-4xl font-black mb-2 uppercase tracking-tighter">Under Calibration</h2>
                            <p className="max-w-xs text-sm font-bold uppercase tracking-widest">Connect your first lead list to see live stats.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
