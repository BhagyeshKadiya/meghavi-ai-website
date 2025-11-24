import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-neonCyan/30">
            <Navbar />

            <main className="pt-20">
                <section className="py-24 relative">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neonPurple/10 rounded-full blur-[128px]" />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-20">
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                                Insights & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Intelligence</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Exploring the frontier of autonomous agents, swarm intelligence, and industrial automation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-neonCyan/50 transition-all duration-300"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-neonCyan border border-neonCyan/30">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                            <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 group-hover:text-neonCyan transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center text-sm font-bold text-white hover:text-neonCyan transition-colors"
                                        >
                                            Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
