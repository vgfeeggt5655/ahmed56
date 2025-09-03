import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Header: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGenerateQuote = async () => {
    setIsLoading(true);
    setError('');
    setQuote('');
    try {
      if (!process.env.API_KEY) {
        // In a real app, you'd want to handle this more gracefully.
        // For this environment, we assume the key is present.
        console.warn("API key is missing. Please set the API_KEY environment variable.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Generate a short, inspirational quote about technology or programming in Arabic.',
      });
      setQuote(response.text);
    } catch (e) {
      console.error(e);
      setError('عذراً، حدث خطأ أثناء إنشاء الاقتباس.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="bg-slate-800/20 backdrop-blur-sm pt-24 pb-16 text-center">
      <div className="container mx-auto px-6">
        <img
          src="https://picsum.photos/id/237/200"
          alt="صورة شخصية"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-500 shadow-lg"
        />
        <h1 className="text-5xl font-bold text-white leading-tight">اسمك هنا</h1>
        <p className="text-2xl text-cyan-400 mt-2">مطور واجهات أمامية</p>
        <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-lg">
          أقوم بتحويل الأفكار إلى واقع رقمي ملموس من خلال كود أنيق وفعال.
        </p>

        <div className="mt-8">
          <button
            onClick={handleGenerateQuote}
            disabled={isLoading}
            className="bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-500 transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed transform hover:scale-105"
            aria-live="polite"
          >
            {isLoading ? 'جاري الإنشاء...' : 'أنشئ اقتباسًا تقنيًا'}
          </button>
        </div>

        {quote && (
          <div className="mt-6 bg-slate-800/50 p-4 rounded-lg max-w-2xl mx-auto" aria-live="assertive">
            <blockquote className="text-lg text-slate-300 italic">"{quote}"</blockquote>
          </div>
        )}

        {error && (
          <div className="mt-6" aria-live="assertive">
            <p className="text-red-400">{error}</p>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;