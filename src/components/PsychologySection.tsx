import React from 'react';
import { 
  EyeOff, 
  RotateCcw, 
  Clock, 
  BatteryLow, 
  XCircle, 
  CheckCircle2, 
  BrainCircuit
} from 'lucide-react';

export const PsychologySection: React.FC = () => {
  return (
    <section id="problem-solution" className="py-20 relative border-b border-slate-200 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <BrainCircuit className="w-3.5 h-3.5 text-slate-500" />
            <span>RELATIONAL PSYCHOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Why staying in touch is hard—and how Callship fixes it.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Traditional contact apps and corporate trackers treat loved ones like enterprise sales leads with high-pressure pipelines. Callship is engineered with psychological safety, nervous system regulation, and self-compassion.
          </p>
        </div>

        {/* 4 Core Psychological Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          
          {/* 1. Object Permanence */}
          <div className="app-surface rounded-xl p-6 bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              1. Relational Object Permanence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-3.5 leading-relaxed">
              <strong className="text-rose-700">The ADHD Reality:</strong> When someone isn&apos;t in your immediate physical environment or recent notifications, they drift from working memory. It doesn&apos;t mean you stopped caring.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-0.5">The Callship Solution:</strong>
              Cosmic Orbit + Single-Card Spotlight. Exactly one face at a time so your brain never suffers from choice overload or list anxiety.
            </div>
          </div>

          {/* 2. The Ghosting Guilt Spiral */}
          <div className="app-surface rounded-xl p-6 bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              2. The Ghosting Guilt Spiral
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-3.5 leading-relaxed">
              <strong className="text-rose-700">The ADHD Reality:</strong> You forgot to text back for weeks. Now replying feels mortifying: <em>“What will they think?”</em> The shame blocks action completely.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-0.5">The Callship Solution:</strong>
              1-Tap Shame-Free Reset. Erase overdue tallies instantly, access self-aware revival scripts, and get rewarded <span className="font-semibold text-amber-800">+20 XP for self-compassion</span>.
            </div>
          </div>

          {/* 3. The 90-Minute Phone Call Trap */}
          <div className="app-surface rounded-xl p-6 bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              3. The Fear of the Trapped Phone Call
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-3.5 leading-relaxed">
              <strong className="text-rose-700">The ADHD Reality:</strong> You only have 10 minutes of energy, but you worry calling someone will trap you in a 60-minute call with no polite way out.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-0.5">The Callship Solution:</strong>
              Micro 2-Minute Sprints. Pre-call framing script: <em>“My kettle is boiling in 2 mins, just wanted to say hi!”</em> Guaranteed graceful exit with zero awkwardness.
            </div>
          </div>

          {/* 4. Fluctuating Social Battery */}
          <div className="app-surface rounded-xl p-6 bg-white border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
              <BatteryLow className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              4. Unpredictable Energy Levels
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-3.5 leading-relaxed">
              <strong className="text-rose-700">The ADHD Reality:</strong> Some days you have full capacity; other days you operate on 5% battery and a live call feels overwhelming.
            </p>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <strong className="text-slate-900 block mb-0.5">The Callship Solution:</strong>
              Low-Spoon Filtering. Focus on friends who appreciate a quick 10-second voice memo or meme check-in without requiring a full live phone conversation.
            </div>
          </div>

        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="app-surface rounded-xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
              Callship vs. Traditional Trackers
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Why rigid checklists and sales pipelines fail for neurodivergent connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Bad: Traditional Trackers */}
            <div className="p-5 rounded-xl bg-rose-50/60 border border-rose-200">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase font-mono mb-3">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Traditional Trackers & Contact Apps</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-mono font-bold">✕</span>
                  <span>Overwhelming lists of 50+ overdue contacts causing paralysis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-mono font-bold">✕</span>
                  <span>Aggressive red badges and broken streak punishments that induce guilt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-mono font-bold">✕</span>
                  <span>Treats loved ones like enterprise sales leads in a conversion funnel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-mono font-bold">✕</span>
                  <span>Requires typing long detailed logs requiring high executive function.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-mono font-bold">✕</span>
                  <span>Demands $10–$20/month subscription paywalls just to store basic notes.</span>
                </li>
              </ul>
            </div>

            {/* Good: Callship */}
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase font-mono mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Callship: Low-Pressure Companion</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-800 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono font-bold">✓</span>
                  <span><strong>1 Card at a Time:</strong> Spotlight displays exactly one person per session.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono font-bold">✓</span>
                  <span><strong>Shame-Free Reset:</strong> Erase overdue guilt with 1 click and earn +20 XP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono font-bold">✓</span>
                  <span><strong>2-Minute Sprints:</strong> Pacing breath, timer & scripted graceful exit lines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono font-bold">✓</span>
                  <span><strong>Cosmic Solar System:</strong> Visual orbits show who is drifting without judgment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono font-bold">✓</span>
                  <span><strong>100% Free Forever:</strong> All features unlocked with private offline storage.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

