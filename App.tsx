
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentCard from './components/ContentCard';
import AIPromptSection from './components/AIPromptSection';
import Footer from './components/Footer';
import { MenuItem, ContentCardProps } from './types';

const App: React.FC = () => {
  const menuItems: MenuItem[] = [
    { name: 'Home', href: '#' },
    { name: 'Explore', href: '#explore' },
    { name: 'AI Insights', href: '#ai-insights' },
    { name: 'About', href: '#about' },
  ];

  // Dummy data for content cards
  const contentCards: ContentCardProps[] = [
    {
      id: '1',
      title: 'The Future of Remote Work: A Comprehensive Guide',
      description: 'Explore the evolving landscape of remote work, from hybrid models to fully distributed teams. Learn strategies for productivity and collaboration in the new digital era.',
      imageUrl: 'https://picsum.photos/640/360?random=1',
      tags: ['Work', 'Technology', 'Remote'],
      author: 'Jane Doe',
      readTime: '10 min',
    },
    {
      id: '2',
      title: 'Sustainable Living: Small Changes, Big Impact',
      description: 'Discover practical tips and easy habits for a more sustainable lifestyle. Reduce your carbon footprint with these actionable steps, starting today.',
      imageUrl: 'https://picsum.photos/640/360?random=2',
      tags: ['Environment', 'Lifestyle', 'Green'],
      author: 'John Smith',
      readTime: '8 min',
    },
    {
      id: '3',
      title: 'Mastering Frontend Development with React & Tailwind',
      description: 'Dive deep into building modern, responsive user interfaces using React and Tailwind CSS. This guide covers best practices and advanced techniques.',
      imageUrl: 'https://picsum.photos/640/360?random=3',
      tags: ['Development', 'React', 'Tailwind'],
      author: 'Alice Johnson',
      readTime: '15 min',
    },
    {
      id: '4',
      title: 'The Art of Digital Storytelling in 2024',
      description: 'Learn how to craft compelling narratives for the digital age. Explore techniques for engaging your audience across various platforms and formats.',
      imageUrl: 'https://picsum.photos/640/360?random=4',
      tags: ['Marketing', 'Content', 'Narrative'],
      author: 'Bob Williams',
      readTime: '12 min',
    },
    {
      id: '5',
      title: 'Understanding AI Ethics: Navigating the New Frontier',
      description: 'A critical look at the ethical considerations surrounding artificial intelligence. Discusses fairness, transparency, and accountability in AI development.',
      imageUrl: 'https://picsum.photos/640/360?random=5',
      tags: ['AI', 'Ethics', 'Future'],
      author: 'Charlie Brown',
      readTime: '11 min',
    },
    {
      id: '6',
      title: 'Healthy Eating Habits for Busy Professionals',
      description: 'Quick and nutritious meal prep ideas and strategies to maintain a healthy diet, even with a demanding work schedule. Balance wellness and career.',
      imageUrl: 'https://picsum.photos/640/360?random=6',
      tags: ['Health', 'Lifestyle', 'Wellness'],
      author: 'Diana Prince',
      readTime: '9 min',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar menuItems={menuItems} />
      <main className="flex-grow">
        <HeroSection />

        <section id="explore" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
              Explore Curated Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCards.map((card) => (
                <ContentCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </section>

        <AIPromptSection />

        <section id="about" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              About ContentHub
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              ContentHub is your go-to platform for discovering high-quality content and leveraging cutting-edge AI to enhance your creative process. We believe in empowering creators and enthusiasts alike with tools and resources to stay inspired and informed. Our mission is to simplify content discovery and generation, making creativity accessible to everyone.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
