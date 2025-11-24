import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, Network, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoServices = () => {
    const services = [
        {
            title: "Agentic AI Development",
            description: "Autonomous agents using CrewAI & LangGraph to automate complex workflows.",
            icon: <Bot className="w-8 h-8 text-neonCyan" />,
            colSpan: "md:col-span-2",
            bg: "bg-white/5",
            link: "/solutions/autonomous-agents"
        },
        {
            title: "RAG Knowledge Bots",
            description: "Hallucination-proof chatbots trained on your proprietary data.",
            icon: <Database className="w-8 h-8 text-neonPurple" />,
            colSpan: "md:col-span-1",
            bg: "bg-white/5",
            link: "/solutions/enterprise-rag"
        },
        {
            title: "Multi-Agent Orchestration",
            description: "Coordinated swarms of agents working together to solve problems.",
            icon: <Network className="w-8 h-8 text-neonCyan" />,
            colSpan: "md:col-span-1",
            bg: "bg-white/5",
            link: "/solutions/swarm-intelligence"
        },
        {
            title: "Voice AI Agents",
            description: "Human-like voice assistants for customer support and sales.",
            icon: <Mic className="w-8 h-8 text-neonPurple" />,
            colSpan: "md:col-span-2",
            bg: "bg-white/5",
            link: "/solutions/voice-interfaces"
        }
    ];

    return (
        <section id="services" className="py-20 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Core <span className="text-neonCyan">Capabilities</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Empowering businesses with cutting-edge AI solutions tailored for scalability and performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${service.colSpan}`}
                        >
                            <Link
                                to={service.link}
                                className={`block h-full p-8 rounded-3xl border border-white/10 hover:border-neonCyan/50 transition-all duration-300 group relative overflow-hidden ${service.bg} backdrop-blur-sm`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-neonCyan/5 to-neonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoServices;
