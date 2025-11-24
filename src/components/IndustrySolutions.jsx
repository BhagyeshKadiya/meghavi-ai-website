import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Scale, Calculator, Sun, Building, Car, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustrySolutions = () => {
    const [activeIndustry, setActiveIndustry] = useState('manufacturing');

    const solutions = {
        manufacturing: {
            id: 'manufacturing',
            category: 'RAG Knowledge Systems',
            icon: <Factory className="w-6 h-6" />,
            title: "Manufacturing",
            agentName: "Factory Ops Agent",
            description: "Trained on SOPs, safety manuals, and maintenance logs for instant floor-staff answers.",
            link: "/industries/manufacturing",
            gradient: "from-blue-500 to-cyan-400"
        },
        legal: {
            id: 'legal',
            category: 'RAG Knowledge Systems',
            icon: <Scale className="w-6 h-6" />,
            title: "Legal & Advocates",
            agentName: "Case Law RAG",
            description: "Instant retrieval of case precedents, contract analysis, and draft automation.",
            link: "/industries/legal",
            gradient: "from-indigo-500 to-purple-500"
        },
        finance: {
            id: 'finance',
            category: 'RAG Knowledge Systems',
            icon: <Calculator className="w-6 h-6" />,
            title: "CA & CS Firms",
            agentName: "Compliance Bot",
            description: "Automate answers for tax laws, GST filings, and corporate compliance checklists.",
            link: "/industries/finance",
            gradient: "from-emerald-500 to-green-400"
        },
        solar: {
            id: 'solar',
            category: 'Agentic Lead Qualification',
            icon: <Sun className="w-6 h-6" />,
            title: "Solar EPC",
            agentName: "Solar Qualify Agent",
            description: "Collects electricity bill data, calculates roof potential, and books site visits.",
            link: "/industries/solar",
            gradient: "from-orange-500 to-yellow-400"
        },
        realestate: {
            id: 'realestate',
            category: 'Agentic Lead Qualification',
            icon: <Building className="w-6 h-6" />,
            title: "Real Estate",
            agentName: "Property Vision Agent",
            description: "Filters leads by budget/location, sends brochures via WhatsApp, and schedules site visits 24/7.",
            link: "/industries/real-estate",
            gradient: "from-rose-500 to-pink-500"
        },
        automotive: {
            id: 'automotive',
            category: 'Agentic Lead Qualification',
            icon: <Car className="w-6 h-6" />,
            title: "Automotive",
            agentName: "Test Drive Agent",
            description: "Handles inquiries, checks financing eligibility, and books test drive slots automatically.",
            link: "/industries/automotive",
            gradient: "from-red-600 to-red-400"
        },
        enterprise: {
            id: 'enterprise',
            category: 'Multi-Agent Orchestration',
            icon: <Network className="w-6 h-6" />,
            title: "General Enterprise",
            agentName: "The Swarm",
            description: "A master agent delegating tasks to sub-agents (e.g., one researches, one drafts emails, one updates CRM).",
            link: "/industries/enterprise-swarm",
            gradient: "from-violet-600 to-fuchsia-400"
        }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Ecosystem</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Specialized AI agents designed for high-value industry verticals.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side: Vertical List */}
                    <div className="lg:col-span-4 space-y-2">
                        {Object.values(solutions).map((solution) => (
                            <button
                                key={solution.id}
                                onClick={() => setActiveIndustry(solution.id)}
                                className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 border ${activeIndustry === solution.id
                                        ? 'bg-white/10 border-neonCyan/50 text-white shadow-[0_0_20px_rgba(0,255,255,0.1)]'
                                        : 'bg-transparent border-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200'
                                    }`}
                            >
                                <div className={`mr-4 ${activeIndustry === solution.id ? 'text-neonCyan' : 'text-gray-500'}`}>
                                    {solution.icon}
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-lg">{solution.title}</div>
                                    <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{solution.category}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Side: Dynamic Solution Card */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndustry}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center"
                            >
                                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${solutions[activeIndustry].gradient} opacity-10 blur-[100px] rounded-full pointer-events-none`} />

                                <div className="relative z-10">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-mono mb-6 text-gray-300">
                                        {solutions[activeIndustry].category}
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                        {solutions[activeIndustry].agentName}
                                    </h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-neonCyan to-neonPurple rounded-full mb-8" />

                                    <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                                        {solutions[activeIndustry].description}
                                    </p>

                                    <Link
                                        to={solutions[activeIndustry].link}
                                        className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neonCyan hover:text-black transition-all duration-300 group"
                                    >
                                        Deploy {solutions[activeIndustry].title.split(' ')[0]} Bot
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default IndustrySolutions;
