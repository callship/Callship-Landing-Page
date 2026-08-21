import React from 'react';
import { Orbit, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-14 text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs">
                <Orbit className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-sm text-slate-900 tracking-tight">Callship</span>
            </div>
            <p className="text-slate-600 text-xs max-w-sm leading-relaxed">
              The low-pressure, ADHD-friendly friendship companion. Never let a friendship fade out of sight. Reconnect without phone anxiety.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-700 font-mono font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Free • Private Local Storage • No Paywalls</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-[11px] uppercase font-mono tracking-wider">Features</div>
            <ul className="space-y-1.5 text-slate-600">
              <li><a href="#problem-solution" className="hover:text-slate-950 snappy-transition">Psychological Safety</a></li>
              <li><a href="#orbits" className="hover:text-slate-950 snappy-transition">Orbital Architecture</a></li>
              <li><a href="#sprints" className="hover:text-slate-950 snappy-transition">2-Minute Sprints</a></li>
              <li><a href="#gamification" className="hover:text-slate-950 snappy-transition">100 Ranks Progression</a></li>
            </ul>
          </div>

          {/* Pricing & Transparency */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-[11px] uppercase font-mono tracking-wider">Platform</div>
            <ul className="space-y-1.5 text-slate-600">
              <li><a href="#pricing" className="hover:text-slate-950 snappy-transition">100% Free Forever</a></li>
              <li><a href="#pricing" className="hover:text-slate-950 snappy-transition">Optional Coffee Tip Jar</a></li>
              <li><a href="#download-options" className="hover:text-slate-950 snappy-transition">Multi-Platform Access</a></li>
              <li><a href="#faq" className="hover:text-slate-950 snappy-transition">FAQ & Privacy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Callship. Built for neurodivergent thinkers.
          </div>
          <div className="text-slate-600 font-medium">
            Open & Free Friendship Companion
          </div>
        </div>

      </div>
    </footer>
  );
};

