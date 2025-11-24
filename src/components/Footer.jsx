import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-display font-bold text-white tracking-wider mb-4 block">
                            MEGHAVI <span className="text-neonCyan">AI</span>
                        </a>
                        <p className="text-gray-400 max-w-md mb-6">
                            Architecting the future of work with autonomous digital agents and intelligent systems.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Global Presence</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Anand, Gujarat (HQ)</li>
                            <li>USA</li>
                            <li>Europe</li>
                            <li>Singapore</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-neonCyan transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-neonCyan transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-neonCyan transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Meghavi AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
