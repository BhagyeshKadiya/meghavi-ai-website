import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, ArrowRight, Calendar } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Solar = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-orange-500/30">
            <Navbar />

            <main className="pt-20">
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[128px]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 mb-6 border border-orange-500/20">
                                <Sun className="w-4 h-4 mr-2" />
                                <span>Solar EPC Growth</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                                Solar Qualify <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">Agent</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                Automate your sales funnel. Collect electricity bills, calculate roof potential, and book site visits 24/7.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { title: "Bill Analysis", desc: "Extracts consumption data from uploaded electricity bills." },
                                { title: "Roof Potential", desc: "Estimates generation capacity based on location." },
                                { title: "Auto-Scheduling", desc: "Books site visits directly into your sales team's calendar." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent" />
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Sales Acceleration</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "24/7 Lead Capture & Qualification",
                                            "Instant Savings Estimates",
                                            "WhatsApp Integration",
                                            "Zero Lead Leakage"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <Zap className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors">
                                        Deploy Solar Agent <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2070"
                                        alt="Solar Energy AI"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-orange-400 font-mono text-sm bg-black/70 backdrop-blur-sm px-3 py-2 rounded border border-orange-500/30">
                                            PV_Yield_Max
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

export default Solar;
