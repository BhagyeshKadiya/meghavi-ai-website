import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Cpu, ArrowRight, LineChart } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const QuantumFinance = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-yellow-500/30">
            <Navbar />

            <main className="pt-20">
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[128px]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 mb-6 border border-yellow-500/20">
                                <Cpu className="w-4 h-4 mr-2" />
                                <span>FinTech AI</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                                Quantum <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">Finance</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                Leverage quantum-inspired algorithms for high-frequency trading, risk modeling, and portfolio optimization.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {[
                                { title: "Algorithmic Trading", desc: "Microsecond execution with predictive market models." },
                                { title: "Risk Analysis", desc: "Monte Carlo simulations at quantum speeds." },
                                { title: "Fraud Detection", desc: "Pattern recognition across billions of transactions." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-colors"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent" />
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Financial Solutions</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Portfolio Rebalancing",
                                            "Crypto Market Sentiment Analysis",
                                            "Credit Scoring Models",
                                            "Automated Compliance Checks"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <LineChart className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-white transition-colors">
                                        Optimize Assets <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 group">
                                    {/* Placeholder for Quantum Finance since generation failed */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-black" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Cpu className="w-24 h-24 text-yellow-500/20" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-yellow-400 font-mono text-sm bg-black/50 px-2 py-1 rounded border border-yellow-500/30">
                                            Quantum_Ledger_Live
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

export default QuantumFinance;
