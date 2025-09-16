import React from 'react';
import { AlertTriangle, MapPin, UserX, Clock, Shield } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Safety Concerns',
      description: 'Tourists face unpredictable risks in unfamiliar destinations without real-time safety information.',
      stat: '40% of travelers',
      statDesc: 'experience safety incidents'
    },
    {
      icon: Clock,
      title: 'Delayed Emergency Response',
      description: 'Critical response times are lost when tourists cannot quickly communicate their exact location and situation.',
      stat: '15+ minutes',
      statDesc: 'average emergency response delay'
    },
    {
      icon: UserX,
      title: 'Identity Verification Issues',
      description: 'Unreliable identification systems create barriers for tourists and complicate assistance from authorities.',
      stat: '25% of incidents',
      statDesc: 'involve ID verification delays'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle size={16} />
            Current Challenges
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern tourism faces significant safety and verification challenges that traditional systems cannot adequately address.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-2xl shadow-soft group-hover:shadow-medium transition-smooth"></div>
                
                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <IconComponent className="w-8 h-8 text-destructive" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  {/* Statistic */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-destructive mb-1">
                      {problem.stat}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {problem.statDesc}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium">
            <Shield size={20} />
            Our solution addresses these critical challenges with cutting-edge technology
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;