import React from 'react';
import { Brain, MapPin, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'AI Safety Monitoring',
      description: 'Advanced machine learning algorithms continuously analyze tourist patterns, predict potential risks, and send proactive alerts to both tourists and authorities.',
      features: [
        'Real-time risk assessment',
        'Predictive incident modeling',
        'Automated emergency alerts',
        'Behavioral pattern analysis'
      ],
      color: 'primary'
    },
    {
      icon: MapPin,
      title: 'Smart Geo-Fencing',
      description: 'Dynamic safety zones that adapt to real-time conditions, instantly notifying tourists when entering potentially dangerous areas and alerting authorities.',
      features: [
        'Dynamic safety boundaries',
        'Real-time zone updates',
        'Instant notifications',
        'Multi-layer protection'
      ],
      color: 'safety'
    },
    {
      icon: Shield,
      title: 'Blockchain Digital Identity',
      description: 'Tamper-proof digital credentials for tourists and verified badge systems for officers, ensuring secure and instant identity verification.',
      features: [
        'Immutable identity records',
        'Instant verification',
        'Cross-border compatibility',
        'Privacy-first design'
      ],
      color: 'primary'
    }
  ];

  return (
    <section id="features" className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} />
            Our Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Revolutionary Safety Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining artificial intelligence, blockchain technology, and real-time monitoring to create the most advanced travel companion system ever built.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="space-y-4">
                    <div className={`w-16 h-16 ${solution.color === 'primary' ? 'bg-primary/10' : 'bg-safety/10'} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${solution.color === 'primary' ? 'text-primary' : 'text-safety'}`} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {solution.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 ${solution.color === 'primary' ? 'text-primary' : 'text-safety'} flex-shrink-0`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant={solution.color === 'primary' ? 'hero' : 'safety'} size="lg" className="group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Visual */}
                <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="relative w-full max-w-md mx-auto">
                    {/* Main Visual Container */}
                    <div className="aspect-square relative">
                      {/* Background */}
                      <div className={`absolute inset-0 ${solution.color === 'primary' ? 'gradient-primary' : 'gradient-safety'} rounded-3xl opacity-10`}></div>
                      
                      {/* Central Element */}
                      <div className="absolute inset-8 glass rounded-2xl flex items-center justify-center group-hover:scale-105 transition-smooth">
                        <IconComponent className={`w-24 h-24 ${solution.color === 'primary' ? 'text-primary' : 'text-safety'}`} />
                      </div>

                      {/* Animated Elements */}
                      <div className="absolute inset-0">
                        {/* Orbiting dots */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                          <div className={`absolute top-0 left-1/2 w-3 h-3 ${solution.color === 'primary' ? 'bg-primary' : 'bg-safety'} rounded-full transform -translate-x-1/2 -translate-y-1`}></div>
                        </div>
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                          <div className={`absolute bottom-0 left-1/2 w-2 h-2 ${solution.color === 'primary' ? 'bg-primary' : 'bg-safety'} rounded-full transform -translate-x-1/2 translate-y-1 opacity-70`}></div>
                        </div>
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                          <div className={`absolute left-0 top-1/2 w-2 h-2 ${solution.color === 'primary' ? 'bg-primary' : 'bg-safety'} rounded-full transform -translate-x-1 -translate-y-1/2 opacity-50`}></div>
                        </div>
                      </div>

                      {/* Pulse Effect */}
                      <div className={`absolute inset-0 ${solution.color === 'primary' ? 'bg-primary' : 'bg-safety'} rounded-3xl animate-pulse opacity-5`}></div>
                    </div>

                    {/* Floating Info Cards */}
                    <div className="absolute -top-4 -right-4 glass p-3 rounded-xl shadow-soft animate-bounce" style={{ animationDelay: '0.5s' }}>
                      <div className={`text-sm font-medium ${solution.color === 'primary' ? 'text-primary' : 'text-safety'}`}>Active</div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 glass p-3 rounded-xl shadow-soft animate-bounce" style={{ animationDelay: '1s' }}>
                      <div className={`text-sm font-medium ${solution.color === 'primary' ? 'text-primary' : 'text-safety'}`}>Secure</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;