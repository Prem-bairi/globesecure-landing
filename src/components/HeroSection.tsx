import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Globe, Zap, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-safety/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-safety/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Zap size={16} className="text-primary" />
              AI-Powered Safety Technology
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Journey Pal
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                AI-powered safety, real-time monitoring, and secure digital ID for modern tourism. 
                Experience peace of mind while exploring the world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-safety">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Globe Visual */}
              <div className="w-80 h-80 mx-auto relative">
                {/* Globe Base */}
                <div className="absolute inset-0 gradient-primary rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 glass rounded-full flex items-center justify-center">
                  <Globe className="w-32 h-32 text-primary animate-spin" style={{ animationDuration: '20s' }} />
                </div>

                {/* Orbiting Safety Icons */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                  <Shield className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-8 h-8 text-safety" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                  <Shield className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-6 h-6 text-primary" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s' }}>
                  <Shield className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-7 h-7 text-safety/70" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
                  <Shield className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-5 h-5 text-primary/70" />
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(210, 100%, 50%)" />
                      <stop offset="100%" stopColor="hsl(145, 100%, 45%)" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="150" fill="none" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="url(#line-gradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                </svg>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 glass p-4 rounded-xl shadow-soft animate-bounce" style={{ animationDelay: '0.2s' }}>
              <div className="text-sm font-medium text-primary">Real-time Alert</div>
              <div className="text-xs text-muted-foreground">Tourist safe in zone A</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass p-4 rounded-xl shadow-soft animate-bounce" style={{ animationDelay: '0.7s' }}>
              <div className="text-sm font-medium text-safety">AI Analysis</div>
              <div className="text-xs text-muted-foreground">Risk level: Low</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;