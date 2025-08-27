import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  Search, 
  Cloud, 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  Zap, 
  ArrowRight,
  Users, 
  FileText, 
  Download, 
  Mic, 
  BarChart3, 
  Slack, 
  HardDrive, 
  Calendar, 
  Workflow, 
  Clock, 
  Gauge, 
  TrendingUp, 
  UserCheck 
} from 'lucide-react';
import aiPoweredImg from '../assets/images/ai-powered-notes.png';
import instantSearchImg from '../assets/images/instant-search.png';
import crossPlatformImg from '../assets/images/cross-platform-sync.png';
import securityImg from '../assets/images/security-shield.png';

const Features = () => {
  const [activeDemo, setActiveDemo] = useState('ai-writing');

  const demoTabs = [
    { id: 'ai-writing', label: 'AI Writing' },
    { id: 'smart-search', label: 'Smart Search' },
    { id: 'backlinks', label: 'Backlinks' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 hero-section pt-32 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                Powerful Features
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Everything you need to<br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">think clearly</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300">
              Nova combines the power of AI with intuitive design to create the ultimate note-taking experience. Discover features that adapt to how you think.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI-Powered Notes */}
            <div className="feature-card lg:col-span-2 relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0%,transparent_70%)] opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">AI-Powered Intelligence</h3>
                    <p className="text-zinc-400">Smart suggestions that understand context</p>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img src={aiPoweredImg} alt="AI-powered note-taking interface" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Smart Auto-Complete</h4>
                      <p className="text-sm text-zinc-400">AI suggests completions as you type</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Content Analysis</h4>
                      <p className="text-sm text-zinc-400">Automatically extract key insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Search */}
            <div className="feature-card relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img src={instantSearchImg} alt="Lightning-fast search interface" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Instant Search</h3>
              </div>
              <p className="text-zinc-300 mb-4">Find anything in milliseconds with our lightning-fast search engine.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  Full-text search across all notes
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  Smart filters and tags
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  Search by date, type, or content
                </div>
              </div>
            </div>

            {/* Cross-Platform Sync */}
            <div className="feature-card lg:col-span-3 relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Cloud className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">Cross-Platform Sync</h3>
                      <p className="text-zinc-400">Your notes, everywhere you need them</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 mb-6">
                    Seamlessly sync your notes across all your devices. Start writing on your laptop, continue on your phone, and finish on your tablet.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                      Real-time sync
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                      Offline support
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                      Conflict resolution
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                      Version history
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src={crossPlatformImg} alt="Cross-platform synchronization" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Security & Privacy First
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Your thoughts are precious. We protect them with enterprise-grade security and privacy-by-design principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">End-to-End Encryption</h3>
              <p className="text-zinc-400 text-sm">
                Your notes are encrypted on your device before they leave. Only you have the keys to decrypt them.
              </p>
            </div>

            <div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zero-Knowledge Architecture</h3>
              <p className="text-zinc-400 text-sm">
                We can't read your notes even if we wanted to. Your privacy is built into our architecture.
              </p>
            </div>

            <div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">No Tracking</h3>
              <p className="text-zinc-400 text-sm">
                We don't track your behavior or sell your data. Your notes are yours, and yours alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              See Nova in Action
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Experience the power of Nova with our interactive demos. See how AI can transform your note-taking workflow.
            </p>
          </div>

          <div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl backdrop-blur">
            {/* Demo Tabs */}
            <div className="flex border-b border-white/10">
              {demoTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    activeDemo === tab.id
                      ? 'text-white bg-white/10 border-b-2 border-violet-400'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Demo Content */}
            <div className="p-8">
              {activeDemo === 'ai-writing' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">AI Writing Assistant</h3>
                    <p className="text-zinc-300 mb-6">
                      Let AI help you write better, faster. Get suggestions for completions, improvements, and even entire paragraphs based on your context.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <FileCheck className="h-4 w-4 text-emerald-400" />
                        Smart auto-completion
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Zap className="h-4 w-4 text-yellow-400" />
                        Grammar and style suggestions
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Bot className="h-4 w-4 text-violet-400" />
                        Context-aware recommendations
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900/50">
                    <div className="w-full h-full flex items-center justify-center text-zinc-500">
                      AI Writing Demo Placeholder
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 'smart-search' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Smart Search</h3>
                    <p className="text-zinc-300 mb-6">
                      Find exactly what you're looking for with our intelligent search. Search by content, tags, dates, or even concepts.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Search className="h-4 w-4 text-cyan-400" />
                        Full-text search
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Zap className="h-4 w-4 text-yellow-400" />
                        Instant results
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Bot className="h-4 w-4 text-violet-400" />
                        Semantic search
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900/50">
                    <div className="w-full h-full flex items-center justify-center text-zinc-500">
                      Smart Search Demo Placeholder
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 'backlinks' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Automatic Backlinks</h3>
                    <p className="text-zinc-300 mb-6">
                      Connect your ideas automatically. Nova creates backlinks between related notes, helping you discover connections you never knew existed.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Workflow className="h-4 w-4 text-blue-400" />
                        Automatic link detection
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        Visual knowledge graph
                      </div>
                      <div className="flex items-center gap-2 text-sm text-zinc-400">
                        <Bot className="h-4 w-4 text-violet-400" />
                        AI-suggested connections
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-900/50">
                    <div className="w-full h-full flex items-center justify-center text-zinc-500">
                      Backlinks Demo Placeholder
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              And Much More
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Discover all the features that make Nova the most powerful note-taking app ever built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Rich Text Editor', description: 'Beautiful formatting with Markdown support' },
              { icon: Download, title: 'Export Anywhere', description: 'Export to PDF, Word, or plain text' },
              { icon: Mic, title: 'Voice Notes', description: 'Record and transcribe voice memos' },
              { icon: BarChart3, title: 'Analytics', description: 'Track your writing habits and productivity' },
              { icon: Slack, title: 'Integrations', description: 'Connect with your favorite tools' },
              { icon: HardDrive, title: 'Offline Mode', description: 'Work without an internet connection' },
              { icon: Calendar, title: 'Daily Notes', description: 'Automatic daily note creation' },
              { icon: UserCheck, title: 'Collaboration', description: 'Share and collaborate on notes' }
            ].map((feature, index) => (
              <div key={index} className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
            Ready to transform your note-taking?
          </h2>
          <p className="text-zinc-300 text-lg mb-8">
            Join thousands of users who have already discovered the power of Nova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-lg">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

