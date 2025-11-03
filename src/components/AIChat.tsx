
import React, { useState } from 'react';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: 'Hello! I\'m Terrance\'s virtual assistant. How can I help you learn more about Terrance\'s skills?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // For now, simulate an AI response since we don't have Supabase and AI integration yet
    setTimeout(() => {
      const responses = [
        "Terrance has extensive experience with React, TypeScript, Tailwindcss, MySQL and Node.js.",
        "Terrance specializes in full stack development with a focus on modern web technologies and AI integration.",
        "Yes, Terrance is available for freelance projects and consulting. You can contact him using the form above."
      ];
      
      // Pick a random response
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const assistantMessage = { role: 'assistant' as const, content: randomResponse };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <section id="ai-chat" className="py-20 bg-purple/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
          Chat with AI Assistant
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="section-container p-6 shadow-xl min-h-[400px] flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-purple text-white rounded-tr-none' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-purple/40 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-purple/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-purple/80 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question about Terrance..."
                className="flex-1 rounded-lg border border-input p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="p-3 bg-purple text-white rounded-lg disabled:opacity-50"
                disabled={isLoading || !input.trim()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            
            <div className="mt-3 text-center">
              <p className="text-xs text-muted-foreground">
                This is a simulated AI chat. For actual inquiries, please use the contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
