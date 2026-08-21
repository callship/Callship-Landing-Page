import React, { useState } from 'react';
import { Orbit, Users } from 'lucide-react';
import { OrbitTier } from '../types';

export const OrbitalSystemExplainer: React.FC = () => {
  const [selectedOrbit, setSelectedOrbit] = useState<OrbitTier>('inner_core');

  const orbitsInfo: Record<OrbitTier, {
    title: string;
    subtitle: string;
    cadence: string;
    description: string;
    examples: string;
    badgeStyle: string;
    activeBorder: string;
  }> = {
    inner_core: {
      title: '1. Inner Core',
      subtitle: 'The essential people who anchor your day-to-day life.',
      cadence: '5 to 7 Days',
      description: 'Partners, best friends, and immediate family. Even a 90-second voice memo keeps this orbit charged with clear connection.',
      examples: 'College best friend, spouse, sibling, parent',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
      activeBorder: 'border-amber-500 bg-amber-50/50 shadow-xs',
    },
    close_circle: {
      title: '2. Close Circle',
      subtitle: 'Cherished friends you care for deeply but see periodically.',
      cadence: '14 to 21 Days',
      description: 'Friends from past chapters or regular hobby buddies. A quick 2-minute tea sprint every few weeks keeps the bond effortless.',
      examples: 'Gym buddies, regular dinner friends, creative peers',
      badgeStyle: 'bg-slate-100 text-slate-800 border-slate-200',
      activeBorder: 'border-slate-800 bg-slate-50 shadow-xs',
    },
    outer_orbit: {
      title: '3. Outer Orbit',
      subtitle: 'Valued connections that thrive with low contact frequency.',
      cadence: '30 to 45 Days',
      description: 'Mentors, long-distance pals, and former colleagues. Low-spoon meme drops or quick life updates work best here.',
      examples: 'Former coworkers, long-distance friends, mentors',
      badgeStyle: 'bg-slate-100 text-slate-800 border-slate-200',
      activeBorder: 'border-slate-800 bg-slate-50 shadow-xs',
    },
    distant_constellation: {
      title: '4. Distant Constellation',
      subtitle: 'Lifelong friends where time disappears between chats.',
      cadence: '60 to 90 Days',
      description: 'Childhood friends where you pick up right where you left off. Zero guilt, zero expectations, pure mutual goodwill.',
      examples: 'Childhood hometown friends, university study circle',
      badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      activeBorder: 'border-emerald-600 bg-emerald-50/50 shadow-xs',
    },
  };

  return (
    <section id="orbits" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <Orbit className="w-3.5 h-3.5 text-slate-500" />
            <span>RELATIONSHIP TOPOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Visual Orbits: Nobody Gets Lost in the Void
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Instead of an anxiety-inducing to-do checklist, Callship organizes your contacts into an intuitive orbital map. People drift naturally—and one gentle touch brings them back.
          </p>
        </div>

        {/* Interactive Orbit Selector & Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center mb-10">
          
          {/* Left: 4 Orbit Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {(['inner_core', 'close_circle', 'outer_orbit', 'distant_constellation'] as OrbitTier[]).map((tierKey) => {
              const info = orbitsInfo[tierKey];
              const isSelected = selectedOrbit === tierKey;
              return (
                <button
                  key={tierKey}
                  onClick={() => setSelectedOrbit(tierKey)}
                  className={`w-full text-left p-4 rounded-xl snappy-transition flex items-start gap-3 border ${
                    isSelected
                      ? `${info.activeBorder} text-slate-900`
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900`}
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900">{info.title}</h4>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${info.badgeStyle}`}>
                        {info.cadence}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{info.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Orbit Preview Canvas */}
          <div className="lg:col-span-7">
            <div className="app-surface rounded-2xl p-5 sm:p-6 bg-white border border-slate-200 shadow-md">
              
              {/* Celestial Graphic Ring Simulation */}
              <div className="relative w-full h-64 sm:h-72 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-slate-50 border border-slate-200">
                {/* Center Core (You) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-md">
                    YOU
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-600 mt-1 uppercase">Anchor</span>
                </div>

                {/* Orbit Rings */}
                <div className={`absolute w-28 h-28 rounded-full border border-dashed transition-all duration-300 ${
                  selectedOrbit === 'inner_core' ? 'border-amber-500 scale-105 stroke-2' : 'border-slate-300'
                }`} />
                <div className={`absolute w-44 h-44 rounded-full border border-dashed transition-all duration-300 ${
                  selectedOrbit === 'close_circle' ? 'border-slate-700 scale-105 stroke-2' : 'border-slate-300'
                }`} />
                <div className={`absolute w-60 h-60 rounded-full border border-dashed transition-all duration-300 ${
                  selectedOrbit === 'outer_orbit' ? 'border-slate-700 scale-105 stroke-2' : 'border-slate-300'
                }`} />
                <div className={`absolute w-76 h-76 rounded-full border border-dashed transition-all duration-300 ${
                  selectedOrbit === 'distant_constellation' ? 'border-emerald-600 scale-105 stroke-2' : 'border-slate-300'
                }`} />

                {/* Planet indicator */}
                {selectedOrbit === 'inner_core' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 animate-orbital-slow pointer-events-none">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-300 text-[10px] font-mono font-bold text-amber-900 shadow-sm">
                      <span>Maya</span>
                    </div>
                  </div>
                )}
                {selectedOrbit === 'close_circle' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 animate-orbital-slow pointer-events-none">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-300 text-[10px] font-mono font-bold text-slate-800 shadow-sm">
                      <span>Liam</span>
                    </div>
                  </div>
                )}
                {selectedOrbit === 'outer_orbit' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 animate-orbital-slow pointer-events-none">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-300 text-[10px] font-mono font-bold text-slate-800 shadow-sm">
                      <span>Sarah</span>
                    </div>
                  </div>
                )}
                {selectedOrbit === 'distant_constellation' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-76 h-76 animate-orbital-slow pointer-events-none">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 text-[10px] font-mono font-bold text-emerald-900 shadow-sm">
                      <span>Marcus</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tier Details Card */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase font-semibold tracking-wider text-slate-500">Selected Orbit Tier</span>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${orbitsInfo[selectedOrbit].badgeStyle}`}>
                    Interval: {orbitsInfo[selectedOrbit].cadence}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{orbitsInfo[selectedOrbit].title}</h3>
                <p className="text-xs text-slate-700 mb-2.5 leading-relaxed">
                  {orbitsInfo[selectedOrbit].description}
                </p>
                <div className="text-xs text-slate-600 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>Examples: {orbitsInfo[selectedOrbit].examples}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

