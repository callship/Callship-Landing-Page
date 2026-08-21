import React, { useState } from 'react';
import { 
  Phone, 
  RotateCcw, 
  Coffee, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Check,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onOpenPricing?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [heroCardState, setHeroCardState] = useState<'idle' | 'reset_done' | 'call_logged'>('idle');
  const [heroXp, setHeroXp] = useState(140);
  const [showNotes, setShowNotes] = useState(false);

  const triggerHeroReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D97706', '#059669', '#1E293B']
    });
    setHeroXp(prev => prev + 20);
    setHeroCardState('reset_done');
    setTimeout(() => {
      setHeroCardState('idle');
    }, 4000);
  };

  const triggerHeroCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#059669', '#2563EB', '#1E293B']
    });
    setHeroXp(prev => prev + 50);
    setHeroCardState('call_logged');
    setTimeout(() => {
      setHeroCardState('idle');
    }, 4000);
  };

  return (
    <section className="relative pt-12 pb-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-emerald-700 font-bold">100% FREE APP</span>
            <span className="text-slate-300">/</span>
            <span>ADHD Friendship Companion</span>
            <span className="text-slate-300">/</span>
            <span className="text-amber-800 font-medium flex items-center gap-1">
              <Coffee className="w-3 h-3 text-amber-600" /> Optional Coffee Tip
            </span>
          </div>
        </div>

        {/* Main Headline & Pitch */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5">
            Never let a friendship fade out of sight. Reconnect without the phone guilt.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Engineered for <strong className="text-slate-900 font-semibold">ADHD thinkers, introverts, and overthinkers</strong> who love their friends but struggle with object permanence and text paralysis. Micro 2-minute phone sprints, shame-free resets, and an orbital proximity map.
          </p>

          {/* Action CTAs */}
          <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <a
              id="btn-hero-download-free"
              href="#download-options"
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm snappy-transition flex items-center justify-center gap-2.5 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Get Callship Free (iOS & Android)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="btn-hero-coffee-support"
              href="#pricing"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-800 font-semibold text-sm flex items-center justify-center gap-2 snappy-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-sm"
            >
              <Coffee className="w-4 h-4 text-amber-700" />
              <span>Free App • Optional Coffee Support</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-slate-600 font-mono">
            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <Check className="w-3.5 h-3.5" />
              <span>100% Free Forever</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Private Offline Storage</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-800 font-medium">
              <Coffee className="w-3.5 h-3.5 text-amber-600" />
              <span>2-Minute Micro Sprints</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span>Shame-Free Reset</span>
            </div>
          </div>
        </div>

        {/* Interactive Spotlight Physical Widget */}
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-2.5">
            <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase font-semibold">
              Live Spotlight Component Preview
            </span>
          </div>

          <div className="app-surface rounded-2xl p-5 sm:p-6 relative shadow-md">
            
            {/* Top Card Bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wide">Today&apos;s Focus Contact</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-500 font-mono">Dopamine:</span>
                <span className="text-xs font-mono font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {heroXp} XP (Lvl 2)
                </span>
              </div>
            </div>

            {/* Friend Persona Header */}
            <div className="flex items-start gap-3.5 mb-4">
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
                  alt="Maya Lin"
                  className="w-14 h-14 rounded-xl object-cover border border-slate-200 shadow-sm"
                />
                <span className="absolute -bottom-1 -right-1 px-1 py-0.2 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono font-bold text-white">
                  CORE
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900 truncate">Maya Lin</h3>
                  <span className="text-[11px] font-mono font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded shrink-0">
                    12d since talk
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 truncate">College Bestie • Low-Spoon Friendly</p>
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                    ☕ 2-min kettle call
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                    🐱 Cat: Mango
                  </span>
                </div>
              </div>
            </div>

            {/* Memory Scratchpad Toggle */}
            <div className="mb-4 bg-slate-50 rounded-xl p-3.5 border border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-700 mb-1">
                <span className="font-mono text-[11px] font-semibold text-slate-500">
                  Quick Memory Scratchpad
                </span>
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className="text-[11px] text-slate-700 hover:text-slate-950 font-medium underline font-mono focus-visible:outline-none"
                >
                  {showNotes ? 'Collapse' : 'Details'}
                </button>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                {showNotes
                  ? '• Adopted ginger tabby "Mango" • Starting ceramics class on Tuesdays • Drink: Oat milk vanilla latte'
                  : '• Adopted ginger tabby "Mango" • Loves oat vanilla lattes'}
              </p>
            </div>

            {/* Status Message if clicked */}
            {heroCardState === 'reset_done' && (
              <div className="mb-3.5 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                <RotateCcw className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span><strong>Shame-Free Reset:</strong> Overdue guilt erased. +20 XP awarded for self-compassion.</span>
              </div>
            )}

            {heroCardState === 'call_logged' && (
              <div className="mb-3.5 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span><strong>2-Minute Sprint Logged:</strong> Orbit recharged. +50 XP granted.</span>
              </div>
            )}

            {/* Interactive Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                id="btn-hero-test-sprint"
                onClick={triggerHeroCall}
                className="py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 snappy-transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Log 2-Min Sprint (+50 XP)</span>
              </button>

              <button
                id="btn-hero-test-reset"
                onClick={triggerHeroReset}
                className="py-2.5 px-3 rounded-lg bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-800 font-bold text-xs flex items-center justify-center gap-1.5 snappy-transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5 text-amber-700" />
                <span>Shame-Free Reset (+20 XP)</span>
              </button>
            </div>

            {/* Bottom mini hint */}
            <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Zero red badges. No judgment.</span>
              <span className="text-emerald-700 font-semibold">100% Free Forever</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


