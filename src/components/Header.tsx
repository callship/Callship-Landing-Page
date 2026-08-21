import React from 'react';
import { Orbit, Coffee, Download } from 'lucide-react';

interface HeaderProps {
  onOpenDownload?: () => void;
  onOpenPricing?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header id="callship-header" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white group-hover:bg-slate-800 snappy-transition shadow-sm">
              <Orbit className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-slate-900">
                  Callship
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  100% FREE
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block tracking-tight">ADHD Friendship Companion</p>
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#problem-solution" className="hover:text-slate-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 rounded">ADHD Psychology</a>
          <a href="#orbits" className="hover:text-slate-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 rounded">Cosmic Orbits</a>
          <a href="#sprints" className="hover:text-slate-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 rounded">2-Min Sprints</a>
          <a href="#gamification" className="hover:text-slate-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 rounded">100 Levels</a>
          <a href="#pricing" className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors py-1 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 rounded">
            <span>Free Forever</span>
            <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200">Tip Jar</span>
          </a>
          <a href="#faq" className="hover:text-slate-950 transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-900 rounded">FAQ</a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5">
          {/* Voluntary Coffee Link */}
          <a
            href="#pricing"
            id="btn-header-coffee"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-semibold snappy-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Coffee className="w-3.5 h-3.5 text-amber-700" />
            <span>Support Creator</span>
          </a>

          {/* Direct Free Download CTA */}
          <a
            href="#download"
            id="btn-header-download"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold snappy-transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get Free App</span>
          </a>
        </div>

      </div>
    </header>
  );
};


