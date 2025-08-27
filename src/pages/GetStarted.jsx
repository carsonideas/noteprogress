import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Zap, Shield, Cloud, Users, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    useCase: '',
    teamSize: ''
  });

  const steps = [
    { id: 1, title: 'Account Setup', description: 'Create your Nova account' },
    { id: 2, title: 'Personalization', description: 'Tell us about yourself' },
    { id: 3, title: 'Welcome', description: 'You\'re all set!' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in under 2 minutes'
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'End-to-end encryption from day one'
    },
    {
      icon: Cloud,
      title: 'Sync Everywhere',
      description: 'Access your notes on all devices'
    },
    {
      icon: Users,
      title: 'Team Ready',
      description: 'Collaborate with your team instantly'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Nova transformed how our team captures and shares ideas. The AI suggestions are incredibly helpful.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Research Scientist',
      company: 'University Lab',
      content: 'The backlink system helped me connect research papers in ways I never thought possible.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Freelance Writer',
      company: 'Independent',
      content: 'Finally, a note-taking app that understands how I think. The AI writing assistant is a game-changer.',
      rating: 5
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Create Your Account</h2>
              <p className="text-zinc-400">Join thousands of users who trust Nova with their ideas</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">First Name</label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Last Name</label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a strong password"
                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Confirm Password</label>
              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>By creating an account, you agree to our Terms of Service and Privacy Policy</span>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-2">Tell Us About Yourself</h2>
              <p className="text-zinc-400">Help us personalize your Nova experience</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">What's your primary use case?</label>
              <select
                name="useCase"
                value={formData.useCase}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-400/50"
              >
                <option value="">Select your use case</option>
                <option value="personal">Personal note-taking</option>
                <option value="research">Research & academia</option>
                <option value="business">Business & productivity</option>
                <option value="creative">Creative writing</option>
                <option value="education">Education & learning</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Team size (optional)</label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-400/50"
              >
                <option value="">Select team size</option>
                <option value="individual">Just me</option>
                <option value="small">2-10 people</option>
                <option value="medium">11-50 people</option>
                <option value="large">50+ people</option>
              </select>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">What you'll get:</h3>
              <div className="space-y-3">
                {[
                  'Unlimited notes and documents',
                  'AI-powered writing assistance',
                  'Cross-platform synchronization',
                  'Advanced search capabilities',
                  'Collaboration tools',
                  'Priority customer support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-semibold text-white mb-4">Welcome to Nova!</h2>
            <p className="text-zinc-300 text-lg max-w-md mx-auto">
              Your account has been created successfully. You're ready to start capturing and organizing your ideas.
            </p>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Next Steps:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-zinc-300">Download the mobile app</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-zinc-300">Create your first note</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-zinc-300">Explore AI features</span>
                </div>
              </div>
            </div>

            <Button
              className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white px-8 py-3 text-lg"
            >
              Launch Nova
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-violet-400 border-violet-400/20 bg-violet-400/10">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Start Your Journey with{' '}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Nova
              </span>
            </h1>
            
            <p className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Join thousands of creators, researchers, and professionals who have transformed their note-taking with Nova's AI-powered platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="relative z-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.id 
                        ? 'bg-violet-500 text-white' 
                        : 'bg-white/10 text-zinc-400'
                    }`}>
                      {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 h-0.5 mx-2 ${
                        currentStep > step.id ? 'bg-violet-500' : 'bg-white/10'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="border-white/10 text-zinc-300 hover:bg-white/5"
                >
                  Previous
                </Button>
                
                {currentStep < steps.length ? (
                  <Button
                    onClick={handleNextStep}
                    className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white"
                  >
                    {currentStep === steps.length - 1 ? 'Complete Setup' : 'Continue'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">What our users say</h3>
              
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-zinc-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-zinc-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-400">Everything you need to know to get started</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Is Nova really free to start?",
                answer: "Yes! Nova offers a generous free plan that includes up to 1,000 notes, basic AI features, and cross-platform sync. You can upgrade anytime as your needs grow."
              },
              {
                question: "How secure is my data?",
                answer: "Your data is protected with end-to-end encryption. We use zero-knowledge architecture, which means we can't read your notes even if we wanted to."
              },
              {
                question: "Can I import my existing notes?",
                answer: "Absolutely! Nova supports importing from most popular note-taking apps including Notion, Evernote, Obsidian, and more."
              },
              {
                question: "Do I need to install anything?",
                answer: "Nova works in your browser, but we also offer native apps for better performance and offline access on desktop and mobile."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-zinc-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;

