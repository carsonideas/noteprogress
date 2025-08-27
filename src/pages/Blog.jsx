import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import blogAiProductivity from '../assets/images/blog-ai-productivity.png';
import blogFutureNotes from '../assets/images/blog-future-notes.png';
import blogRemoteWork from '../assets/images/blog-remote-work.png';
import blogNewsletter from '../assets/images/blog-newsletter.png';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Posts',
    'Productivity',
    'AI & Technology',
    'Remote Work',
    'Updates',
    'Tutorials'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Personal Productivity in 2025",
      excerpt: "Discover how artificial intelligence is transforming the way we work, think, and organize our ideas. From smart suggestions to automated workflows, explore the cutting-edge features that are making productivity tools more intelligent than ever.",
      image: blogAiProductivity,
      category: "AI & Technology",
      author: "Alex Smith",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Note-Taking: Beyond Text",
      excerpt: "Explore how modern note-taking is evolving beyond simple text to include multimedia, AI-powered insights, and seamless cross-platform experiences.",
      image: blogFutureNotes,
      category: "Productivity",
      author: "Maria Rodriguez",
      date: "Jan 12, 2025",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 3,
      title: "Remote Work Best Practices with Nova",
      excerpt: "Learn how distributed teams are using Nova to stay connected, organized, and productive in the remote work era.",
      image: blogRemoteWork,
      category: "Remote Work",
      author: "David Kim",
      date: "Jan 10, 2025",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Building Better Habits with Smart Notes",
      excerpt: "Discover how intelligent note-taking can help you build and maintain better habits through automated tracking and insights.",
      image: blogNewsletter,
      category: "Productivity",
      author: "Sarah Johnson",
      date: "Jan 8, 2025",
      readTime: "3 min read",
      featured: false
    }
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                Latest Insights
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Ideas worth<br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">sharing</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 mb-8">
              Insights on productivity, AI, and the future of note-taking from the Nova team and our community.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pl-12 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white'
                    : 'bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative z-10 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-2">Featured Article</h2>
              <p className="text-zinc-400">Our latest deep dive into the future of productivity</p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-zinc-500 text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{featuredPost.author}</p>
                        <p className="text-zinc-400 text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">Recent Articles</h2>
            <p className="text-zinc-400">Stay updated with our latest insights and tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-zinc-500 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-violet-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                        <span className="text-white font-medium text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-xs">{post.author}</p>
                        <p className="text-zinc-500 text-xs flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5" />
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-400">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-violet-500/10 to-indigo-600/10 rounded-3xl p-8 lg:p-12 text-center border border-violet-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on productivity, AI, and note-taking delivered straight to your inbox. 
              Join thousands of readers who stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
            <p className="text-zinc-500 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

