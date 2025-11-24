import React from 'react';
import { motion } from 'framer-motion';

const TechStackMarquee = () => {
    const technologies = [
        "Python", "Gemini 3.0", "LlamaIndex", "Docker", "AWS", "n8n",
        "LangChain", "React", "TensorFlow", "Kubernetes", "FastAPI"
    ];

    return (
        <section className="py-10 bg-background border-y border-white/5 overflow-hidden">
            <div className="flex relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-2xl font-display font-bold text-gray-500 hover:text-neonCyan transition-colors cursor-default">
                                {tech}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStackMarquee;
