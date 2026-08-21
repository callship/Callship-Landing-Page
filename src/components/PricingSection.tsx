import React, { useState } from 'react';
import { Check, ShieldCheck, Heart, Coffee, Download, ArrowRight, Gift, Smartphone, Apple, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PricingSection: React.FC = () => {
  const [coffeeTipped, setCoffeeTipped] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number>(3);

  const handleSendCoffee = (amount: number) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981', '#1E293B']
    });
    setCoffeeTipped(amount);
    setTimeout(() => {
      setCoffeeTipped(null);
    }, 4000);
  };

  return (
    <section id="pricing" className="py-20 relative bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <Gift className="w-3.5 h-3.5 text-slate-500" />
            <span>100% FREE FOREVER • VOLUNTARY COFFEE SUPPORT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Callship is 100% Free. No Paywalls, Ever.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Meaningful friendship should never be locked behind a subscription paywall. Every single capability is completely unlocked. If Callship brings peace to your life, you can voluntarily buy the creator a coffee.
          </p>
        </div>

        {/* Free Forever & Optional Coffee Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-5xl mx-auto mb-12 items-stretch">
          
          {/* Main Free Tier Card (7 cols) */}
          <div className="lg:col-span-7 app-surface rounded-2xl p-6 sm:p-8 bg-white border border-slate-300 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Full Platform Access
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-800 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                  FREE ALWAYS
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold text-slate-900 font-mono">$0</span>
                <span className="text-xs text-slate-600 font-mono">/ Free for everyone</span>
              </div>
              <p className="text-xs text-slate-600 mb-5">
                All features unlocked. Zero advertisements, zero user tracking, zero subscription prompts.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 pb-5 border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
                  <span><strong>Unlimited Contacts:</strong> Organize as many friends and circles as needed.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Daily 1-Card Spotlight:</strong> Eases decision fatigue with one face per view.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>2-Minute Call Sprint Mode:</strong> Breath pacer, 120s timer & exit scripts.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>1-Tap Shame-Free Resets:</strong> Clear overdue counters and claim +20 XP.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Cosmic Solar System View:</strong> 4 gravitational layers of closeness.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>100 Levels Progression:</strong> Reward every micro-effort of connection.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Private Local Storage:</strong> All data stored securely in your browser.</span>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <a
                href="#download-options"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 snappy-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Get Callship Free</span>
              </a>
            </div>
          </div>

          {/* Optional Coffee Tip Jar Card (5 cols) */}
          <div className="lg:col-span-5 app-surface rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-amber-800 font-mono text-xs font-bold uppercase tracking-wider">
                  <Coffee className="w-3.5 h-3.5 text-amber-600" />
                  <span>Voluntary Support</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-mono font-semibold">
                  Optional
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Support Indie Development
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                Callship is built by an independent creator. Tips directly cover domain and maintenance costs.
              </p>

              {/* Coffee Selector Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { amount: 3, label: '1 Coffee', price: '$3' },
                  { amount: 5, label: '2 Coffees', price: '$5' },
                  { amount: 10, label: 'Roast Bag', price: '$10' },
                ].map((item) => (
                  <button
                    key={item.amount}
                    onClick={() => setSelectedAmount(item.amount)}
                    className={`p-2.5 rounded-xl border text-center snappy-transition cursor-pointer ${
                      selectedAmount === item.amount
                        ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900`}
                  >
                    <div className="text-xs font-bold font-mono">{item.price}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.label}</div>
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1 mb-5">
                <div className="flex items-center gap-1.5 text-amber-800 font-semibold text-xs">
                  <Heart className="w-3.5 h-3.5 text-amber-600" />
                  <span>Voluntary Supporter Badge</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Supporters receive sincere gratitude and an optional gold star on their profile.
                </p>
              </div>
            </div>

            <div>
              {coffeeTipped ? (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-center text-emerald-900 text-xs font-bold flex items-center justify-center gap-2">
                  <Coffee className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Thank you for the ${coffeeTipped} coffee tip!</span>
                </div>
              ) : (
                <button
                  id="btn-send-coffee-tip"
                  onClick={() => handleSendCoffee(selectedAmount)}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 snappy-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-xs cursor-pointer"
                >
                  <Coffee className="w-3.5 h-3.5 text-slate-950" />
                  <span>Send ${selectedAmount} Coffee Tip</span>
                </button>
              )}
              <p className="text-[10px] text-slate-500 text-center mt-2 font-mono">
                100% voluntary • Never required
              </p>
            </div>
          </div>

        </div>

        {/* Dedicated App Download Options Section */}
        <div id="download-options" className="app-surface rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 text-center bg-white border border-slate-200 shadow-sm">
          <span className="text-[11px] font-mono uppercase font-semibold tracking-wider text-slate-500 block mb-1">
            MULTI-PLATFORM COMPANION
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            Get Callship Free Today
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Use directly in your browser or install as a lightweight web app across devices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="#app-preview"
              className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 flex flex-col items-center gap-2.5 snappy-transition group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-800 border border-slate-200 shadow-xs">
                <Apple className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Apple iOS</div>
                <div className="text-[11px] text-slate-500">Add to Home Screen</div>
              </div>
              <span className="text-xs text-slate-700 font-mono font-medium flex items-center gap-1 group-hover:text-slate-900">
                Launch <ArrowRight className="w-3 h-3" />
              </span>
            </a>

            <a
              href="#app-preview"
              className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 flex flex-col items-center gap-2.5 snappy-transition group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-800 border border-slate-200 shadow-xs">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Android</div>
                <div className="text-[11px] text-slate-500">Install PWA / APK</div>
              </div>
              <span className="text-xs text-slate-700 font-mono font-medium flex items-center gap-1 group-hover:text-slate-900">
                Launch <ArrowRight className="w-3 h-3" />
              </span>
            </a>

            <a
              href="#app-preview"
              className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 flex flex-col items-center gap-2.5 snappy-transition group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-800 border border-slate-200 shadow-xs">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Web App</div>
                <div className="text-[11px] text-slate-500">Instant Browser Access</div>
              </div>
              <span className="text-xs text-slate-700 font-mono font-medium flex items-center gap-1 group-hover:text-slate-900">
                Launch <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Privacy Promise Banner */}
        <div className="app-surface rounded-2xl p-5 border border-slate-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left bg-white shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
            <ShieldCheck className="w-5 h-5 text-slate-700" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900 mb-0.5">Privacy First: Zero Data Harvesting</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your contact names, notes, sprint logs, and schedules never leave your local device. We do not operate ad tracking or store personal records on external servers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};


