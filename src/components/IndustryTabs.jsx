import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Sun, Building2, Rocket, Brain, Dna, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustryTabs = () => {
    const [activeTab, setActiveTab] = useState('manufacturing');

    const industries = {
        manufacturing: {
            icon: <Factory className="w-6 h-6" />,
            title: "Manufacturing",
            headline: "SOP & Safety RAG Chatbots",
            description: "Instant access to Standard Operating Procedures and safety protocols. Reduce downtime and ensure compliance with AI-powered knowledge retrieval.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
            link: "/industries/manufacturing" // Placeholder if page existed
        },
        space: {
            icon: <Rocket className="w-6 h-6" />,
            title: "Space Mining",
            headline: "Autonomous Prospecting Drones",
            description: "AI swarms for asteroid resource extraction and hazard avoidance in zero-gravity environments.",
            image: "/images/space-mining.png",
            link: "/industries/space-mining"
        },
        neural: {
            icon: <Brain className="w-6 h-6" />,
            title: "Neural Interfaces",
            headline: "Direct Brain-Computer Communication",
            description: "Decode neural signals for prosthetic control and silent speech interfaces using deep learning.",
            image: "/images/neural-interface.png",
            link: "/industries/neural-interfaces"
        },
        bio: {
            icon: <Dna className="w-6 h-6" />,
            title: "Synthetic Biology",
            headline: "Generative Genetic Engineering",
            description: "Optimize DNA sequences and protein folding for medical and agricultural breakthroughs.",
            image: "/images/synthetic-biology.png",
            link: "/industries/synthetic-biology"
        },
        finance: {
            icon: <Cpu className="w-6 h-6" />,
            title: "Quantum Finance",
            headline: "High-Frequency Algorithmic Trading",
            description: "Quantum-inspired algorithms for risk modeling and millisecond-latency market execution.",
            image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=2064", // Fallback image
            link: "/industries/quantum-finance"
        }
    };

    return (
        <section id="industries" className="py-20 bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Industry <span className="text-neonPurple">Solutions</span>
                    </h2>
                    <p className="text-gray-400">Tailored AI agents for specific industry needs.</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Tabs Navigation */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4">
                        {Object.entries(industries).map(([key, data]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${activeTab === key
                                    ? 'bg-white/10 border-neonPurple text-white'
                                    : 'bg-transparent border-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200'
                                    }`}
                            >
                                <div className={`${activeTab === key ? 'text-neonPurple' : ''}`}>
                                    {data.icon}
                                </div>
                                <span className="font-semibold text-lg">{data.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-2/3 bg-white/5 rounded-3xl p-1 border border-white/10 overflow-hidden min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-full rounded-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0">
                                    <img
                                        src={industries[activeTab].image}
                                        alt={industries[activeTab].title}
                                        className="w-full h-full object-cover opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                                </div>

                                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                        {industries[activeTab].headline}
                                    </h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {industries[activeTab].description}
                                    </p>
                                    <Link
                                        to={industries[activeTab].link || "/contact"}
                                        className="mt-8 inline-block px-6 py-3 bg-neonPurple text-white rounded-lg font-semibold hover:bg-neonPurple/80 transition-colors"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryTabs;
