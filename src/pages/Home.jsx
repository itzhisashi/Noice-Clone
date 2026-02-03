import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, Users, Activity } from 'lucide-react';



export default function Home() {
    return (
        <div className="relative overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24" style={{ backgroundImage: "linear-gradient(rgba(225,225,225,0.75), rgba(225,225,225,0.75)), url('/file.webp')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", }}>
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-black"
                    >
                        AI-Powered Smart Healthcare
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto">
                        Book appointments, check real-time queues, and manage your health with our intelligent hospital processing system.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link to="/register" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition">
                            Get Registered
                        </Link>
                        <Link to="/booking" className="bg-blue-800 bg-opacity-30 border border-white/30 backdrop-blur px-8 py-3 rounded-full font-bold hover:bg-opacity-40 transition">
                            Book Check-up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<CalendarCheck className="h-8 w-8 text-blue-500" />}
                        title="Smart Scheduling"
                        desc="AI-optimized booking slots that reduce waiting time."
                    />
                    <FeatureCard
                        icon={<Users className="h-8 w-8 text-indigo-500" />}
                        title="Live Queue Tracking"
                        desc="Track your token status in real-time from anywhere."
                    />
                    <FeatureCard
                        icon={<Activity className="h-8 w-8 text-emerald-500" />}
                        title="AI Health Assistant"
                        desc="Multilingual support for symptoms triage and navigation."
                    />
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
            <p className="text-slate-600">{desc}</p>
        </div>
    );
}
