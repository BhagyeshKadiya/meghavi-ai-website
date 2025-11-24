import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-neonCyan/30">
            <Navbar />

            <main className="pt-20">
                <section className="relative py-20">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                                Let's <span className="text-neonCyan">Connect</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Ready to transform your business with AI? Our team of architects is ready to help you build the future.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-8"
                            >
                                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-neonCyan/10 rounded-xl text-neonCyan">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Email Us</p>
                                                <a href="mailto:meghaviai@zohomail.in" className="text-lg font-semibold hover:text-neonCyan transition-colors">
                                                    meghaviai@zohomail.in
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-neonPurple/10 rounded-xl text-neonPurple">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Global HQ</p>
                                                <p className="text-lg font-semibold">
                                                    Anand, Gujarat
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-white/10 rounded-xl text-white">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Call Us</p>
                                                <p className="text-lg font-semibold">
                                                    +91 90231 00608
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-neonCyan/10 to-neonPurple/10">
                                    <h3 className="text-xl font-bold mb-2">Join the Revolution</h3>
                                    <p className="text-gray-400">
                                        We are always looking for talent. Check out our careers page for open positions.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                            >
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan outline-none transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan outline-none transition-all"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan outline-none transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Message</label>
                                        <textarea
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan outline-none transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-neonCyan to-neonPurple text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                    >
                                        Send Message <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
