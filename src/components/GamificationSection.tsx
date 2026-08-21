import React, { useState } from 'react';
import { Trophy, Star } from 'lucide-react';
import { RANK_MILESTONES, CALCULATE_XP_FOR_LEVEL } from '../data/initialData';

export const GamificationSection: React.FC = () => {
  const [sliderLevel, setSliderLevel] = useState<number>(25);

  const currentXp = CALCULATE_XP_FOR_LEVEL(sliderLevel);
  const matchedMilestone = [...RANK_MILESTONES].reverse().find(m => sliderLevel >= m.level) || RANK_MILESTONES[0];

  return (
    <section id="gamification" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-slate-500" />
            <span>PROGRESS & REPUTATION TIERS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            100 Levels of Connection: Rewarding Micro-Courage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Traditional gamification punishes broken streaks with threat-based notifications. Callship rewards every micro-effort of human connection—including forgiving yourself.
          </p>
        </div>

        {/* XP Triggers Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          
          <div className="app-surface rounded-xl p-4 text-center bg-white border border-slate-200 shadow-xs">
            <div className="text-lg font-bold text-emerald-700 font-mono">+50 XP</div>
            <div className="text-xs font-bold text-slate-900 mt-1">2-Min Sprint</div>
            <p className="text-[11px] text-slate-600 mt-1">Completed brief call</p>
          </div>

          <div className="app-surface rounded-xl p-4 text-center bg-white border border-slate-200 shadow-xs">
            <div className="text-lg font-bold text-amber-700 font-mono">+20 XP</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Shame Reset</div>
            <p className="text-[11px] text-slate-600 mt-1">Self-compassion action</p>
          </div>

          <div className="app-surface rounded-xl p-4 text-center bg-white border border-slate-200 shadow-xs">
            <div className="text-lg font-bold text-slate-800 font-mono">+30 XP</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Consistency</div>
            <p className="text-[11px] text-slate-600 mt-1">Regular micro check-in</p>
          </div>

          <div className="app-surface rounded-xl p-4 text-center bg-white border border-slate-200 shadow-xs">
            <div className="text-lg font-bold text-slate-800 font-mono">+25 XP</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Memory Note</div>
            <p className="text-[11px] text-slate-600 mt-1">Logging personal detail</p>
          </div>

          <div className="app-surface rounded-xl p-4 text-center col-span-2 sm:col-span-1 bg-white border border-slate-200 shadow-xs">
            <div className="text-lg font-bold text-slate-800 font-mono">+5 XP/m</div>
            <div className="text-xs font-bold text-slate-900 mt-1">Call Duration</div>
            <p className="text-[11px] text-slate-600 mt-1">Timeboxed connection</p>
          </div>

        </div>

        {/* Interactive 100 Ranks Simulator Slider */}
        <div className="app-surface rounded-2xl p-5 sm:p-7 max-w-3xl mx-auto bg-white border border-slate-200 shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
            <div>
              <span className="text-[11px] font-mono uppercase font-semibold tracking-wider text-slate-500">
                Rank Progression Simulator
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Preview Levels 1 through 100
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] text-slate-500 font-mono uppercase font-semibold block">Cumulative XP</span>
              <span className="text-lg font-bold font-mono text-amber-800">
                {currentXp.toLocaleString()} XP
              </span>
            </div>
          </div>

          {/* Slider input */}
          <div className="mb-6">
            <div className="flex justify-between text-[11px] text-slate-500 font-mono font-medium mb-2">
              <span>Lvl 1</span>
              <span>Lvl 25</span>
              <span>Lvl 50</span>
              <span>Lvl 100</span>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              value={sliderLevel}
              onChange={(e) => setSliderLevel(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
          </div>

          {/* Rank Highlight Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 flex flex-col items-center justify-center shrink-0 shadow-xs">
              <span className="text-xl mb-0.5">{matchedMilestone.badge}</span>
              <span className="text-[10px] font-mono font-bold text-slate-700">LVL {sliderLevel}</span>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h4 className="text-base font-bold text-slate-900">
                  {sliderLevel === 100 ? 'Galactic Connector' : matchedMilestone.title}
                </h4>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800 border border-slate-300">
                  Tier {Math.ceil(sliderLevel / 10)}
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                {matchedMilestone.description}
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                <Star className="w-3.5 h-3.5 text-amber-600" />
                <span><strong>Milestone:</strong> {matchedMilestone.perk}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

