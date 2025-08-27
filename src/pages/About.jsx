import React, { useState, useEffect } from 'react';
import { Users, Shield, Cpu, Globe, Leaf, Star } from 'lucide-react';
import companyStoryImg from '../assets/images/company-story.png';
import innovationLabImg from '../assets/images/innovation-lab.png';
import awardsRecognitionImg from '../assets/images/awards-recognition.png';
import globalPresenceImg from '../assets/images/blog-author-avatar.png';
import person1 from '../assets/people_images/person1.jpg';
import person2 from '../assets/people_images/person2.jpg';
import person3 from '../assets/people_images/person3.jpg';
import person4 from '../assets/people_images/person4.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 hero-section pt-32 pb-16">
        <div className="gradient-bg"></div>
        <div className="glass-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                <Users className="h-3.5 w-3.5 text-violet-300" />
                Our Story
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Reimagining how<br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">ideas come to life</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300">
              We believe that great ideas shouldn't be lost in the chaos of traditional note-taking. Nova was born from the vision of creating a seamless bridge between human creativity and artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img src={companyStoryImg} alt="Nova team working together" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
                Founded on the belief that thinking should be effortless
              </h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  In 2023, our founders—former researchers from Stanford and MIT—recognized a fundamental problem: brilliant minds were being held back by clunky, outdated note-taking tools that couldn't keep up with the speed of thought.
                </p>
                <p>
                  We set out to build something different. Not just another note app, but an intelligent companion that understands context, anticipates needs, and seamlessly connects ideas across time and space.
                </p>
                <p>
                  Today, Nova serves thousands of researchers, writers, students, and professionals who demand more from their tools. We're just getting started.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-zinc-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1M+</div>
                  <div className="text-sm text-zinc-400">Notes Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-zinc-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Our mission & values
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We're guided by principles that put human creativity and privacy at the center of everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Privacy First */}
            <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
                <p className="text-zinc-400 text-sm">
                  Your thoughts are yours alone. We use end-to-end encryption and zero-knowledge architecture to ensure your ideas remain private and secure.
                </p>
              </div>
            </div>

            {/* Human-Centered AI */}
            <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Human-Centered AI</h3>
                <p className="text-zinc-400 text-sm">
                  AI should amplify human creativity, not replace it. Our intelligent features are designed to enhance your natural thinking process.
                </p>
              </div>
            </div>

            {/* Accessibility */}
            <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Accessibility</h3>
                <p className="text-zinc-400 text-sm">
                  Great ideas can come from anyone, anywhere. We build inclusive tools that work for people of all abilities and backgrounds.
                </p>
              </div>
            </div>

            {/* Open Innovation */}
            <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Open Innovation</h3>
                <p className="text-zinc-400 text-sm">
                  We believe in the power of community and collaboration. Our platform integrates with the tools you already love and use.
                </p>
              </div>
            </div>

            {/* Sustainability */}
            <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Sustainability</h3>
                <p className="text-zinc-400 text-sm">
                  We're committed to building a sustainable future. Our infrastructure runs on renewable energy and we offset our carbon footprint.
                </p>
              </div>
            </div>

            {/* Excellence */}
            <div className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-zinc-400 text-sm">
                  We strive for excellence in everything we do, from the smallest interaction to the biggest feature. Quality is never an accident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Meet our team
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We're a diverse group of thinkers, builders, and dreamers united by our passion for empowering human creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "Co-Founder & CEO", image: person1, bio: "Former Stanford researcher with 10+ years in AI and machine learning." },
              { name: "Maria Rodriguez", role: "Co-Founder & CTO", image: person2, bio: "MIT graduate specializing in distributed systems and privacy-preserving technologies." },
              { name: "David Kim", role: "Head of Design", image: person3, bio: "Award-winning designer with experience at Apple and Google, passionate about human-centered design." },
              { name: "Sarah Johnson", role: "VP of Engineering", image: person4, bio: "Former tech lead at Microsoft, expert in building scalable and reliable systems." }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-white/10"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-violet-400 text-sm mb-3">{member.role}</p>
                <p className="text-zinc-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Our journey
            </h2>
            <p className="text-zinc-400">
              From a simple idea to a revolutionary platform.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500 to-indigo-600"></div>

            <div className="space-y-12">
              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">The Beginning</h4>
                    <p className="text-zinc-400 text-sm mb-2">Founded by Alex Chen and Maria Rodriguez in a small San Francisco apartment.</p>
                    <div className="text-violet-400 text-sm font-medium">2020</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8">
                  <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">First Prototype</h4>
                    <p className="text-zinc-400 text-sm mb-2">Built the first working prototype and secured seed funding from top VCs.</p>
                    <div className="text-indigo-400 text-sm font-medium">2021</div>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Public Beta</h4>
                    <p className="text-zinc-400 text-sm mb-2">Launched public beta with 1,000 early adopters and received overwhelming positive feedback.</p>
                    <div className="text-violet-400 text-sm font-medium">2022</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8">
                  <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Official Launch</h4>
                    <p className="text-zinc-400 text-sm mb-2">Officially launched Nova 1.0 and reached 10,000 active users within the first month.</p>
                    <div className="text-indigo-400 text-sm font-medium">2023</div>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                    <h4 className="text-white font-semibold mb-2">Global Expansion</h4>
                    <p className="text-zinc-400 text-sm mb-2">Expanded globally and reached 50,000+ users across 50+ countries.</p>
                    <div className="text-violet-400 text-sm font-medium">2024</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full border-4 border-zinc-900"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

