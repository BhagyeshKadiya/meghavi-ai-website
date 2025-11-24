import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, Network, Mic, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ExploreSolutions = () => {
    const solutions = [
        {
            title: "Autonomous Agents",
            description: "Deploy intelligent agents that can plan, execute, and adapt to complex tasks autonomously.",
            icon: <Bot className="w-12 h-12 text-neonCyan" />,
            features: ["Task Planning", "Self-Correction", "Multi-Step Reasoning"],
            link: "/solutions/autonomous-agents"
        },
        {
            title: "Enterprise RAG",
            description: "Connect your proprietary data to LLMs for accurate, hallucination-free insights.",
            icon: <Database className="w-12 h-12 text-neonPurple" />,
            features: ["Vector Search", "Document Parsing", "Real-time Updates"],
            link: "/solutions/enterprise-rag"
        },
        {
            title: "Swarm Intelligence",
            description: "Orchestrate multiple specialized agents to solve problems that require diverse expertise.",
            icon: <Network className="w-12 h-12 text-neonCyan" />,
            features: ["Collaborative Solving", "Dynamic Role Assignment", "Scalable Architecture"],
            link: "/solutions/swarm-intelligence"
        },
        {
            title: "Voice Interfaces",
            description: "Natural language voice interactions for customer support and hands-free operations.",
            icon: <Mic className="w-12 h-12 text-neonPurple" />,
            features: ["Real-time Latency", "Emotion Detection", "Multi-lingual Support"],
            link: "/solutions/voice-interfaces"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-white selection:bg-neonCyan/30">
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonCyan/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto mb-20"
                        >
                            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                                Future-Proof <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Solutions</span>
                            </h1>
                            <p className="text-xl text-gray-400">
                                Discover how our agentic architectures can transform your business operations.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-neonCyan/5 to-neonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="mb-6 p-4 bg-black/50 rounded-2xl w-fit border border-white/10 group-hover:border-neonCyan/50 transition-colors">
                                            {solution.icon}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                                        <p className="text-gray-400 mb-6">{solution.description}</p>

                                        <ul className="space-y-2 mb-8">
                                            {solution.features.map((feature, i) => (
                                                <li key={i} className="flex items-center text-sm text-gray-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mr-3" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            to={solution.link}
                                            className="flex items-center text-neonCyan font-semibold group-hover:translate-x-2 transition-transform duration-300"
                                        >
                                            Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 border-t border-white/10">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                            Ready to deploy your digital workforce?
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                        >
                            Start Building Now
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ExploreSolutions;
