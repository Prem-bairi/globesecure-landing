import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, UserCheck, Badge, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginType, setLoginType] = useState<'tourist' | 'officer'>('tourist');

  return (
    <div className="min-h-screen bg-gradient-modern flex items-center justify-center p-4">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-slate-900/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-orange-500/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-slate-900/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-smooth">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Login Card */}
        <div className="glass-modern p-8 rounded-3xl shadow-strong">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 gradient-modern rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Journey Pal</h1>
            <p className="text-slate-600">Access your dashboard</p>
          </div>

          {/* Login Type Toggle */}
          <div className="flex bg-slate-100 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setLoginType('tourist')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-smooth ${
                loginType === 'tourist'
                  ? 'bg-white shadow-soft text-orange-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck size={18} />
              Tourist
            </button>
            <button
              onClick={() => setLoginType('officer')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-smooth ${
                loginType === 'officer'
                  ? 'bg-white shadow-soft text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Badge size={18} />
              Officer
            </button>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">
                {loginType === 'tourist' ? 'Tourist ID / Email' : 'Officer Badge / Email'}
              </Label>
              <Input
                id="email"
                type="text"
                placeholder={`Enter your ${loginType} credentials`}
                className="h-12 bg-white/50 border-slate-200 focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-12 bg-white/50 border-slate-200 focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300" />
                <span className="text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-smooth">
                Forgot password?
              </a>
            </div>

            <Button 
              variant={loginType === 'tourist' ? 'modern-orange' : 'modern-dark'} 
              size="lg" 
              className="w-full h-12 text-base font-semibold"
            >
              Access {loginType === 'tourist' ? 'Tourist' : 'Officer'} Dashboard
            </Button>

            <p className="text-center text-sm text-slate-600">
              New {loginType}? 
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-smooth ml-1">
                Create Account
              </a>
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-8">
          <p className="text-xs text-slate-500 mb-4">Secured and trusted worldwide</p>
          <div className="flex justify-center gap-4 opacity-60">
            <div className="px-3 py-1 bg-white/30 rounded-lg text-xs font-medium text-slate-600">
              256-bit SSL
            </div>
            <div className="px-3 py-1 bg-white/30 rounded-lg text-xs font-medium text-slate-600">
              GDPR Compliant
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;