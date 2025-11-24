import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Microscope, ArrowRight, FlaskConical } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const SyntheticBiology = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-green-500/30">
            <Navbar />

            <main className="pt-20">
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full blur-[128px]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 mb-6 border border-green-500/20">
                                <Dna className="w-4 h-4 mr-2" />
                                <span>Bio-Engineering</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                                Synthetic <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Biology</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                Accelerate discovery with AI-driven protein folding, genetic sequence optimization, and automated lab workflows.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { title: "Protein Folding", desc: "Predict 3D structures with AlphaFold-class accuracy." },
                                { title: "Gene Editing", desc: "CRISPR target identification and off-target prediction." },
                                { title: "Lab Automation", desc: "Robotic control systems for high-throughput screening." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent" />
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Research Areas</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Novel Drug Discovery",
                                            "Bio-fuel Optimization",
                                            "Personalized Medicine",
                                            "Agricultural Yield Enhancement"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <FlaskConical className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-white transition-colors">
                                        Start Discovery <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 group">
                                    <img
                                        src="/images/synthetic-biology.png"
                                        alt="DNA Visualization"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-green-400 font-mono text-sm bg-black/50 px-2 py-1 rounded border border-green-500/30">
                                            Helix_Sequence_Optimized
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

export default SyntheticBiology;
