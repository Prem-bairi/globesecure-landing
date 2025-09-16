import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Shield, Menu, X, UserCheck, Badge } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginType, setLoginType] = useState<'tourist' | 'officer'>('tourist');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Demo', href: '#demo' },
    { name: 'Contact', href: '#contact' },
  ];

  const LoginModal = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero" size="lg" className="font-semibold">
          Login / Signup
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Access Dashboard
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Login Type Toggle */}
          <div className="flex bg-secondary rounded-xl p-1">
            <button
              onClick={() => setLoginType('tourist')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-smooth ${
                loginType === 'tourist'
                  ? 'bg-card shadow-soft text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <UserCheck size={18} />
              Tourist
            </button>
            <button
              onClick={() => setLoginType('officer')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-smooth ${
                loginType === 'officer'
                  ? 'bg-card shadow-soft text-safety'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Badge size={18} />
              Officer
            </button>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                {loginType === 'tourist' ? 'Tourist ID / Email' : 'Officer Badge / Email'}
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
                placeholder={`Enter your ${loginType} credentials`}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              variant={loginType === 'tourist' ? 'hero' : 'safety'} 
              size="lg" 
              className="w-full"
            >
              Access {loginType === 'tourist' ? 'Tourist' : 'Officer'} Dashboard
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              New {loginType}? <span className="text-primary cursor-pointer hover:underline">Create Account</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Journey Pal</h1>
              <p className="text-xs text-muted-foreground">Your Travel Companion</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:flex">
            <LoginModal />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50 bg-background/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <LoginModal />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;