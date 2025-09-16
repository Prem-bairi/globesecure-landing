import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Users, Clock, CheckCircle, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-safety/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-safety/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
            <Zap size={16} />
            Transform Tourist Safety Today
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ready to Redefine
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">
                Tourist Safety?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the revolution in travel safety technology. Protect tourists with AI-powered monitoring, 
              instant emergency response, and blockchain-verified digital identity.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground">Advanced Protection</div>
              <div className="text-sm text-muted-foreground">AI-powered risk detection and prevention</div>
            </div>

            <div className="glass p-6 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-safety/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-safety" />
              </div>
              <div className="font-semibold text-foreground">Instant Response</div>
              <div className="text-sm text-muted-foreground">Sub-30 second emergency alerts</div>
            </div>

            <div className="glass p-6 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="font-semibold text-foreground">Global Coverage</div>
              <div className="text-sm text-muted-foreground">50+ countries and growing</div>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="hero" size="xl" className="group text-lg px-12 py-4">
              Request a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="safety" size="xl" className="group text-lg px-12 py-4">
              Get Started Now
              <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-safety" />
              No setup fees
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-safety" />
              30-day free trial
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-safety" />
              24/7 support
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground mb-4">Trusted by authorities worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for partner logos */}
              <div className="h-8 px-6 bg-muted/30 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium">Tourism Board</span>
              </div>
              <div className="h-8 px-6 bg-muted/30 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium">Police Department</span>
              </div>
              <div className="h-8 px-6 bg-muted/30 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium">Embassy Network</span>
              </div>
              <div className="h-8 px-6 bg-muted/30 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium">Travel Insurance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Visual Element */}
        <div className="mt-16 relative">
          <div className="glass p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground">
                  Contact our team for a personalized demonstration and implementation plan.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    Contact Sales
                  </Button>
                  <Button variant="ghost" size="sm">
                    Technical Documentation
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-primary/5 px-6 py-4 rounded-2xl">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Enterprise Ready</div>
                    <div className="text-sm text-muted-foreground">Scalable • Secure • Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;