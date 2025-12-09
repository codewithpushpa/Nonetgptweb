import React, { useState, useRef, useEffect } from 'react';
import { generateDemoResponse } from '../services/geminiService';
import { SendIcon, CloudIcon, WifiOffIcon } from './Icons';
import { ChatMessage } from '../types';

const CloudDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Cloud Mode activated. I am ready to help with complex tasks requiring internet access. Otherwise, toggle me off for 100% offline privacy.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    // Call Gemini
    const responseText = await generateDemoResponse(userText);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 border border-slate-700 rounded-xl overflow-hidden bg-slate-900/50 shadow-2xl backdrop-blur-sm">
      <div className="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-sm text-slate-300 font-semibold flex items-center gap-2">
                <CloudIcon className="w-4 h-4" /> Cloud Mode: ACTIVE
            </span>
        </div>
        <span className="text-xs text-slate-500 font-mono">Powered by Gemini</span>
      </div>
      
      <div className="h-64 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-slate-700 text-slate-200 rounded-bl-none border border-slate-600'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-slate-700 text-slate-200 rounded-lg px-4 py-2 rounded-bl-none text-sm animate-pulse">
                Thinking...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something requiring the cloud..."
          className="flex-1 bg-slate-900 border border-slate-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-2 rounded-md transition-colors"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default CloudDemo;