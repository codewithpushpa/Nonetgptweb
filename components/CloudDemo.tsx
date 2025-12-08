import React, { useState, useRef, useEffect } from 'react';
import { generateDemoResponse } from '../services/geminiService';
import { SendIcon, CloudIcon } from './Icons';
import { ChatMessage } from '../types';

const CloudDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Cloud Mode activated. I am ready to help with web development, complex analysis, or general knowledge. Toggle me off in the full app for 100% offline privacy.' }
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
    <div className="w-full max-w-2xl mx-auto border border-slate-700 rounded-xl overflow-hidden bg-slate-900 shadow-2xl">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider flex items-center gap-2">
                <CloudIcon className="w-3.5 h-3.5" /> Cloud Link: Active
            </span>
        </div>
        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Gemini 2.5 Flash</span>
      </div>
      
      {/* Chat Area */}
      <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-[#0B1120] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-sm' 
                : 'bg-slate-800 text-slate-200 rounded-bl-sm border border-slate-700'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-slate-800 text-slate-400 rounded-2xl rounded-bl-sm px-5 py-3 text-sm border border-slate-700 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-150"></div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask No Net GPT (Cloud Mode)..."
          className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 text-white p-2.5 rounded-lg transition-colors flex items-center justify-center"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default CloudDemo;