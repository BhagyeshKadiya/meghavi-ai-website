import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ExploreSolutions from './components/ExploreSolutions';
import Contact from './components/Contact';
import AutonomousAgents from './components/solutions/AutonomousAgents';
import EnterpriseRAG from './components/solutions/EnterpriseRAG';
import SwarmIntelligence from './components/solutions/SwarmIntelligence';
import VoiceInterfaces from './components/solutions/VoiceInterfaces';
import Manufacturing from './components/industries/Manufacturing';
import Legal from './components/industries/Legal';
import Finance from './components/industries/Finance';
import Solar from './components/industries/Solar';
import RealEstate from './components/industries/RealEstate';
import Automotive from './components/industries/Automotive';
import EnterpriseSwarm from './components/industries/EnterpriseSwarm';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<ExploreSolutions />} />
        <Route path="/solutions/autonomous-agents" element={<AutonomousAgents />} />
        <Route path="/solutions/enterprise-rag" element={<EnterpriseRAG />} />
        <Route path="/solutions/swarm-intelligence" element={<SwarmIntelligence />} />
        <Route path="/solutions/voice-interfaces" element={<VoiceInterfaces />} />

        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/legal" element={<Legal />} />
        <Route path="/industries/finance" element={<Finance />} />
        <Route path="/industries/solar" element={<Solar />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/enterprise-swarm" element={<EnterpriseSwarm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
