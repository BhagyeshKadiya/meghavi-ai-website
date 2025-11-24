import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Globe, Cpu, Brain, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-neonCyan/30">
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neonCyan/10 rounded-full blur-[128px]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neonPurple/10 rounded-full blur-[128px]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neonCyan mb-8">
                                <Rocket className="w-4 h-4 mr-2" />
                                <span>Architecting the Future</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
                                We Build the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Intelligence Layer</span>
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed mb-12">
                                Meghavi AI is not just a software company. We are a collective of engineers, researchers, and futurists dedicated to automating the world's most complex workflows through autonomous agents and swarm intelligence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-white/5 border-y border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-6">
                                    <Target className="w-8 h-8 text-neonCyan mr-4" />
                                    <h2 className="text-3xl font-bold">Our Mission</h2>
                                </div>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    To liberate human potential by delegating repetitive, cognitive, and operational tasks to intelligent AI agents. We believe humans should focus on creativity and strategy, while AI handles the execution.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center mb-6">
                                    <Globe className="w-8 h-8 text-neonPurple mr-4" />
                                    <h2 className="text-3xl font-bold">Our Vision</h2>
                                </div>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    A world where every business, from a local solar installer to a global enterprise, runs on a self-optimizing "Operating System" of interconnected AI agents—a true Swarm Intelligence.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Values / DNA */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">The Meghavi DNA</h2>
                            <p className="text-gray-400">What makes our intelligence different.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: <Cpu />, title: "First Principles Engineering", desc: "We don't just wrap APIs. We build custom architectures optimized for specific industrial use cases." },
                                { icon: <Brain />, title: "Autonomous by Design", desc: "Our agents are designed to act, not just chat. They have agency, tools, and the permission to execute." },
                                { icon: <Users />, title: "Human-Centric AI", desc: "We build AI that amplifies human capability, ensuring transparency, control, and ethical alignment." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-neonCyan mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neonPurple/10" />
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to shape the future?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Join the revolution. Whether you're looking to deploy agents or build them with us.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neonCyan hover:text-black transition-all duration-300 flex items-center justify-center">
                                Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link to="/blog" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                                Read Our Insights
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
