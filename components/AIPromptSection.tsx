
import React, { useState, useCallback } from 'react';
import { generateCreativeIdea } from '../services/geminiService';

const AIPromptSection: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateIdea = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt to generate an idea.');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const fullPrompt = `Generate a creative content idea for a blog post or social media update based on the following topic or keywords. Focus on engagement and novelty:\n\nTopic: "${prompt}"`;
      const idea = await generateCreativeIdea(fullPrompt);
      setGeneratedIdea(idea);
    } catch (err: any) {
      console.error('Failed to generate idea:', err);
      setError(err.message || 'An unexpected error occurred while generating the idea.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]); // Only re-create if 'prompt' changes

  return (
    <section id="ai-insights" className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Spark Your Next Big Idea with AI
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Stuck on a content idea? Let our AI assistant help you brainstorm creative topics, angles, and headlines instantly.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-xl border border-indigo-100">
          <div className="mb-6 text-left">
            <label htmlFor="ai-prompt" className="block text-sm font-medium text-gray-700 mb-2">
              Describe your desired content topic or keywords:
            </label>
            <textarea
              id="ai-prompt"
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 resize-y"
              placeholder="e.g., 'sustainable living tips for urban dwellers' or 'future of remote work'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
            ></textarea>
          </div>

          <button
            onClick={handleGenerateIdea}
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Generate Idea'
            )}
          </button>

          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-left" role="alert">
              <p className="font-bold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          {generatedIdea && (
            <div className="mt-8 bg-gray-50 p-6 rounded-md border border-gray-200 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your AI-Generated Idea:</h3>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{generatedIdea}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIPromptSection;
