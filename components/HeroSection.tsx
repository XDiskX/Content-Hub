
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Unleash Your Creative Content Potential
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Dive into a world of curated content and let AI spark your next big idea. From insightful articles to dynamic media, find what you need to create, explore, and grow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#explore"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
            >
              Explore Content
            </a>
            <a href="#ai-insights" className="text-sm font-semibold leading-6 text-white hover:text-indigo-100 transition-colors duration-200">
              AI Insights <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
