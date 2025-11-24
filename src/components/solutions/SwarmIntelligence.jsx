import React from 'react';
import { motion } from 'framer-motion';
import { Network, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const SwarmIntelligence = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-neonCyan/30">
            <Navbar />

            <main className="pt-20">
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neonCyan/10 rounded-full blur-[128px]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-neonCyan/10 text-neonCyan mb-6 border border-neonCyan/20">
                                <Network className="w-4 h-4 mr-2" />
                                <span>Multi-Agent Systems</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                                Swarm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Intelligence</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                Orchestrate teams of specialized AI agents that collaborate, debate, and solve complex problems better than any single model could.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { title: "Specialization", desc: "Assign distinct roles (Researcher, Writer, Editor) to different agents." },
                                { title: "Collaboration", desc: "Agents share context and hand off tasks seamlessly." },
                                { title: "Consensus", desc: "Implement voting or debate mechanisms for higher accuracy." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neonCyan/50 transition-colors"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-neonCyan/5 to-neonPurple/5" />
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Applications</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Complex Software Development Pipelines",
                                            "Financial Market Analysis & Trading",
                                            "Legal Case Research & Strategy",
                                            "Creative Content Production Studios"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle className="w-6 h-6 text-neonCyan mr-3 flex-shrink-0" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-neonCyan to-neonPurple text-white font-bold rounded-full hover:opacity-90 transition-opacity">
                                        Orchestrate Your Swarm <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 group">
                                    <img
                                        src="/images/swarm-intelligence.png"
                                        alt="Multi-Agent Interaction Graph"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-neonCyan font-mono text-sm bg-black/50 px-2 py-1 rounded border border-neonCyan/30">
                                            Swarm_Network_Graph
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SwarmIntelligence;
