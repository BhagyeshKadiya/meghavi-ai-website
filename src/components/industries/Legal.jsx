import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, ArrowRight, Gavel } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Legal = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-indigo-500/30">
            <Navbar />

            <main className="pt-20">
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[128px]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 mb-6 border border-indigo-500/20">
                                <Scale className="w-4 h-4 mr-2" />
                                <span>Legal Tech RAG</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                                Case Law <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white">RAG Agent</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                Instant retrieval of case precedents, contract analysis, and draft automation. Your AI paralegal that never sleeps.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { title: "Precedent Search", desc: "Find relevant case law across millions of documents in seconds." },
                                { title: "Contract Review", desc: "Auto-highlight risks and clauses in NDAs and agreements." },
                                { title: "Draft Automation", desc: "Generate first drafts of legal documents based on templates." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent" />
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Firm Capabilities</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Reduce Research Time by 90%",
                                            "Standardize Contract Language",
                                            "Secure Client Data Processing",
                                            "24/7 Legal Query Assistance"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <Gavel className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 bg-indigo-500 text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors">
                                        Deploy Legal Bot <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2070"
                                        alt="Legal AI Technology"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-indigo-400 font-mono text-sm bg-black/70 backdrop-blur-sm px-3 py-2 rounded border border-indigo-500/30">
                                            Juris_Prudence_AI
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

export default Legal;
