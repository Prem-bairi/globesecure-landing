import React from 'react';
import { Shield, Zap, Users, Globe, TrendingUp, Award, CheckCircle, Star } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'AI-powered risk prediction and real-time monitoring ensure tourists stay safe in any environment.',
      metrics: [
        { label: 'Risk Reduction', value: '85%' },
        { label: 'Response Time', value: '<30s' }
      ],
      gradient: 'from-primary to-primary-light'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Lightning-fast emergency alerts and automated response systems minimize danger exposure.',
      metrics: [
        { label: 'Alert Speed', value: '2.3s' },
        { label: 'Coverage', value: '24/7' }
      ],
      gradient: 'from-safety to-safety-light'
    },
    {
      icon: Users,
      title: 'Verified Identity',
      description: 'Blockchain-based digital credentials provide tamper-proof identity verification for all users.',
      metrics: [
        { label: 'Security Level', value: '99.9%' },
        { label: 'Verification Time', value: '5s' }
      ],
      gradient: 'from-primary to-safety'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Seamless protection across borders with local authority integration and real-time data sharing.',
      metrics: [
        { label: 'Countries', value: '50+' },
        { label: 'Languages', value: '25+' }
      ],
      gradient: 'from-safety to-primary'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Travel Blogger',
      content: 'This system gave me peace of mind while exploring remote destinations. The AI alerts helped me avoid dangerous areas I never would have known about.',
      rating: 5,
      location: 'Bangkok, Thailand'
    },
    {
      name: 'Officer Martinez',
      role: 'Tourist Police',
      content: 'The instant verification and location data have revolutionized how we assist tourists. Response times are dramatically improved.',
      rating: 5,
      location: 'Barcelona, Spain'
    }
  ];

  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award size={16} />
            Key Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of travel safety with measurable improvements in security, 
            response times, and peace of mind for both tourists and authorities.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Background */}
                <div className="absolute inset-0 glass rounded-3xl shadow-soft group-hover:shadow-medium transition-smooth"></div>
                
                {/* Content */}
                <div className="relative p-8 space-y-6 text-center">
                  {/* Icon with Gradient */}
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-smooth`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    {benefit.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="text-lg font-bold text-primary">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-smooth`}></div>
              </div>
            );
          })}
        </div>

        {/* Statistics Bar */}
        <div className="glass rounded-3xl p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Protected Tourists</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Incident Prevention</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">15s</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Partner Countries</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Trusted by Users Worldwide</h3>
            <p className="text-muted-foreground">See what tourists and authorities are saying about our system</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass rounded-2xl p-8 space-y-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <div className="text-sm text-primary font-medium">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;