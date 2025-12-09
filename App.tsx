import React, { useState, useEffect } from 'react';
import { ShieldIcon, WifiOffIcon, SmartphoneIcon, EyeOffIcon, PlayStoreIcon, CloudIcon } from './components/Icons';
import CloudDemo from './components/CloudDemo';

// --- Constants ---
const GITHUB_URL = "https://github.com/nonetgpt/nonetgptweb";

// --- Types ---
type ViewState = 'home' | 'privacy' | 'terms' | 'contact';

// --- Components ---

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] group h-full">
    <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-slate-100">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

// --- Pages ---

const PrivacyPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-20 animate-fade-in">
    <div className="bg-slate-800/20 border border-slate-700 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-8">
        <ShieldIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
      </div>
      
      <div className="space-y-8 text-slate-300 leading-relaxed">
        <p className="text-sm text-slate-500 border-b border-slate-700 pb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-blue-500">1.</span> Zero Data Collection
          </h2>
          <p>No Net GPT is designed with a "Privacy First" architecture. We do not collect, store, or transmit your personal data, chat logs, or files to our servers. All processing for the "Offline Mode" happens locally on your Android device.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-blue-500">2.</span> Cloud Mode (Hybrid Intelligence)
          </h2>
          <p>If and only if you explicitly enable "Cloud Mode" or "Hybrid Switch" within the app:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-400 marker:text-blue-500">
            <li>Your specific prompt and necessary context are sent securely to the Google Gemini API.</li>
            <li>This data is transient and is used solely to generate the response.</li>
            <li>We do not maintain a database of your cloud interactions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-blue-500">3.</span> Local Storage
          </h2>
          <p>All chats, generated images, and analysis results are stored in your device's internal secure storage. You have full control to export or delete this data at any time.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-blue-500">4.</span> Third-Party Services
          </h2>
          <p>The app interacts with Google Play Services for updates and license verification. Please refer to Google's privacy policy for these underlying system services.</p>
        </section>
      </div>
    </div>
  </div>
);

const TermsPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-20 animate-fade-in">
    <div className="bg-slate-800/20 border border-slate-700 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
      <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Terms of Service</h1>
      
      <div className="space-y-8 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
          <p>By downloading and using No Net GPT ("the App"), you agree to be bound by these Terms of Service. If you do not agree, do not use the App.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. "As Is" Software</h2>
          <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the AI models, both offline and online.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. User Responsibility</h2>
          <p>You are solely responsible for the content you generate using the App. You agree not to use the App to generate illegal, harmful, or abusive content. We reserve the right to disable Cloud Mode access for users violating API usage policies.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Hybrid Features</h2>
          <p>Cloud Mode features rely on third-party APIs (Google Gemini). Availability of these features is subject to the uptime and quotas of these providers.</p>
        </section>
      </div>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    
    // Simulate API call delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 animate-fade-in">
      <div className="bg-slate-800/20 border border-slate-700 rounded-2xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-400">Have a question or found a bug? We'd love to hear from you.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-8 text-center animate-fade-in flex flex-col items-center justify-center min-h-[300px]">
             <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
             <p className="text-slate-300">Thank you for reaching out. We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all transform active:scale-[0.99] flex justify-center items-center gap-2 shadow-lg shadow-blue-900/20"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 flex flex-col">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={() => setCurrentView('home')} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <WifiOffIcon className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tight text-white">No Net GPT</span>
          </button>
          <div className="flex gap-4 sm:gap-6">
            <button onClick={() => setCurrentView('home')} className={`text-sm font-semibold transition-colors ${currentView === 'home' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
              Home
            </button>
            <button onClick={() => setCurrentView('contact')} className={`text-sm font-semibold transition-colors ${currentView === 'contact' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-16">
        {currentView === 'home' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <header className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Now Available on Android
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 glitch-text cursor-default">
                Unplug from the Cloud.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Unleash Your AI.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                The 100% private, offline AI assistant that keeps your data on your phone. 
                No tracking, no accounts, no spying. Switch to cloud power only when you choose.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10 w-full sm:w-auto justify-center">
                  <PlayStoreIcon className="w-6 h-6" />
                  <span>Get on Google Play</span>
                </button>
                <a 
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg font-bold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  View Source Code
                </a>
              </div>
            </header>

            {/* Features Grid */}
            <section className="py-20 bg-slate-900/20 border-y border-slate-800/50">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <FeatureCard 
                    icon={<WifiOffIcon className="w-8 h-8" />}
                    title="100% Offline"
                    description="Chat, analyze files, and generate code without an internet connection. Your AI works where you do."
                  />
                  <FeatureCard 
                    icon={<SmartphoneIcon className="w-8 h-8" />}
                    title="On-Device Data"
                    description="Your conversations and files never leave your phone. Zero tracking, zero cloud storage."
                  />
                  <FeatureCard 
                    icon={<ShieldIcon className="w-8 h-8" />}
                    title="Hybrid Power"
                    description="Need more brainpower? Switch to Cloud AI (like GPT-4) instantly, but only when you explicitly allow it."
                  />
                   <FeatureCard 
                    icon={<EyeOffIcon className="w-8 h-8" />}
                    title="No Spying"
                    description="No accounts to create. No ads to watch. No corporate surveillance. Just you and your intelligence."
                  />
                </div>
              </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="py-24 px-4 relative">
              <div className="absolute inset-0 bg-blue-600/5 skew-y-3 transform origin-bottom-right pointer-events-none"></div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Try the "Hybrid Switch"</h2>
                <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                  Experience the "Cloud Mode" right here. In the app, you toggle this on for web-access tasks, 
                  and toggle it off for complete isolation.
                </p>
                
                <CloudDemo />
              </div>
            </section>

            {/* Privacy Promise */}
            <section className="py-20 border-t border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full"></div>
              <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <ShieldIcon className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Privacy Promise</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  We believe AI should empower you, not sell you out. No Net GPT is built with a 
                  <span className="text-blue-400 font-semibold"> rebellious spirit against Big Tech surveillance</span>. 
                  We can't sell your data because we never have it. It stays on your device, encrypted and yours forever.
                </p>
                <div className="flex gap-4 justify-center">
                  <button 
                    onClick={() => setCurrentView('privacy')}
                    className="text-blue-400 hover:text-blue-300 font-semibold hover:underline underline-offset-4 decoration-blue-500/50"
                  >
                    Privacy Policy
                  </button>
                  <span className="text-slate-700">|</span>
                  <button 
                    onClick={() => setCurrentView('terms')}
                    className="text-blue-400 hover:text-blue-300 font-semibold hover:underline underline-offset-4 decoration-blue-500/50"
                  >
                    Terms of Service
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentView === 'privacy' && <PrivacyPage />}
        {currentView === 'terms' && <TermsPage />}
        {currentView === 'contact' && <ContactPage />}

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-[#020617] mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-2 group">
            <WifiOffIcon className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
            <span className="font-bold text-slate-500 group-hover:text-slate-300 transition-colors">No Net GPT</span>
          </button>
          <div className="flex gap-8 text-sm text-slate-500">
            <button onClick={() => setCurrentView('privacy')} className="hover:text-white transition-colors">Privacy</button>
            <button onClick={() => setCurrentView('terms')} className="hover:text-white transition-colors">Terms</button>
            <button onClick={() => setCurrentView('contact')} className="hover:text-white transition-colors">Contact</button>
          </div>
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} No Net GPT. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;