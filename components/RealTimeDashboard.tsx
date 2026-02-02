'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, User, CheckCircle, Clock } from 'lucide-react';

interface Order {
    id: string;
    name: string;
    location: string;
    action: string;
    time: string;
    avatar: string;
}

const LOCATIONS = ['New York, US', 'London, UK', 'Berlin, DE', 'Sydney, AU', 'Tokyo, JP', 'Toronto, CA', 'Paris, FR', 'Dubai, UAE'];
const ACTIONS = ['Booked a Demo', 'Started Trial', 'Upgraded Plan', 'Qualified Lead', 'Integrated CRM'];
const NAMES = ['Alex Riv', 'Jordan S.', 'Samantha L.', 'Marcus K.', 'Elena P.', 'David W.', 'Chris M.', 'Sarah K.'];

export default function RealTimeDashboard() {
    const [orders, setOrders] = useState<Order[]>([]);

    const generateOrder = useCallback(() => {
        return {
            id: Math.random().toString(36).substr(2, 9),
            name: NAMES[Math.floor(Math.random() * NAMES.length)],
            location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
            action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
            time: 'Just now',
            avatar: `https://i.pravatar.cc/150?u=${Math.random()}`,
        };
    }, []);

    useEffect(() => {
        // Initial batch
        setOrders(Array.from({ length: 5 }, generateOrder));

        const interval = setInterval(() => {
            setOrders((prev) => [generateOrder(), ...prev.slice(0, 4)]);
        }, 4000);

        return () => clearInterval(interval);
    }, [generateOrder]);

    return (
        <div className="relative group max-w-sm mx-auto">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-white uppercase tracking-widest">Live Activity Feed</span>
                    </div>
                    <Globe className="w-4 h-4 text-blue-400" />
                </div>

                <div className="p-4 space-y-4">
                    <AnimatePresence mode="popLayout">
                        {orders.map((order) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                <div className="relative">
                                    <img
                                        src={order.avatar}
                                        alt={order.name}
                                        className="w-10 h-10 rounded-full border border-white/20"
                                    />
                                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border border-black">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5">
                                        <p className="text-sm font-bold text-white truncate">{order.name}</p>
                                        <span className="text-[10px] text-gray-500 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {order.time}
                                        </span>
                                    </div>
                                    <p className="text-xs text-blue-400 font-medium">{order.action}</p>
                                    <p className="text-[10px] text-gray-500 mt-1">{order.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Floating elements to give it a "Dashboard" feel */}
                <div className="p-4 bg-blue-600/5 mt-2 border-t border-white/5">
                    <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium">
                        <span>Total Success Events</span>
                        <span className="text-white font-bold">1,248</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '75%' }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="bg-blue-500 h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
