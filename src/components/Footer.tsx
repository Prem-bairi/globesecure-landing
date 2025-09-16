import React from 'react';
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Github, Globe } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Demo', href: '#demo' },
      { name: 'Pricing', href: '#pricing' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Help Center', href: '#help' },
      { name: 'Status Page', href: '#status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Compliance', href: '#compliance' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Globe, href: '#website', label: 'Website' },
  ];

  return (
    <footer id="contact" className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Journey Pal</h3>
                <p className="text-sm text-slate-300">Your Travel Companion</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed max-w-md">
              Revolutionary AI-powered travel companion and safety monitoring system 
              for modern tourism. Your trusted partner for safe exploration worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-slate-300">contact@journeypal.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-slate-300">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-700 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Product
              </h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Resources
              </h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Legal
              </h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-all duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-b border-slate-700">
          <div className="glass p-8 rounded-2xl bg-slate-700/50">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-slate-300">
                  Get the latest updates on travel technology and safety insights.
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                />
                <button className="gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-300">
            © 2024 Journey Pal. All rights reserved. Built with ❤️ for safer travels.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-safety rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">System Status: Operational</span>
            </div>
            
            <div className="text-sm text-slate-300">
              Version 2.1.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;