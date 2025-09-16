import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Monitor, Smartphone, Shield, Eye, ArrowRight } from 'lucide-react';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Eye size={16} />
            Live Demo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See It in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our intelligent safety monitoring system through interactive demonstrations 
            showing real-world scenarios and instant protection responses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Video/Interactive Area */}
          <div className="relative">
            {/* Main Demo Container */}
            <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-card rounded-3xl shadow-strong overflow-hidden group cursor-pointer">
              {/* Video Placeholder */}
              <div className="absolute inset-0 gradient-hero flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-smooth backdrop-blur-sm">
                    <Play className="w-12 h-12 text-primary ml-2" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-foreground mb-2">Interactive System Demo</div>
                    <div className="text-muted-foreground">Click to see the full system in action</div>
                  </div>
                </div>
              </div>

              {/* Animated Elements */}
              <div className="absolute top-6 left-6 glass p-3 rounded-xl animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-safety rounded-full animate-ping"></div>
                  <span className="text-sm font-medium">Real-time Monitoring</span>
                </div>
              </div>

              <div className="absolute top-6 right-6 glass p-3 rounded-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Protected Zone</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 glass p-3 rounded-xl animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Tourist Location</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>

            {/* Demo Features */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">Dashboard View</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-safety/10 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-safety" />
                </div>
                <div className="text-sm font-medium text-foreground">Mobile Alerts</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">AI Protection</div>
              </div>
            </div>
          </div>

          {/* Demo Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Interactive Product Demonstration
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our comprehensive safety monitoring system through live demonstrations 
                showcasing real-world scenarios, emergency responses, and the seamless integration 
                between tourist and officer interfaces.
              </p>
            </div>

            {/* Demo Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Real-time Risk Assessment</div>
                  <div className="text-muted-foreground text-sm">Watch AI analyze environmental factors and predict potential risks</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-safety/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-safety rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Emergency Alert System</div>
                  <div className="text-muted-foreground text-sm">See how instant notifications reach both tourists and authorities</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Digital Identity Verification</div>
                  <div className="text-muted-foreground text-sm">Experience instant, secure identity verification in action</div>
                </div>
              </div>
            </div>

            {/* Demo CTA Buttons */}
            <div className="space-y-4">
              <Button variant="hero" size="xl" className="w-full group">
                Watch Full Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="w-full group">
                Request Live Presentation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Demo Stats */}
            <div className="glass p-6 rounded-2xl">
              <div className="text-center mb-4">
                <div className="text-sm font-medium text-muted-foreground mb-2">Demo Highlights</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-primary">5min</div>
                  <div className="text-xs text-muted-foreground">Demo Duration</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-safety">3</div>
                  <div className="text-xs text-muted-foreground">Scenarios Shown</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">Live</div>
                  <div className="text-xs text-muted-foreground">Interactive Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Demo Options */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Want a Personalized Demo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a one-on-one demonstration tailored to your specific use case and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="safety" size="lg">
                Schedule Personal Demo
              </Button>
              <Button variant="outline" size="lg">
                Download Demo Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;