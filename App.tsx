import React from 'react';
import { ShieldIcon, WifiOffIcon, SmartphoneIcon, EyeOffIcon, PlayStoreIcon } from './components/Icons';
import CloudDemo from './components/CloudDemo';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/60 hover:shadow-[0_4px_20px_rgba(56,189,248,0.1)] group">
    <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-slate-100">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600/20 p-1.5 rounded-lg">
                <WifiOffIcon className="w-5 h-5 text-blue-500" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">No Net GPT</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#demo" className="hover:text-white transition-colors">Live Demo</a>
          </div>
          <button className="text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg border border-slate-700 transition-colors">
            Get App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-semibold tracking-wide uppercase mb-8 hover:bg-slate-800 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          v2.0 Now Available on Android
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6">
          Unplug from the Cloud.<br />
          <span className="text-blue-500">Unleash Your AI.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The 100% private, offline AI assistant. Chat, generate images, and code without internet. 
          Zero tracking. No accounts. Your data stays on your phone.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-all hover:translate-y-[-2px] shadow-lg shadow-blue-900/20 w-full sm:w-auto justify-center">
            <PlayStoreIcon className="w-6 h-6" />
            <span>Get on Google Play</span>
          </button>
          <button className="px-8 py-4 rounded-lg font-bold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all w-full sm:w-auto hover:border-slate-600">
            View Source Code
          </button>
        </div>
        
        <div className="mt-12 text-sm text-slate-500 flex items-center justify-center gap-6">
             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-500 rounded-full"></div> No Ads</span>
             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-500 rounded-full"></div> No Subscription</span>
             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-500 rounded-full"></div> Open Source</span>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<WifiOffIcon className="w-8 h-8" />}
              title="100% Offline Capable"
              description="Full functionality without signal. Chat, analyze files, and generate images entirely on your device's hardware."
            />
            <FeatureCard 
              icon={<SmartphoneIcon className="w-8 h-8" />}
              title="Zero Data Leaks"
              description="We physically cannot sell your data because we never see it. Everything stays local in your encrypted storage."
            />
            <FeatureCard 
              icon={<ShieldIcon className="w-8 h-8" />}
              title="Hybrid Cloud Power"
              description="Need complex web dev help or GPT-4 reasoning? Toggle 'Cloud Mode' on instantly—but only when YOU choose."
            />
             <FeatureCard 
              icon={<EyeOffIcon className="w-8 h-8" />}
              title="Rebelliously Private"
              description="No accounts. No login. No 'personalized' ad tracking. Just a raw, powerful tool that serves you, not Big Tech."
            />
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-6">
             <WifiOffIcon className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Try the "Hybrid Switch"</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Experience the "Cloud Mode" right here on the web. In the app, you toggle this ON for web-access tasks, 
            and toggle it OFF for complete military-grade isolation.
          </p>
          
          <CloudDemo />
        </div>
      </section>

      {/* Privacy Promise */}
      <section id="privacy" className="py-24 border-t border-slate-800 relative overflow-hidden bg-gradient-to-b from-[#020617] to-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <ShieldIcon className="w-16 h-16 text-slate-200 mx-auto mb-8 p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Privacy Promise</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            We built No Net GPT because we were tired of being the product. 
            <br/><br/>
            Most AI apps send every keystroke to a server. We don't. 
            <span className="text-blue-400 font-semibold block mt-2">
                This is a tool for the paranoid, the prudent, and the free.
            </span>
          </p>
          <div className="flex justify-center gap-4 text-sm">
             <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400">Read Privacy Policy</a>
             <span className="text-slate-600">|</span>
             <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400">Audit the Code</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-[#020617]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <WifiOffIcon className="w-5 h-5 text-slate-600" />
            <span className="font-bold text-slate-500">No Net GPT</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} No Net GPT. No rights reserved (MIT License).
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;