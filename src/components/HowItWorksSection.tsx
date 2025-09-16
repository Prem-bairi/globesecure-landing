import React from 'react';
import { UserPlus, Shield, Brain, MapPin, Bell, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up & Verify',
      description: 'Tourists and officers create secure accounts with blockchain-based digital identity verification.',
      detail: 'Quick registration with government-grade security standards'
    },
    {
      icon: Shield,
      title: 'Digital ID Generation',
      description: 'Tamper-proof digital credentials are generated and stored on the blockchain for instant verification.',
      detail: 'Cross-border compatible and privacy-protected'
    },
    {
      icon: Brain,
      title: 'AI Monitoring Activation',
      description: 'Advanced AI algorithms begin continuous safety monitoring and risk assessment of tourist activities.',
      detail: 'Real-time analysis of patterns and environmental factors'
    },
    {
      icon: MapPin,
      title: 'Geo-Fence Setup',
      description: 'Smart safety zones are established around tourist locations with dynamic boundary adjustments.',
      detail: 'Adaptive zones that respond to real-time conditions'
    },
    {
      icon: Bell,
      title: 'Alert & Response',
      description: 'Instant notifications are sent to tourists and authorities when incidents are detected or predicted.',
      detail: 'Sub-second response times with precise location data'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle size={16} />
            Step by Step Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures maximum safety with minimal complexity. 
            Get protected in minutes, monitored 24/7, and assisted instantly when needed.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-safety to-primary transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
                >
                  {/* Step Number - Desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2 lg:text-right'}`}>
                    {/* Mobile Step Number */}
                    <div className="lg:hidden flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary to-safety"></div>
                    </div>

                    <div className="space-y-4">
                      <div className={`w-16 h-16 ${index % 3 === 0 ? 'bg-primary/10' : index % 3 === 1 ? 'bg-safety/10' : 'bg-primary/10'} rounded-2xl flex items-center justify-center ${isEven ? '' : 'lg:ml-auto'}`}>
                        <IconComponent className={`w-8 h-8 ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-safety' : 'text-primary'}`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className={`inline-flex items-center gap-2 ${index % 3 === 1 ? 'bg-safety/10 text-safety' : 'bg-primary/10 text-primary'} px-4 py-2 rounded-full text-sm font-medium`}>
                        <CheckCircle size={16} />
                        {step.detail}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="relative w-full max-w-xs mx-auto">
                      {/* Background Animation */}
                      <div className="absolute inset-0">
                        <div className={`w-full h-64 ${index % 3 === 1 ? 'gradient-safety' : 'gradient-primary'} rounded-3xl opacity-10 animate-pulse`}></div>
                      </div>

                      {/* Main Visual */}
                      <div className="relative h-64 flex items-center justify-center">
                        {/* Central Icon */}
                        <div className="glass p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth">
                          <IconComponent className={`w-16 h-16 ${index % 3 === 1 ? 'text-safety' : 'text-primary'}`} />
                        </div>

                        {/* Animated Particles */}
                        <div className="absolute inset-0">
                          <div className="absolute top-4 left-4 w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
                          <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-safety/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                          <div className="absolute bottom-6 left-8 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                          <div className="absolute bottom-4 right-4 w-1 h-1 bg-safety/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                          <div className="flex gap-2">
                            {steps.map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${i <= index ? 'bg-primary' : 'bg-muted'} transition-colors`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience Ultimate Safety?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of tourists already protected by our advanced safety system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-smooth">
                Start Your Safe Journey
              </button>
              <button className="border border-border px-8 py-3 rounded-xl font-semibold hover:bg-secondary transition-smooth">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;