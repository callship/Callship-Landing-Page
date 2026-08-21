import React, { useState } from 'react';
import { Clock, Copy, Check } from 'lucide-react';

export const SprintCallDeepDive: React.FC = () => {
  const [copiedScript, setCopiedScript] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(id);
    setTimeout(() => setCopiedScript(null), 2500);
  };

  return (
    <section id="sprints" className="py-20 relative bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>TIME-CONSTRAINED SPRINT PROTOCOL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            The 2-Minute Sprint: Connection Without the 60-Minute Trap
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Human voices convey far more warmth than dry text messages. But endless phone calls drain introverted batteries. Callship frames calls into fast, structured 120-second moments.
          </p>
        </div>

        {/* 4-Step Sprint Anatomy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* Step 1 */}
          <div className="app-surface rounded-xl p-5 relative bg-white border border-slate-200 shadow-xs">
            <span className="inline-block text-[11px] font-mono font-bold text-slate-700 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 mb-3">
              PHASE 01
            </span>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">Grounding Pacer (8s)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Before dialing, a subtle visual pacing cycle settles nervous system activation and pre-call friction.
            </p>
            <div className="mt-3 pt-2.5 border-t border-slate-200 text-[11px] font-mono font-medium text-slate-500">
              Inhale • Hold • Exhale
            </div>
          </div>

          {/* Step 2 */}
          <div className="app-surface rounded-xl p-5 relative bg-white border border-slate-200 shadow-xs">
            <span className="inline-block text-[11px] font-mono font-bold text-amber-800 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 mb-3">
              PHASE 02
            </span>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">Boundary Opener</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Set clear time constraints immediately: <em>“I have 2 mins before my kettle boils, wanted to say hi!”</em>
            </p>
            <div className="mt-3 pt-2.5 border-t border-slate-200 text-[11px] font-mono font-semibold text-amber-700">
              Clear constraint upfront
            </div>
          </div>

          {/* Step 3 */}
          <div className="app-surface rounded-xl p-5 relative bg-white border border-slate-200 shadow-xs">
            <span className="inline-block text-[11px] font-mono font-bold text-slate-700 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 mb-3">
              PHASE 03
            </span>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">Recall Prompts</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Glance at personal notes (pet names, coffee orders, projects). Exchange a genuine laugh or concise update.
            </p>
            <div className="mt-3 pt-2.5 border-t border-slate-200 text-[11px] font-mono font-medium text-slate-700">
              Direct, contextual warmth
            </div>
          </div>

          {/* Step 4 */}
          <div className="app-surface rounded-xl p-5 relative bg-white border border-slate-200 shadow-xs">
            <span className="inline-block text-[11px] font-mono font-bold text-emerald-800 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 mb-3">
              PHASE 04
            </span>
            <h3 className="text-sm font-bold text-slate-900 mb-1.5">Graceful Exit + XP</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The internal timer concludes: <em>“Kettle just clicked! Love you, speak soon!”</em> Complete energized and claim +50 XP.
            </p>
            <div className="mt-3 pt-2.5 border-t border-slate-200 text-[11px] font-mono font-semibold text-emerald-700">
              +50 XP • Zero social drain
            </div>
          </div>

        </div>

        {/* Script Vault Showcase Card */}
        <div className="app-surface rounded-2xl p-5 sm:p-7 bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Social Anxiety Script Templates</h3>
              <p className="text-xs text-slate-600">Copy tested conversation starters directly to clipboard.</p>
            </div>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
              Instant Clipboard Copy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            
            {/* Script 1 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold font-mono text-amber-800">The Kettle Boundary Opener</span>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">Phone Call</span>
                </div>
                <p className="text-xs text-slate-700 italic mb-4 leading-relaxed">
                  “Hey! My kettle is boiling in 2 minutes, but I was just thinking of you and wanted to hear your voice real quick!”
                </p>
              </div>
              <button
                onClick={() => copyToClipboard("Hey! My kettle is boiling in 2 minutes, but I was just thinking of you and wanted to hear your voice real quick!", "s1")}
                className="w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 snappy-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shadow-xs cursor-pointer"
              >
                {copiedScript === 's1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                <span>{copiedScript === 's1' ? 'Copied to Clipboard' : 'Copy Script'}</span>
              </button>
            </div>

            {/* Script 2 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold font-mono text-slate-900">The Gentle Ghosting Revival</span>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-200 text-slate-800 border border-slate-300">Text / Voice</span>
                </div>
                <p className="text-xs text-slate-700 italic mb-4 leading-relaxed">
                  “Hey friend! My brain lost object permanence for a bit, but I love you deeply and you crossed my mind today. Zero pressure to reply—just sending a warm hug!”
                </p>
              </div>
              <button
                onClick={() => copyToClipboard("Hey friend! My brain lost object permanence for a bit, but I love you deeply and you crossed my mind today. Zero pressure to reply—just sending a warm hug!", "s2")}
                className="w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-semibold text-slate-800 flex items-center justify-center gap-1.5 snappy-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shadow-xs cursor-pointer"
              >
                {copiedScript === 's2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                <span>{copiedScript === 's2' ? 'Copied to Clipboard' : 'Copy Script'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

