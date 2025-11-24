import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Navbar from './Navbar';
import Footer from './Footer';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen bg-background text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link to="/blog" className="text-neonCyan hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-white selection:bg-neonCyan/30">
            <Navbar />

            <main className="pt-20">
                <article className="relative py-20">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                    {/* Header */}
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
                        <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                        </Link>

                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-neonCyan/10 text-neonCyan border border-neonCyan/20 text-sm font-mono mb-6">
                            {post.category}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm border-b border-white/10 pb-8">
                            <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</span>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-3xl overflow-hidden aspect-video border border-white/10"
                        >
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div
                            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-neonCyan prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPost;
