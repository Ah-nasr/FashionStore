import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

function SalesBot() {
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);
  const botUrl = "https://ah-nasr.github.io/ChatBot/"; // Adjusted for sales bot

  // Close the window when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        !event.target.closest('.chat-toggle-btn')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="mb-4 bg-white rounded-lg shadow-lg w-96 h-[500px] flex flex-col overflow-hidden border border-gray-200"
        >
          {/* Header Bar */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Sales Assistant Chatbot</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-blue-700 rounded"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Content (iframe) */}
          <div className="flex-grow">
            <iframe
              src={botUrl}
              title="Sales Assistant Chatbot"
              className="w-full h-full border-0"
              allow="microphone"
            />
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chat-toggle-btn w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isOpen ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}

export default SalesBot;