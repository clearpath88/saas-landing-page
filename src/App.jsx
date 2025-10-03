import React, { useState } from 'react';
import { Sparkles, Zap, Shield, ArrowRight, Check, Menu, X } from 'lucide-react';

export default function SaaSLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">VelocityAI</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-400 transition">Features</a>
              <a href="#pricing" className="hover:text-purple-400 transition">Pricing</a>
              <a href="#" className="hover:text-purple-400 transition">About</a>
            </div>

            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 hover:text-purple-400 transition">Sign In</button>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block hover:text-purple-400">Features</a>
              <a href="#pricing" className="block hover:text-purple-400">Pricing</a>
              <a href="#" className="block hover:text-purple-400">About</a>
              <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm">
            🚀 Now with GPT-4 Integration
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ship Products 10x Faster
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your ideas into production-ready code with AI-powered development tools. Built for modern teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-lg text-lg font-semibold transition">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <div className="bg-slate-800/50 rounded-2xl border border-purple-500/20 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-400">10k+</div>
                  <div className="text-gray-400">Active Developers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-400">500k+</div>
                  <div className="text-gray-400">Projects Built</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-400">99.9%</div>
                  <div className="text-gray-400">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Speed & Scale</h2>
            <p className="text-xl text-gray-400">Everything you need to build modern applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-400">Generate production code in seconds. Our AI understands context and writes clean, optimized code.</p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-400">Bank-level encryption and compliance. SOC 2 Type II certified with 99.9% uptime guarantee.</p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI-Powered</h3>
              <p className="text-gray-400">Advanced machine learning models trained on billions of lines of production code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20">
              <div className="text-sm font-semibold text-purple-400 mb-2">STARTER</div>
              <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-400 mb-6">Perfect for side projects</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>10 projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>100k API calls/mo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Community support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-b from-purple-600/20 to-slate-800/50 p-8 rounded-2xl border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-purple-400 mb-2">PRO</div>
              <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-400 mb-6">For professional developers</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>1M API calls/mo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/20">
              <div className="text-sm font-semibold text-purple-400 mb-2">ENTERPRISE</div>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <p className="text-gray-400 mb-6">For large teams</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Custom API limits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>SLA guarantees</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build Faster?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of developers shipping products at lightning speed</p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 mx-auto transition transform hover:scale-105">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-bold text-white">VelocityAI</span>
          </div>
          <p>&copy; 2025 VelocityAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}